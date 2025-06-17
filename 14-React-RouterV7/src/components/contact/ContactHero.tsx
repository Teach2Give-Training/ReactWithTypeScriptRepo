import { useState } from "react"

export const ContactHero = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      style={{
        background: "linear-gradient(120deg, #fbbf24 0%, #f59e42 100%)",
        color: "#1e293b",
        padding: "60px 0 40px 0",
        textAlign: "center",
        borderRadius: "0 0 24px 24px",
        boxShadow: "0 4px 24px rgba(37,99,235,0.08)",
        marginBottom: "32px"
      }}
    >
      <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: 16 }}>
        Contact <span style={{ color: "#2563eb" }}>MyApp</span>
      </h1>
      <p style={{ fontSize: "1.15rem", color: "#1e293b", maxWidth: 600, margin: "0 auto 32px auto" }}>
        Have questions or feedback? Fill out the form below and we’ll get back to you!
      </p>
      {submitted ? (
        <div style={{ color: "#2563eb", fontWeight: 600, fontSize: "1.2rem" }}>
          Thank you for reaching out! 🚀
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 2px 12px rgba(37,99,235,0.07)",
            padding: 32,
            maxWidth: 400,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #cbd5e1",
              fontSize: "1rem"
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #cbd5e1",
              fontSize: "1rem"
            }}
          />
          <textarea
            placeholder="Your Message"
            required
            rows={4}
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #cbd5e1",
              fontSize: "1rem"
            }}
          />
          <button
            type="submit"
            style={{
              background: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              padding: "12px",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "background 0.2s"
            }}
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  )
}