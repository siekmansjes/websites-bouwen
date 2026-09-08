"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useWishlist } from "@/lib/wishlist/WishlistContext";
import { packages } from "@/lib/packages";
import { inputStyle, labelStyle } from "./formStyles";

type Status = "idle" | "submitting" | "success";

export function OfferteBuilder({ onBack, initialPackageId }: { onBack: () => void; initialPackageId?: string }) {
  const { items, isLoaded, removeItem } = useWishlist();
  const [packageId, setPackageId] = useState(initialPackageId ?? "");
  const [naam, setNaam] = useState("");
  const [bedrijfsnaam, setBedrijfsnaam] = useState("");
  const [email, setEmail] = useState("");
  const [opmerkingen, setOpmerkingen] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    // TODO: hier moet de daadwerkelijke offerteaanvraag naartoe — bv. een
    // HubSpot-koppeling zoals bij Parkmade (contact/deal/notitie aanmaken),
    // maar met een eigen account/pipeline/eigenaar-ID voor dit bedrijf.
    // Voor nu simuleert dit alleen het versturen, met het gekozen pakket +
    // de wensenlijst als payload, zodat de flow al volledig te testen is.
    await new Promise((resolve) => setTimeout(resolve, 400));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div style={{ maxWidth: 560 }}>
        <h1 style={{ fontSize: 30 }}>Offerteaanvraag verstuurd</h1>
        <div className="card" style={{ padding: 32, marginTop: 24 }}>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: "oklch(52% 0.012 265)" }}>
            Bedankt {naam || ""}, uw aanvraag is ontvangen. Ik neem binnen 24 uur contact op met een voorstel.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 640 }}>
      <button
        type="button"
        onClick={onBack}
        style={{ background: "none", border: "none", padding: 0, cursor: "pointer", fontSize: 14, fontWeight: 600, color: "oklch(52% 0.012 265)" }}
      >
        ← Andere manier van contact
      </button>

      <h1 style={{ fontSize: 30, marginTop: 18 }}>Offerte samenstellen</h1>
      <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "oklch(52% 0.012 265)", marginTop: 10 }}>
        Kies een pakket en stuur eventueel uw wensenlijst met automatiseringen mee.
      </p>

      <form onSubmit={handleSubmit} className="card" style={{ padding: 32, marginTop: 24, display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <label style={labelStyle}>Pakket</label>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {packages.map((pkg) => (
              <label
                key={pkg.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 14px",
                  border: `1px solid ${packageId === pkg.id ? "oklch(42% 0.08 148)" : "oklch(90% 0.006 90)"}`,
                  borderRadius: 6,
                  fontSize: 14.5,
                  cursor: "pointer",
                }}
              >
                <input type="radio" name="pakket" value={pkg.id} checked={packageId === pkg.id} onChange={() => setPackageId(pkg.id)} style={{ accentColor: "oklch(42% 0.08 148)" }} />
                <span style={{ fontWeight: 600 }}>{pkg.name}</span>
                <span style={{ color: "oklch(52% 0.012 265)" }}>— {pkg.priceLabel}</span>
              </label>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <label style={labelStyle}>Gewenste automatiseringen ({isLoaded ? items.length : 0})</label>
          {!isLoaded || items.length === 0 ? (
            <p style={{ fontSize: 13.5, color: "oklch(52% 0.012 265)" }}>
              Nog niets toegevoegd —{" "}
              <Link href="/diensten#automatiseringen" style={{ textDecoration: "underline" }}>
                bekijk de opties
              </Link>
              .
            </p>
          ) : (
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
              {items.map((item) => (
                <li
                  key={item.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "8px 14px",
                    background: "oklch(93% 0.03 148 / 0.4)",
                    borderRadius: 6,
                    fontSize: 14,
                  }}
                >
                  <span>{item.name}</span>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    aria-label={`${item.name} verwijderen`}
                    style={{ background: "none", border: "none", cursor: "pointer", color: "oklch(52% 0.012 265)", fontSize: 16, padding: 0 }}
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label htmlFor="naam" style={labelStyle}>
            Naam <span style={{ color: "oklch(42% 0.08 148)" }}>*</span>
          </label>
          <input id="naam" name="naam" type="text" required value={naam} onChange={(e) => setNaam(e.target.value)} style={inputStyle} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label htmlFor="bedrijfsnaam" style={labelStyle}>
            Praktijknaam
          </label>
          <input id="bedrijfsnaam" name="bedrijfsnaam" type="text" value={bedrijfsnaam} onChange={(e) => setBedrijfsnaam(e.target.value)} style={inputStyle} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label htmlFor="email" style={labelStyle}>
            E-mail <span style={{ color: "oklch(42% 0.08 148)" }}>*</span>
          </label>
          <input id="email" name="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label htmlFor="opmerkingen" style={labelStyle}>
            Opmerkingen
          </label>
          <textarea
            id="opmerkingen"
            name="opmerkingen"
            rows={3}
            value={opmerkingen}
            onChange={(e) => setOpmerkingen(e.target.value)}
            style={{ ...inputStyle, height: "auto", padding: "10px 12px", resize: "vertical" }}
          />
        </div>
        <label style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13.5, lineHeight: 1.5, color: "oklch(52% 0.012 265)" }}>
          <input
            type="checkbox"
            checked={privacyAccepted}
            onChange={(e) => setPrivacyAccepted(e.target.checked)}
            style={{ marginTop: 3, width: 16, height: 16, flexShrink: 0, accentColor: "oklch(42% 0.08 148)" }}
          />
          <span>
            Ik ga akkoord met het{" "}
            <Link href="/privacy" target="_blank" style={{ textDecoration: "underline", fontWeight: 600 }}>
              privacybeleid
            </Link>
          </span>
        </label>
        <button type="submit" className="btn btn-primary" style={{ justifyContent: "center", marginTop: 8 }} disabled={status === "submitting" || !privacyAccepted || !packageId}>
          {status === "submitting" ? "Versturen…" : "Verstuur offerteaanvraag"}
        </button>
        <p style={{ fontSize: 13, color: "oklch(52% 0.012 265)", textAlign: "center" }}>Ik reageer binnen 24 uur met een voorstel.</p>
      </form>
    </div>
  );
}
