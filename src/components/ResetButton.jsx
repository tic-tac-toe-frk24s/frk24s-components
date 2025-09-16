export default function ResetButton({ label = "Återställ", onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 16px",
        borderRadius: "10px",
        border: "1px solid #333",
        background: "#eaeefe",
        cursor: "pointer"
      }}
    >
      {label}
    </button>
  );
}
