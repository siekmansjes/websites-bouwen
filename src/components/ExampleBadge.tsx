export function ExampleBadge({
  label = "Voorbeeld",
  tone = "example",
}: {
  label?: string;
  tone?: "example" | "own";
}) {
  return (
    <span
      className="example-badge"
      style={
        tone === "own"
          ? { background: "oklch(42% 0.08 148)", color: "oklch(98% 0.004 90)" }
          : undefined
      }
    >
      {label}
    </span>
  );
}
