import Image from "next/image";
import Link from "next/link";

type HeroCta = { label: string; href: string };

const DEFAULT_PRIMARY_CTA: HeroCta = { label: "Stuur een bericht", href: "/contact?mode=contact" };
const DEFAULT_SECONDARY_CTA: HeroCta = { label: "Bekijk voorbeeldcases", href: "#cases" };

export function Hero({
  eyebrow,
  title,
  description,
  primaryCta = DEFAULT_PRIMARY_CTA,
  secondaryCta = DEFAULT_SECONDARY_CTA,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
}) {
  return (
    <section style={{ padding: "72px 0 88px" }}>
      <div className="wrap hero-row" style={{ display: "flex", alignItems: "center", gap: 56 }}>
        <div style={{ flex: 1.15, display: "flex", flexDirection: "column", gap: 22 }}>
          <span className="eyebrow">{eyebrow}</span>
          <h1 style={{ fontSize: 52, color: "oklch(21% 0.015 265)" }}>{title}</h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "oklch(52% 0.012 265)", maxWidth: 480 }}>
            {description}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
            <Link href={primaryCta.href} className="btn btn-primary">
              {primaryCta.label}
            </Link>
            <Link href={secondaryCta.href} className="btn btn-secondary">
              {secondaryCta.label}
            </Link>
          </div>
        </div>
        <div
          className="hero-visual"
          style={{
            position: "relative",
            flex: 1,
            aspectRatio: "4 / 3",
            borderRadius: 8,
            background: "oklch(93% 0.03 148)",
            overflow: "hidden",
          }}
        >
          <Image
            src="/hero.webp"
            alt="Een website die ik gebouwd heb, getoond op een scherm"
            fill
            sizes="(max-width: 1000px) 100vw, 520px"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
