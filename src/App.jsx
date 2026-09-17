import { useState } from "react";
import "./App.css";

function App() {
  // Contact Popup States
  const [showContact, setShowContact] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  // Contact Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Collections
  const collections = [
    {
      title: "Bridal Dreams",
      category: "Bridal Collection",
      image:
        "https://images.unsplash.com/photo-1594552072238-b8a33785b5cd?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Royal Elegance",
      category: "Couture",
      image:
        "https://images.unsplash.com/photo-1550614000-4b9519e0927a?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Modern Muse",
      category: "Evening Wear",
      image:
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80",
    },
  ];

  // Services
  const services = [
    {
      number: "01",
      title: "Custom Design",
      text: "Unique outfits designed especially for your personality, style and occasion.",
    },
    {
      number: "02",
      title: "Bridal Couture",
      text: "Elegant bridal outfits created with detailed craftsmanship and timeless design.",
    },
    {
      number: "03",
      title: "Fashion Styling",
      text: "Personal styling guidance to create a complete and confident fashion look.",
    },
  ];

  return (
    <div className="portfolio">

      {/* =========================
          CONTACT POPUP
      ========================= */}

      {showContact && (
        <div className="contact-popup">

          <div className="contact-popup-box">

            {!submitted ? (
              <>
                {/* Close Button */}
                <button
                  className="close-popup"
                  onClick={() => setShowContact(false)}
                >
                  ×
                </button>

                <p className="popup-label">
                  WELCOME
                </p>

                <h2>
                  Let's <i>Connect.</i>
                </h2>

                <p className="popup-description">
                  We'd love to hear from you. Please enter your
                  contact details and we'll get back to you soon.
                </p>

                {/* Contact Form */}
                <form onSubmit={handleSubmit}>

                  {/* Email */}
                  <div className="input-group">
                    <label htmlFor="email">
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="input-group">
                    <label htmlFor="phone">
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      pattern="[0-9]{10}"
                      title="Please enter a 10 digit phone number"
                      required
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="popup-submit"
                  >
                    Submit →
                  </button>

                </form>
              </>
            ) : (

              /* =========================
                 THANK YOU MESSAGE
              ========================= */

              <div className="thank-you">

                <div className="thank-icon">
                  ✓
                </div>

                <p className="popup-label">
                  MESSAGE RECEIVED
                </p>

                <h2>
                  Thank <i>You!</i>
                </h2>

                <p>
                  Thank you for contacting us.
                  <br />
                  We will get back to you soon.
                </p>

                <button
                  className="popup-submit"
                  onClick={() => setShowContact(false)}
                >
                  Continue to Portfolio
                </button>

              </div>
            )}

          </div>
        </div>
      )}

      {/* =========================
          NAVBAR
      ========================= */}

      <header className="navbar">

        <div className="logo">
          LUMIÈRE
        </div>

        <nav>
          <a href="#home">
            Home
          </a>

          <a href="#about">
            About
          </a>

          <a href="#collections">
            Collections
          </a>

          <a href="#services">
            Services
          </a>

          <a href="#contact">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="nav-button"
        >
          Let's Talk
        </a>

      </header>

      {/* =========================
          HERO SECTION
      ========================= */}

      <section
        className="hero"
        id="home"
      >

        <div className="hero-content">

          <p className="small-heading">
            FASHION DESIGNER & CREATIVE ARTIST
          </p>

          <h1>
            Fashion is the
            <span>
              art of expression.
            </span>
          </h1>

          <p className="hero-description">
            Creating timeless fashion pieces that blend
            elegance, individuality and modern craftsmanship.
          </p>

          <div className="hero-buttons">

            <a
              href="#collections"
              className="primary-button"
            >
              Explore Collection
            </a>

            <a
              href="#about"
              className="text-button"
            >
              Discover My Story →
            </a>

          </div>

        </div>

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85"
            alt="Fashion Designer Collection"
          />

          <div className="image-label">

            <span>
              01
            </span>

            <p>
              NEW COLLECTION
            </p>

          </div>

        </div>

      </section>

      {/* =========================
          INTRO SECTION
      ========================= */}

      <section className="intro">

        <p className="section-label">
          MY PHILOSOPHY
        </p>

        <h2>
          I believe every outfit should tell
          <i> a story.</i>
        </h2>

        <p className="intro-text">
          From the first sketch to the final stitch,
          I create fashion that celebrates individuality.
          My work combines traditional craftsmanship
          with contemporary aesthetics.
        </p>

      </section>

      {/* =========================
          ABOUT SECTION
      ========================= */}

      <section
        className="about"
        id="about"
      >

        <div className="about-image">

          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80"
            alt="Fashion Studio"
          />

        </div>

        <div className="about-content">

          <p className="section-label">
            ABOUT THE DESIGNER
          </p>

          <h2>
            Designing with
            <br />
            <i>passion & purpose.</i>
          </h2>

          <p>
            Hello, I'm <strong>Alexandra</strong>, a fashion
            designer passionate about creating distinctive
            and meaningful fashion experiences.
          </p>

          <p>
            My design journey began with a simple fascination
            for fabrics, colours and silhouettes. Today,
            I transform those inspirations into collections
            that combine sophistication and modern elegance.
          </p>

          <div className="stats">

            <div>
              <strong>
                08+
              </strong>

              <span>
                Years Experience
              </span>
            </div>

            <div>
              <strong>
                120+
              </strong>

              <span>
                Designs Created
              </span>
            </div>

            <div>
              <strong>
                85+
              </strong>

              <span>
                Happy Clients
              </span>
            </div>

          </div>

        </div>

      </section>

      {/* =========================
          COLLECTIONS SECTION
      ========================= */}

      <section
        className="collections"
        id="collections"
      >

        <div className="section-header">

          <div>

            <p className="section-label">
              SELECTED WORK
            </p>

            <h2>
              Signature <i>Collections</i>
            </h2>

          </div>

          <p>
            A selection of my latest designs,
            <br />
            inspired by art and individuality.
          </p>

        </div>

        <div className="collection-grid">

          {collections.map((collection, index) => (

            <div
              className="collection-card"
              key={index}
            >

              <div className="collection-image">

                <img
                  src={collection.image}
                  alt={collection.title}
                />

                <div className="collection-overlay">

                  <span>
                    View Collection →
                  </span>

                </div>

              </div>

              <div className="collection-info">

                <span>
                  {collection.category}
                </span>

                <h3>
                  {collection.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* =========================
          SERVICES SECTION
      ========================= */}

      <section
        className="services"
        id="services"
      >

        <div className="services-heading">

          <p className="section-label">
            WHAT I DO
          </p>

          <h2>
            From concept
            <br />
            to <i>creation.</i>
          </h2>

        </div>

        <div className="services-list">

          {services.map((service, index) => (

            <div
              className="service"
              key={index}
            >

              <span className="service-number">
                {service.number}
              </span>

              <div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.text}
                </p>

              </div>

              <span className="service-arrow">
                ↗
              </span>

            </div>

          ))}

        </div>

      </section>

      {/* =========================
          LOOKBOOK SECTION
      ========================= */}

      <section className="lookbook">

        <div className="lookbook-content">

          <p className="section-label">
            THE LOOKBOOK
          </p>

          <h2>
            Elegance is
            <br />
            <i>always in style.</i>
          </h2>

          <p>
            Discover a visual journey through silhouettes,
            textures and details from my latest work.
          </p>

          <a
            href="#collections"
            className="primary-button"
          >
            View Lookbook
          </a>

        </div>

        <div className="lookbook-image">

          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85"
            alt="Fashion Lookbook"
          />

        </div>

      </section>

      {/* =========================
          CONTACT SECTION
      ========================= */}

      <section
        className="contact"
        id="contact"
      >

        <div>

          <p className="section-label">
            GET IN TOUCH
          </p>

          <h2>
            Let's create
            <br />
            something <i>beautiful.</i>
          </h2>

          <p className="contact-text">
            Have a project, collaboration or custom design
            in mind? I'd love to hear from you.
          </p>

        </div>

        <div className="contact-details">

          <a href="mailto:hello@lumierefashion.com">
            hello@lumierefashion.com
          </a>

          <a href="tel:+919876543210">
            +91 98765 43210
          </a>

          <p>
            Dehradun, India
          </p>

          <div className="social-links">

            <a href="#">
              Instagram
            </a>

            <a href="#">
              Pinterest
            </a>

            <a href="#">
              LinkedIn
            </a>

          </div>

        </div>

      </section>

      {/* =========================
          FOOTER
      ========================= */}

      <footer>

        <div className="footer-logo">
          LUMIÈRE
        </div>

        <p>
          © 2026 Lumière Fashion Studio.
          All rights reserved.
        </p>

        <a href="#home">
          Back to top ↑
        </a>

      </footer>

    </div>
  );
}

export default App;
