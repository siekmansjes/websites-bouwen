import Link from "next/link";

const milestones = [
  { step: "1", title: "Kennismaking", text: "Een kort gesprek over je praktijk en wat je nodig hebt." },
  { step: "2", title: "Bouw", text: "Ontwerp en bouw, inclusief de gekozen automatiseringen." },
  { step: "3", title: "Livegang", text: "De site gaat live, met blijvende ondersteuning erna." },
];

export function ProcessPreview() {
  return (
    <div>
      <div className="grid-3">
        {milestones.map((item) => (
          <div key={item.step} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={{ fontFamily: "var(--font-fraunces), serif", fontSize: 26, fontWeight: 700, color: "oklch(93% 0.03 148)" }}>
              {item.step}
            </span>
            <h3 style={{ fontSize: 18 }}>{item.title}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "oklch(85% 0.02 150)" }}>{item.text}</p>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: 36 }}>
        <Link href="/proces" className="btn btn-secondary" style={{ borderColor: "oklch(98% 0.004 90)", color: "oklch(98% 0.004 90)" }}>
          Bekijk het volledige proces
        </Link>
      </div>
    </div>
  );
}
