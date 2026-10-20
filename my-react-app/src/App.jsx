import './App.css'

const locations = [
  { name: 'Sankalpa', desc: 'Sankalpa', img: 'https://images.unsplash.com/photo-1741003412854-bd4b264c4af3?w=1200&q=80&auto=format&fit=crop' },
  { name: 'Sankalpa', desc: 'Sankalpa', img: 'https://images.unsplash.com/photo-1733805569204-41768c7d8c0f?w=1200&q=80&auto=format&fit=crop' },
  { name: 'Sankalpa', desc: 'Sankalpa', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Madanapalle.jpg?width=1200' },
  { name: 'Sankalpa', desc: 'Sankalpa', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Punganur_city_view.jpg?width=1200' },
]

const services = [
  { title: 'Sankalpa', icon: '🪔', desc: 'Sankalpa' },
  { title: 'Sankalpa', icon: '💍', desc: 'Sankalpa' },
  { title: 'Sankalpa', icon: '🏠', desc: 'Sankalpa' },
  { title: 'Sankalpa', icon: '🛕', desc: 'Sankalpa' },
  { title: 'Sankalpa', icon: '👶', desc: 'Sankalpa' },
  { title: 'Sankalpa', icon: '🎭', desc: 'Sankalpa' },
]

const gallery = [
  { caption: 'Sankalpa', img: 'https://images.unsplash.com/photo-1788952138972-77f923c29a4c?w=800&q=80&auto=format&fit=crop' },
  { caption: 'Sankalpa', img: 'https://images.unsplash.com/photo-1742281257687-092746ad6021?w=800&q=80&auto=format&fit=crop' },
  { caption: 'Sankalpa', img: 'https://images.unsplash.com/photo-1699764681875-dd04ce36b1c3?w=800&q=80&auto=format&fit=crop' },
  { caption: 'Sankalpa', img: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&q=80&auto=format&fit=crop' },
]

function App() {
  return (
    <div className="site">
      <header className="navbar">
        <div className="brand">
          <span className="brand-mark">🪔</span>
          <span className="brand-name">Sankalpa</span>
        </div>
        <nav className="nav-links">
          <a href="#about">Sankalpa</a>
          <a href="#services">Sankalpa</a>
          <a href="#locations">Sankalpa</a>
          <a href="#gallery">Sankalpa</a>
          <a href="#contact">Sankalpa</a>
        </nav>
      </header>

      <section className="hero" style={{ backgroundImage: "linear-gradient(rgba(74, 10, 18, 0.72), rgba(107, 15, 26, 0.72)), url('https://images.unsplash.com/photo-1733805569204-41768c7d8c0f?w=1920&q=80&auto=format&fit=crop')" }}>
        <div className="hero-overlay">
          <p className="hero-kicker">Sankalpa</p>
          <h1>Sankalpa</h1>
          <p className="hero-sub">Sankalpa</p>
          <a href="#contact" className="cta-btn">Sankalpa</a>
        </div>
      </section>

      <section id="about" className="about">
        <div className="about-img">
          <img src="https://images.unsplash.com/photo-1783255571174-d329a3895407?w=900&q=80&auto=format&fit=crop" alt="Sankalpa" loading="lazy" />
        </div>
        <div className="about-text">
          <h2>Sankalpa</h2>
          <p>Sankalpa</p>
          <ul className="about-points">
            <li>Sankalpa</li>
            <li>Sankalpa</li>
            <li>Sankalpa</li>
          </ul>
        </div>
      </section>

      <section id="services" className="services">
        <h2>Sankalpa</h2>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <span className="service-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="locations" className="locations">
        <h2>Sankalpa</h2>
        <p className="section-sub">Sankalpa</p>
        <div className="locations-grid">
          {locations.map((loc, i) => (
            <div className="location-card" key={i}>
              <img src={loc.img} alt="Sankalpa" loading="lazy" />
              <div className="location-info">
                <h3>{loc.name}</h3>
                <p>{loc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="gallery">
        <h2>Sankalpa</h2>
        <p className="section-sub">Sankalpa</p>
        <div className="gallery-grid">
          {gallery.map((g, i) => (
            <figure className="gallery-item" key={i}>
              <img src={g.img} alt="Sankalpa" loading="lazy" />
              <figcaption>{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="footer-brand">
          <span className="brand-mark">🪔</span>
          <span className="brand-name">Sankalpa</span>
        </div>
        <p>Sankalpa</p>
        <p>Sankalpa</p>
        <p className="copyright">Sankalpa</p>
      </footer>
    </div>
  )
}

export default App
