"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

const STORAGE_KEY = "websitesbouwen:wensenlijst:v1";

export type WishlistItem = {
  id: string;
  name: string;
  categoryTitle: string;
};

type WishlistContextValue = {
  items: WishlistItem[];
  count: number;
  /** Pas `true` nadat de opgeslagen wensenlijst (indien aanwezig) uit
   * localStorage is ingelezen — voorkomt dat de knop/badge tijdens de
   * eerste render altijd "leeg" toont voordat de echte staat bekend is. */
  isLoaded: boolean;
  hasItem: (id: string) => boolean;
  addItem: (item: WishlistItem) => void;
  removeItem: (id: string) => void;
  toggleItem: (item: WishlistItem) => void;
  clear: () => void;
};

const WishlistContext = createContext<WishlistContextValue | null>(null);

/**
 * Eén gedeelde wensenlijst voor de hele site (Context + localStorage), hier
 * gebruikt voor losse automatiseringsopties i.p.v. producten. Puur lokaal
 * per browser, niet gekoppeld aan een account. Een Context is nodig — niet
 * alleen een losse hook per component — omdat bijvoorbeeld de knop op een
 * dienstenkaart en de teller in de header allebei dezelfde live staat
 * moeten delen binnen één tabblad.
 */
export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Leest bewust pas ná de eerste render uit localStorage: tijdens SSR
  // bestaat `window` niet, dus de server rendert altijd een lege lijst. Zou
  // dit in de useState-initializer gebeuren, dan zou de client bij hydration
  // een andere uitkomst renderen dan de server (hydration mismatch).
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        // eslint-disable-next-line react-hooks/set-state-in-effect -- eenmalige hydration-lezing bij mount (zie comment hierboven), geen cascaderende update.
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {
      // Corrupte of ontoegankelijke opslag: start met een lege wensenlijst.
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Opslag vol/geblokkeerd: wensenlijst blijft werken voor deze sessie.
    }
  }, [items, isLoaded]);

  const hasItem = useCallback((id: string) => items.some((item) => item.id === id), [items]);

  const addItem = useCallback((item: WishlistItem) => {
    setItems((prev) => (prev.some((existing) => existing.id === item.id) ? prev : [...prev, item]));
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const toggleItem = useCallback((item: WishlistItem) => {
    setItems((prev) =>
      prev.some((existing) => existing.id === item.id)
        ? prev.filter((existing) => existing.id !== item.id)
        : [...prev, item]
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  return (
    <WishlistContext.Provider
      value={{ items, count: items.length, isLoaded, hasItem, addItem, removeItem, toggleItem, clear }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist moet binnen een WishlistProvider gebruikt worden.");
  return context;
}
