import Link from "next/link";

export function Hero() {
  return (
    <section style={{ padding: "72px 0 88px" }}>
      <div className="wrap hero-row" style={{ display: "flex", alignItems: "center", gap: 56 }}>
        <div style={{ flex: 1.15, display: "flex", flexDirection: "column", gap: 22 }}>
          <span className="eyebrow">Websites voor coaches</span>
          <h1 style={{ fontSize: 52, color: "oklch(21% 0.015 265)" }}>
            Een website die mensen helpt de stap naar jou te zetten
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "oklch(52% 0.012 265)", maxWidth: 480 }}>
            Voor loopbaan- en persoonlijke coaches: een heldere website met een duidelijk proces, eerlijke
            pakketten en automatisering die je scheelt in administratie — zodat jij weer tijd hebt om te
            coachen.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
            <Link href="/contact" className="btn btn-primary">
              Plan een gratis kennismaking
            </Link>
            <Link href="#cases" className="btn btn-secondary">
              Bekijk voorbeeldcases
            </Link>
          </div>
        </div>
        <div
          className="hero-visual"
          style={{
            flex: 1,
            aspectRatio: "4 / 3",
            borderRadius: 8,
            background: "oklch(93% 0.03 148)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="88" height="88" viewBox="0 0 24 24" fill="none" stroke="oklch(34% 0.075 148)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
          </svg>
        </div>
      </div>
    </section>
  );
}
