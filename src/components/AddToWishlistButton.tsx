"use client";

import { useWishlist, type WishlistItem } from "@/lib/wishlist/WishlistContext";

export function AddToWishlistButton({ item }: { item: WishlistItem }) {
  const { isLoaded, hasItem, toggleItem } = useWishlist();
  const active = isLoaded && hasItem(item.id);

  return (
    <button
      type="button"
      onClick={() => toggleItem(item)}
      aria-pressed={active}
      className="btn btn-secondary"
      style={{
        fontSize: 13.5,
        padding: "9px 16px",
        borderColor: active ? "oklch(42% 0.08 148)" : "oklch(90% 0.006 90)",
        color: active ? "oklch(42% 0.08 148)" : "oklch(21% 0.015 265)",
      }}
    >
      {active ? "✓ Op wensenlijst" : "+ Wensenlijst"}
    </button>
  );
}
