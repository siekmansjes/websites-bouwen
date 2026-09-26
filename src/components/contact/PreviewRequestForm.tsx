"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { inputStyle, labelStyle } from "./formStyles";
import { submitToHubspot } from "@/lib/integrations/hubspot";
import { LEAD_SOURCE_PREFIX } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export function PreviewRequestForm() {
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [bedrijfsnaam, setBedrijfsnaam] = useState("");
  const [omschrijving, setOmschrijving] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      await submitToHubspot({
        naam: `${LEAD_SOURCE_PREFIX} [Gratis voorbeeld] ${naam}`,
        email,
        bedrijfsnaam,
        opmerkingen: omschrijving,
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card" style={{ padding: 32 }}>
        <h2 style={{ fontSize: 22 }}>Aanvraag ontvangen</h2>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: "oklch(52% 0.012 265)", marginTop: 10 }}>
          Bedankt {naam || ""}, ik ga aan de slag. Binnen 48 uur staat er een echte, werkende
          voorbeeldwebsite in je mailbox, gratis en vrijblijvend.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card" style={{ padding: 32, display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label htmlFor="preview-naam" style={labelStyle}>
          Naam <span style={{ color: "oklch(42% 0.08 148)" }}>*</span>
        </label>
        <input id="preview-naam" type="text" required value={naam} onChange={(e) => setNaam(e.target.value)} style={inputStyle} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label htmlFor="preview-bedrijfsnaam" style={labelStyle}>
          Bedrijfsnaam <span style={{ color: "oklch(42% 0.08 148)" }}>*</span>
        </label>
        <input
          id="preview-bedrijfsnaam"
          type="text"
          required
          value={bedrijfsnaam}
          onChange={(e) => setBedrijfsnaam(e.target.value)}
          style={inputStyle}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label htmlFor="preview-email" style={labelStyle}>
          E-mail <span style={{ color: "oklch(42% 0.08 148)" }}>*</span>
        </label>
        <input id="preview-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label htmlFor="preview-omschrijving" style={labelStyle}>
          Wat doet je bedrijf? <span style={{ color: "oklch(42% 0.08 148)" }}>*</span>
        </label>
        <textarea
          id="preview-omschrijving"
          rows={4}
          required
          placeholder="Een paar zinnen is genoeg, wat je doet en voor wie."
          value={omschrijving}
          onChange={(e) => setOmschrijving(e.target.value)}
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
      <button type="submit" className="btn btn-primary" style={{ justifyContent: "center" }} disabled={status === "submitting" || !privacyAccepted}>
        {status === "submitting" ? "Versturen…" : "Vraag je gratis voorbeeld aan"}
      </button>
      {status === "error" && (
        <p style={{ fontSize: 13, color: "oklch(42% 0.08 148)", textAlign: "center" }}>
          Versturen is niet gelukt. Probeer het nogmaals, of mail rechtstreeks.
        </p>
      )}
      <p style={{ fontSize: 13, color: "oklch(52% 0.012 265)", textAlign: "center" }}>
        Kost niets, geen verplichtingen. Binnen 48 uur in je mailbox.
      </p>
    </form>
  );
}
