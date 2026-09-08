import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ExampleBadge } from "@/components/ExampleBadge";
import { caseStudies } from "@/lib/cases";

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies.find((item) => item.slug === slug);
  if (!caseStudy) return {};
  return {
    title: caseStudy.clientName,
    description: caseStudy.result,
  };
}

export default async function CaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((item) => item.slug === slug);
  if (!caseStudy) notFound();

  return (
    <>
      <SiteHeader />
      <main>
        <section style={{ padding: "56px 0 72px" }}>
          <div className="wrap" style={{ maxWidth: 760, margin: "0 auto" }}>
            <Link href="/#cases" className="nav-link" style={{ fontSize: 13.5 }}>
              ← Alle cases
            </Link>
            <div style={{ marginTop: 20, marginBottom: 12 }}>
              <ExampleBadge label="Voorbeeldcase" />
            </div>
            <h1 style={{ fontSize: 38 }}>{caseStudy.clientName}</h1>
            <p style={{ fontSize: 14, color: "oklch(52% 0.012 265)", marginTop: 8 }}>{caseStudy.sector}</p>

            <div
              style={{
                aspectRatio: "16 / 9",
                background: "oklch(93% 0.03 148)",
                borderRadius: 8,
                margin: "32px 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="oklch(34% 0.075 148)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="14" rx="2" />
                <path d="M3 9h18M8 4v14" />
              </svg>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <div>
                <h2 style={{ fontSize: 20, marginBottom: 8 }}>Het probleem</h2>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "oklch(21% 0.015 265)" }}>{caseStudy.problem}</p>
              </div>
              <div>
                <h2 style={{ fontSize: 20, marginBottom: 8 }}>De oplossing</h2>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "oklch(21% 0.015 265)" }}>{caseStudy.solution}</p>
              </div>
              <div>
                <h2 style={{ fontSize: 20, marginBottom: 8 }}>Het resultaat</h2>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "oklch(21% 0.015 265)" }}>{caseStudy.result}</p>
              </div>
            </div>

            <div style={{ marginTop: 44, padding: "28px 26px", background: "oklch(93% 0.03 148 / 0.35)", borderRadius: 8, textAlign: "center" }}>
              <p style={{ fontSize: 15, marginBottom: 16 }}>Ook benieuwd wat een nieuwe website voor jouw praktijk kan doen?</p>
              <Link href="/contact" className="btn btn-primary">
                Plan een gratis kennismaking
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
