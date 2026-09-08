"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { inputStyle, labelStyle } from "./formStyles";

type Status = "idle" | "submitting" | "success";

export function ContactForm({ onBack }: { onBack: () => void }) {
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [bericht, setBericht] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    // TODO: hier moet een echte inzending naartoe (bv. een HubSpot-koppeling
    // zoals bij Parkmade, maar met een eigen account/pipeline voor dit
    // bedrijf — nog te bepalen). Voor nu simuleert dit alleen het versturen,
    // zodat de flow al volledig te testen is.
    await new Promise((resolve) => setTimeout(resolve, 400));
    setStatus("success");
  }

  return (
    <div style={{ maxWidth: 560 }}>
      <button
        type="button"
        onClick={onBack}
        style={{ background: "none", border: "none", padding: 0, cursor: "pointer", fontSize: 14, fontWeight: 600, color: "oklch(52% 0.012 265)" }}
      >
        ← Andere manier van contact
      </button>

      {status === "success" ? (
        <>
          <h1 style={{ fontSize: 30, marginTop: 18 }}>Bericht verstuurd</h1>
          <div className="card" style={{ padding: 32, marginTop: 24 }}>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "oklch(52% 0.012 265)" }}>
              Bedankt, uw bericht is ontvangen. Ik reageer binnen 24 uur.
            </p>
          </div>
        </>
      ) : (
        <>
          <h1 style={{ fontSize: 30, marginTop: 18 }}>Stuur een bericht</h1>
          <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "oklch(52% 0.012 265)", marginTop: 10 }}>
            Vertel kort waar u naar op zoek bent, dan denk ik mee over een passende aanpak.
          </p>
        </>
      )}

      {status !== "success" && (
        <form onSubmit={handleSubmit} className="card" style={{ padding: 32, marginTop: 24, display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label htmlFor="naam" style={labelStyle}>
              Naam <span style={{ color: "oklch(42% 0.08 148)" }}>*</span>
            </label>
            <input id="naam" name="naam" type="text" required value={naam} onChange={(e) => setNaam(e.target.value)} style={inputStyle} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label htmlFor="email" style={labelStyle}>
              E-mail <span style={{ color: "oklch(42% 0.08 148)" }}>*</span>
            </label>
            <input id="email" name="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label htmlFor="bericht" style={labelStyle}>
              Bericht <span style={{ color: "oklch(42% 0.08 148)" }}>*</span>
            </label>
            <textarea
              id="bericht"
              name="bericht"
              rows={4}
              required
              value={bericht}
              onChange={(e) => setBericht(e.target.value)}
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
          <button type="submit" className="btn btn-primary" style={{ justifyContent: "center", marginTop: 8 }} disabled={status === "submitting" || !privacyAccepted}>
            {status === "submitting" ? "Versturen…" : "Verstuur bericht"}
          </button>
          <p style={{ fontSize: 13, color: "oklch(52% 0.012 265)", textAlign: "center" }}>Ik reageer binnen 24 uur.</p>
        </form>
      )}
    </div>
  );
}
