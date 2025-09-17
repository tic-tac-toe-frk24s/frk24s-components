export default function ResetButton({ label = "Återställ", onClick }) {
  return <button onClick={onClick}>{label}</button>;
}
