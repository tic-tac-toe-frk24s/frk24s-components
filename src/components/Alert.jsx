export default function Alert({ message = "Spelare 1 vann!" }) {
  return (
    <div role="alert" style={{
      padding: "12px",
      border: "1px solid #aaa",
      borderRadius: "8px",
      margin: "8px 0",
      background: "#f8f8f8"
    }}>
      {message}
    </div>
  );
}
