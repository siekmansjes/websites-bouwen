"use client";

import { useState, type FormEvent } from "react";
import { inputStyle, labelStyle } from "./formStyles";

type Status = "idle" | "submitting" | "success";

const themeOptions = [
  { id: "salie", name: "Salie", swatch: "oklch(58% 0.07 132)" },
  { id: "zakelijk-blauw", name: "Zakelijk blauw", swatch: "oklch(40% 0.11 255)" },
  { id: "warm-terracotta", name: "Warm terracotta", swatch: "oklch(52% 0.13 40)" },
  { id: "neutraal-antraciet", name: "Neutraal antraciet", swatch: "oklch(35% 0.01 260)" },
];

const navOptions = [
  { id: "losse-paginas", label: "Losse pagina's", hint: "beter bij meer content, sterker voor SEO" },
  { id: "een-pagina", label: "Eén pagina met ankerlinks", hint: "compact, past bij een klein aanbod" },
];

const prijsOptions = [
  { id: "ja", label: "Ja, met duidelijke pakketten" },
  { id: "nee", label: "Nee, liever in gesprek bepalen" },
  { id: "weet-niet", label: "Weet ik nog niet" },
];

const koppelingOptions = [
  { id: "agenda", label: "Agenda-koppeling (Cal.com)" },
  { id: "crm", label: "CRM-koppeling (HubSpot)" },
  { id: "facturatie", label: "Facturatie-koppeling (Moneybird)" },
  { id: "email", label: "Automatische e-mails (Resend)" },
];

const radioRowStyle = { display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, cursor: "pointer" } as const;

