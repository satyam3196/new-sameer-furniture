import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  FaTruck,
  FaShieldAlt,
  FaHandshake,
  FaStar,
  FaArrowRight,
} from 'react-icons/fa'
import {
  GiSofa,
  GiBed,
  GiTable,
  GiPillow,
  GiWoodenChair,
  GiLockedDoor,
} from 'react-icons/gi'
import './Home.css'

const categories = [
  { icon: <GiBed size={36} />, name: 'Mattresses', desc: 'Sleepwell & Kurlon premium mattresses for restful sleep' },
  { icon: <GiSofa size={36} />, name: 'Sofas', desc: 'Elegant sofas and sofa sets for your living room' },
  { icon: <GiWoodenChair size={36} />, name: 'Chairs', desc: 'Comfortable chairs for home and office' },
  { icon: <GiTable size={36} />, name: 'Dining Sets', desc: 'Beautiful dining table sets for family meals' },
  { icon: <GiLockedDoor size={36} />, name: 'Wardrobes', desc: 'Spacious wardrobes for organized living' },
  { icon: <GiPillow size={36} />, name: 'Bedding', desc: 'Pillows, cushions, bedsheets & more' },
]

const features = [
  { icon: <FaShieldAlt size={28} />, title: 'Trusted Brands', desc: 'Authorized Sleepwell & Kurlon franchise dealer' },
  { icon: <FaHandshake size={28} />, title: 'Expert Guidance', desc: 'Personalized help to find the perfect fit for your home' },
  { icon: <FaTruck size={28} />, title: 'Hassle-Free Delivery', desc: 'Timely delivery across Dehradun and nearby areas' },
  { icon: <FaStar size={28} />, title: 'Quality Assured', desc: 'Only premium quality furniture and furnishings' },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>New Sameer Furniture | Premium Furniture & Sleepwell Mattress Store in Dehradun</title>
        <meta name="description" content="New Sameer Furniture - Dehradun's trusted furniture store on Raipur Road. Authorized Sleepwell & Kurlon dealer. Shop sofas, mattresses, wardrobes, dining sets & more." />
      </Helmet>

      {/* Hero */}
      <section className="hero">
        <div className="hero__overlay" />
        <div className="container hero__content">
          <span className="hero__badge">Authorized Sleepwell & Kurlon Dealer</span>
          <h1 className="hero__title">
            Furnish Your Home with <span className="text-accent">Elegance & Comfort</span>
          </h1>
          <p className="hero__subtitle">
            Discover premium furniture, Sleepwell mattresses, and complete home furnishing solutions at New Sameer Furniture — Raipur Road, Dehradun.
          </p>
          <div className="hero__actions">
            <Link to="/products" className="btn btn--primary btn--lg">
              Explore Products <FaArrowRight />
            </Link>
            <Link to="/contact" className="btn btn--outline btn--lg">
              Visit Our Store
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="trust-bar">
        <div className="container trust-bar__inner">
          <div className="trust-bar__item">
            <strong>Sleepwell</strong>
            <span>Franchise Partner</span>
          </div>
          <div className="trust-bar__divider" />
          <div className="trust-bar__item">
            <strong>Kurlon</strong>
            <span>Authorized Dealer</span>
          </div>
          <div className="trust-bar__divider" />
          <div className="trust-bar__item">
            <strong>Raipur Road</strong>
            <span>Dehradun, Uttarakhand</span>
          </div>
          <div className="trust-bar__divider" />
          <div className="trust-bar__item">
            <strong>Years of</strong>
            <span>Trusted Service</span>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section categories">
        <div className="container">
          <div className="section__header">
            <span className="section__label">What We Offer</span>
            <h2 className="section__title">Our Product Range</h2>
            <p className="section__desc">
              From premium Sleepwell mattresses to elegant furniture — we have everything to make your house a home.
            </p>
          </div>
          <div className="categories__grid">
            {categories.map((cat) => (
              <Link to="/products" className="category-card" key={cat.name}>
                <div className="category-card__icon">{cat.icon}</div>
                <h3>{cat.name}</h3>
                <p>{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sleepwell Spotlight */}
      <section className="section sleepwell-section">
        <div className="container sleepwell__inner">
          <div className="sleepwell__content">
            <span className="section__label">Featured Brand</span>
            <h2 className="section__title">Sleepwell Mattresses</h2>
            <p>
              As an authorized <strong>Sleepwell franchise</strong>, we bring you India's most trusted mattress brand. 
              From orthopaedic to memory foam, find the perfect mattress for a blissful night's sleep.
            </p>
            <ul className="sleepwell__features">
              <li>✓ Ortho Pro Spring Collection</li>
              <li>✓ Memory Foam Mattresses</li>
              <li>✓ Latex & Cocoon Range</li>
              <li>✓ Pillows & Protectors</li>
              <li>✓ Genuine Brand Warranty</li>
            </ul>
            <Link to="/products" className="btn btn--primary">
              View Sleepwell Range <FaArrowRight />
            </Link>
          </div>
          <div className="sleepwell__visual">
            <div className="sleepwell__card">
              <div className="sleepwell__logo-text">Sleepwell</div>
              <p className="sleepwell__promise">"A Promise of Good Sleep"</p>
              <div className="sleepwell__stats">
                <div><strong>50+</strong><span>Years Legacy</span></div>
                <div><strong>#1</strong><span>Mattress Brand</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section why-us">
        <div className="container">
          <div className="section__header">
            <span className="section__label">Why Choose Us</span>
            <h2 className="section__title">The New Sameer Furniture Difference</h2>
          </div>
          <div className="features__grid">
            {features.map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="feature-card__icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container cta__inner">
          <h2>Ready to Transform Your Home?</h2>
          <p>Visit our showroom on Raipur Road, Dehradun or get in touch with us today.</p>
          <div className="cta__actions">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Contact Us <FaArrowRight />
            </Link>
            <a
              href="https://wa.me/?text=Hi%2C%20I%20am%20interested%20in%20your%20furniture%20products"
              className="btn btn--whatsapp btn--lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
