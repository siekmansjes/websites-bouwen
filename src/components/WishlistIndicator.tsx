"use client";

import Link from "next/link";
import { useWishlist } from "@/lib/wishlist/WishlistContext";

export function WishlistIndicator({ className }: { className?: string }) {
  const { isLoaded, count } = useWishlist();
  const shown = isLoaded ? count : 0;

  return (
    <Link
      href="/contact?mode=offerte&source=wensenlijst"
      className={className}
      aria-label={shown > 0 ? `Wensenlijst, ${shown} optie${shown === 1 ? "" : "s"}` : "Wensenlijst"}
      style={{ position: "relative", display: "inline-flex", color: "oklch(21% 0.015 265)" }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-7.5-4.6-10-9.3C.4 8.2 2 4.5 5.6 4a5 5 0 0 1 6.4 2.3A5 5 0 0 1 18.4 4c3.6.5 5.2 4.2 3.6 7.7C19.5 16.4 12 21 12 21z" />
      </svg>
      {shown > 0 && (
        <span
          style={{
            position: "absolute",
            top: -6,
            right: -8,
            background: "oklch(42% 0.08 148)",
            color: "oklch(98% 0.004 90)",
            fontSize: 11,
            fontWeight: 700,
            borderRadius: "50%",
            width: 17,
            height: 17,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: 1,
          }}
        >
          {shown}
        </span>
      )}
    </Link>
  );
}
