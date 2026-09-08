const points = [
  {
    title: "Bezoekers weten niet wat ze kunnen verwachten",
    description:
      "Een mooie foto en wat mooie woorden zijn niet genoeg. Zonder een helder proces en duidelijke pakketten twijfelen bezoekers of ze wel contact moeten opnemen.",
  },
  {
    title: "Aanvragen kosten te veel tijd",
    description:
      "Losse e-mails over beschikbaarheid, prijzen en wat een traject inhoudt — tijd die je liever aan coachen besteedt.",
  },
  {
    title: "De site groeit niet mee",
    description:
      "Wat begon als een simpele pagina houdt geen gelijke tred met je praktijk, en past niet meer bij hoe je nu werkt.",
  },
];

export function ProblemSection() {
  return (
    <section style={{ padding: "64px 0" }}>
      <div className="wrap">
        <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 48px" }}>
          <span className="eyebrow">Wat houdt je nu tegen</span>
          <h2 style={{ fontSize: 34, marginTop: 10 }}>Herkenbaar voor veel coaches</h2>
        </div>
        <div className="grid-3">
          {points.map((point) => (
            <div key={point.title} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <h3 style={{ fontSize: 19 }}>{point.title}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "oklch(52% 0.012 265)" }}>{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
