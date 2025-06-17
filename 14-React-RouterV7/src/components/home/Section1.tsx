export const Section1 = () => {
  return (
    <section
      style={{
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 2px 12px rgba(37,99,235,0.07)",
        padding: "32px 24px",
        margin: "32px auto",
        maxWidth: 700,
        textAlign: "center"
      }}
    >
      <h2 style={{ color: "#2563eb", marginBottom: 12, fontSize: "1.4rem" }}>
        📚 Learn React Router
      </h2>
      <p style={{ color: "#64748b", fontSize: "1.05rem", marginBottom: 18 }}>
        Dive into the world of modern routing for React applications. React Router v7 makes navigation seamless and intuitive, allowing you to build multi-page experiences with ease.
      </p>
      <ul style={{ textAlign: "left", display: "inline-block", margin: 0, paddingLeft: 20 }}>
        <li>Declarative routing for React apps</li>
        <li>Nested routes and layouts</li>
        <li>Dynamic route parameters</li>
        <li>Easy navigation and redirects</li>
      </ul>
    </section>
  )
}