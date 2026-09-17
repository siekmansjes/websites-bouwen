const options = [
  {
    mode: "contact" as const,
    title: "Stuur een bericht",
    text: "Korte vraag of eerste kennismaking — ik denk mee en kom terug met een voorstel.",
    icon: <path d="M4 5h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM3.5 6.5l8.5 6 8.5-6" />,
  },
  {
    mode: "offerte" as const,
    title: "Stel een offerte samen",
    text: "Kies een pakket en eventuele automatiseringen zelf, handig als u al weet wat u zoekt.",
    icon: (
      <>
        <path d="M9 3h6l1 4H8z" />
        <path d="M6 8h12l-1 12H7z" />
        <path d="M10 12h4M10 15h4" />
      </>
    ),
  },
];

export function ModeChoice({ onSelect }: { onSelect: (mode: "contact" | "offerte") => void }) {
  return (
    <div className="grid-2" style={{ gap: 20 }}>
      {options.map((option) => (
        <button
          key={option.mode}
          type="button"
          onClick={() => onSelect(option.mode)}
          className="card hover-card"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 14,
            padding: "28px 24px",
            textAlign: "left",
            cursor: "pointer",
            font: "inherit",
            color: "inherit",
          }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="oklch(42% 0.08 148)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            {option.icon}
          </svg>
          <h3 style={{ fontSize: 18 }}>{option.title}</h3>
          <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "oklch(52% 0.012 265)" }}>{option.text}</p>
          <span style={{ marginTop: "auto", paddingTop: 8, fontSize: 13.5, fontWeight: 700, color: "oklch(42% 0.08 148)" }}>
            Kies deze optie →
          </span>
        </button>
      ))}
    </div>
  );
}
