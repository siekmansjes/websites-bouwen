import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactFlow } from "@/components/contact/ContactFlow";

export const metadata: Metadata = {
  title: "Contact",
  description: "Plan een gratis kennismaking of stel direct een offerte samen.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const mode = typeof params.mode === "string" ? params.mode : undefined;
  const pakket = typeof params.pakket === "string" ? params.pakket : undefined;

  return (
    <>
      <SiteHeader />
      <section style={{ padding: "56px 0 96px" }}>
        <div className="wrap">
          <ContactFlow initialMode={mode} initialPackageId={pakket} />
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
