import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProcessTimeline } from "@/components/ProcessTimeline";

export const metadata: Metadata = {
  title: "Proces",
  description: "Hoe een traject van kennismaking tot livegang eruitziet.",
};

export default function ProcesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section style={{ padding: "56px 0 24px" }}>
          <div className="wrap">
            <span className="eyebrow">Proces</span>
            <h1 style={{ fontSize: 40, marginTop: 10 }}>Zo verloopt een traject</h1>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "oklch(52% 0.012 265)", marginTop: 14, maxWidth: 560 }}>
              Van eerste gesprek tot een live website — helder en zonder verrassingen.
            </p>
          </div>
        </section>
        <section style={{ padding: "24px 0 72px" }}>
          <div className="wrap" style={{ maxWidth: 640 }}>
            <ProcessTimeline />
          </div>
        </section>
        <section className="ink-band" style={{ padding: "56px 0", textAlign: "center" }}>
          <div className="wrap">
            <h2 style={{ fontSize: 28, marginBottom: 16 }}>Benieuwd hoe dit voor jouw praktijk werkt?</h2>
            <Link href="/contact" className="btn btn-primary">
              Plan een gratis kennismaking
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
