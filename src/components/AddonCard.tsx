import { AddToWishlistButton } from "./AddToWishlistButton";
import type { AddonItem } from "@/lib/addons";

export function AddonCard({ addon }: { addon: AddonItem }) {
  return (
    <div className="card" style={{ padding: "22px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
        <h3 style={{ fontSize: 16.5 }}>{addon.name}</h3>
        <span style={{ fontSize: 14, fontWeight: 700, color: "oklch(42% 0.08 148)", whiteSpace: "nowrap" }}>{addon.priceLabel}</span>
      </div>
      <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "oklch(52% 0.012 265)", flex: 1 }}>{addon.description}</p>
      <AddToWishlistButton item={{ id: addon.id, name: addon.name, categoryTitle: "Automatisering" }} />
    </div>
  );
}
