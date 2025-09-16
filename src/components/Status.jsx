export default function Status({ currentPlayer = 1 }) {
  const text = `Spelare ${currentPlayer}:s tur`;
  return (
    <div style={{
      padding: "10px 14px",
      border: "1px solid #aaa",
      borderRadius: "8px",
      display: "inline-block",
      background: "#f6f6f6"
    }}>
      {text}
    </div>
  );
}
