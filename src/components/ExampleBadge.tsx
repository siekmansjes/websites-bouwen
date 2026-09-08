export function ExampleBadge({ label = "Voorbeeld" }: { label?: string }) {
  return <span className="example-badge">{label}</span>;
}
