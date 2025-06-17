export const AboutHero = () => {
  return (
    <section
      style={{
        background: "linear-gradient(120deg,rgba(211, 232, 220, 0.07) 0%,rgba(231, 239, 177, 0.13) 100%)",
        color: "#fbbf24",
        padding: "60px 0 40px 0",
        textAlign: "center",
        // borderRadius: "0 0 24px 24px",
        boxShadow: "0 4px 24px rgba(37,99,235,0.08)",
        marginBottom: "32px"
      }}
    >
      <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: 16 }}>
        About <span style={{ color: "#fbbf24" }}>MyApp</span>
      </h1>
      <p style={{ fontSize: "1.15rem", color: "#fbbf24", maxWidth: 600, margin: "0 auto" }}>
        MyApp is a modern React demo project showcasing the power of React Router v7.<br />
        Learn how to build scalable, multi-page applications with beautiful UI and seamless navigation.
      </p>
    </section>
  )
}