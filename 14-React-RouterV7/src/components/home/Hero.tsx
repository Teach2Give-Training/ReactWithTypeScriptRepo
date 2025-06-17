import "./Hero.css"

export const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to <span className="brand">MyApp</span></h1>
          <p>
            Discover a modern React Router demo project.<br />
            Navigate, learn, and build beautiful apps with ease!
          </p>
          <a href="/about" className="hero-btn">Learn More</a>
        </div>
      </section>

      <section className="features-section">
        <div className="feature">
          <h2>🚀 Fast Navigation</h2>
          <p>
            Experience instant page transitions and smooth routing with React Router v7.
          </p>
        </div>
        <div className="feature">
          <h2>🎨 Modern UI</h2>
          <p>
            Enjoy a clean, responsive, and visually appealing interface designed for learning and productivity.
          </p>
        </div>
      </section>
    </>
  )
}