export function ProjectIntake({ onBack }: { onBack: () => void }) {
  const [praktijknaam, setPraktijknaam] = useState("");
  const [branche, setBranche] = useState("");
  const [doelgroep, setDoelgroep] = useState("");
  const [navigatie, setNavigatie] = useState("");
  const [theme, setTheme] = useState("");
  const [prijzenTonen, setPrijzenTonen] = useState("");
  const [koppelingen, setKoppelingen] = useState<string[]>([]);
  const [eigenFotos, setEigenFotos] = useState("");
  const [domeinnaam, setDomeinnaam] = useState("");
  const [teksten, setTeksten] = useState("");
  const [overig, setOverig] = useState("");
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  function toggleKoppeling(id: string) {
    setKoppelingen((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    // TODO: hier moet de intake naartoe (bv. een HubSpot-koppeling zoals bij
    // Parkmade). Voor nu simuleert dit alleen het versturen, zodat de flow
    // al volledig te testen is.
    await new Promise((resolve) => setTimeout(resolve, 400));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div style={{ maxWidth: 560 }}>
        <h1 style={{ fontSize: 30 }}>Intake ontvangen</h1>
        <div className="card" style={{ padding: 32, marginTop: 24 }}>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: "oklch(52% 0.012 265)" }}>
            Bedankt {naam || ""}, ik heb uw antwoorden ontvangen en neem binnen 24 uur contact op met een concreet
            voorstel.
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

      <h1 style={{ fontSize: 30, marginTop: 18 }}>Projectintake</h1>
      <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "oklch(52% 0.012 265)", marginTop: 10 }}>
        Hoe meer u hier invult, hoe gerichter mijn eerste voorstel — alles is later nog aan te passen.
      </p>

      <form onSubmit={handleSubmit} className="card" style={{ padding: 32, marginTop: 24, display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label htmlFor="praktijknaam" style={labelStyle}>Praktijk-/bedrijfsnaam</label>
          <input id="praktijknaam" type="text" value={praktijknaam} onChange={(e) => setPraktijknaam(e.target.value)} style={inputStyle} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label htmlFor="branche" style={labelStyle}>Wat doet u, in een paar woorden?</label>
          <input id="branche" type="text" placeholder="bv. loopbaancoaching voor young professionals" value={branche} onChange={(e) => setBranche(e.target.value)} style={inputStyle} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label htmlFor="doelgroep" style={labelStyle}>Voor wie is de site bedoeld?</label>
          <input id="doelgroep" type="text" value={doelgroep} onChange={(e) => setDoelgroep(e.target.value)} style={inputStyle} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <label style={labelStyle}>Navigatie</label>
          {navOptions.map((option) => (
            <label key={option.id} style={radioRowStyle}>
              <input type="radio" name="navigatie" value={option.id} checked={navigatie === option.id} onChange={() => setNavigatie(option.id)} style={{ marginTop: 3, accentColor: "oklch(42% 0.08 148)" }} />
              <span>
                {option.label} <span style={{ color: "oklch(52% 0.012 265)" }}>— {option.hint}</span>
              </span>
            </label>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <label style={labelStyle}>Kleurthema</label>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {themeOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setTheme(option.id)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                  padding: "10px 12px",
                  borderRadius: 8,
                  border: theme === option.id ? "2px solid oklch(42% 0.08 148)" : "1px solid oklch(90% 0.006 90)",
                  background: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                <span style={{ width: 28, height: 28, borderRadius: "50%", background: option.swatch }} />
                <span style={{ fontSize: 12, color: "oklch(21% 0.015 265)" }}>{option.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <label style={labelStyle}>Prijzen zichtbaar tonen op de site?</label>
          {prijsOptions.map((option) => (
            <label key={option.id} style={radioRowStyle}>
              <input type="radio" name="prijzenTonen" value={option.id} checked={prijzenTonen === option.id} onChange={() => setPrijzenTonen(option.id)} style={{ marginTop: 2, accentColor: "oklch(42% 0.08 148)" }} />
              <span>{option.label}</span>
            </label>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <label style={labelStyle}>Gewenste koppelingen</label>
          {koppelingOptions.map((option) => (
            <label key={option.id} style={radioRowStyle}>
              <input type="checkbox" checked={koppelingen.includes(option.id)} onChange={() => toggleKoppeling(option.id)} style={{ marginTop: 2, accentColor: "oklch(42% 0.08 148)" }} />
              <span>{option.label}</span>
            </label>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <label style={labelStyle}>Heeft u eigen, professionele foto&apos;s?</label>
          <label style={radioRowStyle}>
            <input type="radio" name="eigenFotos" value="ja" checked={eigenFotos === "ja"} onChange={() => setEigenFotos("ja")} style={{ marginTop: 2, accentColor: "oklch(42% 0.08 148)" }} />
            <span>Ja, die kan ik aanleveren</span>
          </label>
          <label style={radioRowStyle}>
            <input type="radio" name="eigenFotos" value="nee" checked={eigenFotos === "nee"} onChange={() => setEigenFotos("nee")} style={{ marginTop: 2, accentColor: "oklch(42% 0.08 148)" }} />
            <span>Nee, daar heb ik hulp/advies bij nodig</span>
          </label>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label htmlFor="domeinnaam" style={labelStyle}>Domeinnaam</label>
          <input id="domeinnaam" type="text" placeholder="laat leeg als nog niet geregeld" value={domeinnaam} onChange={(e) => setDomeinnaam(e.target.value)} style={inputStyle} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <label style={labelStyle}>Wie levert de teksten?</label>
          <label style={radioRowStyle}>
            <input type="radio" name="teksten" value="zelf" checked={teksten === "zelf"} onChange={() => setTeksten("zelf")} style={{ marginTop: 2, accentColor: "oklch(42% 0.08 148)" }} />
            <span>Ik lever zelf teksten aan</span>
          </label>
          <label style={radioRowStyle}>
            <input type="radio" name="teksten" value="hulp" checked={teksten === "hulp"} onChange={() => setTeksten("hulp")} style={{ marginTop: 2, accentColor: "oklch(42% 0.08 148)" }} />
            <span>Ik wil hulp bij het schrijven</span>
          </label>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label htmlFor="overig" style={labelStyle}>Overige wensen</label>
          <textarea id="overig" rows={3} value={overig} onChange={(e) => setOverig(e.target.value)} style={{ ...inputStyle, height: "auto", padding: "10px 12px", resize: "vertical" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label htmlFor="intake-naam" style={labelStyle}>
            Naam <span style={{ color: "oklch(42% 0.08 148)" }}>*</span>
          </label>
          <input id="intake-naam" type="text" required value={naam} onChange={(e) => setNaam(e.target.value)} style={inputStyle} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label htmlFor="intake-email" style={labelStyle}>
            E-mail <span style={{ color: "oklch(42% 0.08 148)" }}>*</span>
          </label>
          <input id="intake-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
        </div>

        <label style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13.5, lineHeight: 1.5, color: "oklch(52% 0.012 265)" }}>
          <input
            type="checkbox"
            checked={privacyAccepted}
            onChange={(e) => setPrivacyAccepted(e.target.checked)}
            style={{ marginTop: 3, width: 16, height: 16, flexShrink: 0, accentColor: "oklch(42% 0.08 148)" }}
          />
          <span>Ik ga akkoord met het privacybeleid</span>
        </label>

        <button type="submit" className="btn btn-primary" style={{ justifyContent: "center" }} disabled={status === "submitting" || !privacyAccepted}>
          {status === "submitting" ? "Versturen…" : "Verstuur intake"}
        </button>
        <p style={{ fontSize: 13, color: "oklch(52% 0.012 265)", textAlign: "center" }}>Ik reageer binnen 24 uur met een concreet voorstel.</p>
      </form>
    </div>
  );
}
