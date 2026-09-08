import { benefits } from "@/lib/benefits";

export function BenefitsGrid() {
  return (
    <div className="grid-4">
      {benefits.map((benefit) => (
        <div key={benefit.title} className="card" style={{ padding: "24px 22px", display: "flex", flexDirection: "column", gap: 8 }}>
          <h3 style={{ fontSize: 16.5 }}>{benefit.title}</h3>
          <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "oklch(52% 0.012 265)" }}>{benefit.description}</p>
        </div>
      ))}
    </div>
  );
}
