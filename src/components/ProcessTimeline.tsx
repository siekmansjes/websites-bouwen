import { processSteps } from "@/lib/process";

export function ProcessTimeline() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
      {processSteps.map((item) => (
        <div key={item.step} className="process-line process-step" style={{ display: "flex", gap: 24 }}>
          <div
            style={{
              flexShrink: 0,
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "oklch(42% 0.08 148)",
              color: "oklch(98% 0.004 90)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 15,
              zIndex: 1,
            }}
          >
            {item.step}
          </div>
          <div style={{ paddingTop: 6 }}>
            <h3 style={{ fontSize: 19, marginBottom: 6 }}>{item.title}</h3>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "oklch(52% 0.012 265)", maxWidth: 560 }}>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
