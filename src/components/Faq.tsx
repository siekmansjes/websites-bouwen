import { faqItems } from "@/lib/faq";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export function Faq() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 720, margin: "0 auto" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {faqItems.map((item) => (
        <details
          key={item.question}
          className="card"
          style={{ padding: "16px 22px" }}
        >
          <summary style={{ fontSize: 15.5, fontWeight: 600, cursor: "pointer" }}>{item.question}</summary>
          <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "oklch(52% 0.012 265)", marginTop: 10 }}>
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
