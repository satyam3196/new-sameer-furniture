import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import './About.css'

const values = [
  {
    title: 'Quality First',
    desc: 'We source only from trusted manufacturers and brands, ensuring every piece meets our high standards.',
  },
  {
    title: 'Customer Focused',
    desc: 'Our team takes the time to understand your needs and guide you to the perfect furniture for your space.',
  },
  {
    title: 'Honest Pricing',
    desc: 'Transparent pricing with no hidden costs. We believe in fair value for premium quality.',
  },
  {
    title: 'After-Sale Support',
    desc: 'Our relationship doesn\'t end at the sale. We stand behind our products with reliable support.',
  },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | New Sameer Furniture — Trusted Furniture Store in Dehradun</title>
        <meta name="description" content="Learn about New Sameer Furniture — Dehradun's trusted furniture store and authorized Sleepwell & Kurlon franchise on Raipur Road. Quality furniture and sleep solutions." />
      </Helmet>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Your trusted furniture partner on Raipur Road, Dehradun</p>
        </div>
      </section>

      {/* Story */}
      <section className="section about-story">
        <div className="container about-story__inner">
          <div className="about-story__content">
            <span className="section__label">Our Story</span>
            <h2 className="section__title" style={{ textAlign: 'left' }}>
              A Legacy of Comfort & Trust
            </h2>
            <p>
              <strong>New Sameer Furniture</strong> has been a trusted name in Dehradun's furniture market, serving families on Raipur Road and beyond. What started as a vision to bring quality home furnishing solutions to the people of Dehradun has grown into a full-fledged furniture destination.
            </p>
            <p>
              As an <strong>authorized Sleepwell franchise</strong> and <strong>Kurlon dealer</strong>, we bring you India's finest mattress brands alongside our curated collection of sofas, dining sets, wardrobes, beds, and home accessories.
            </p>
            <p>
              We believe that every home deserves beautiful, comfortable, and durable furniture — and that's exactly what we deliver, at honest prices with genuine service.
            </p>
          </div>
          <div className="about-story__highlights">
            <div className="highlight-card">
              <div className="highlight-card__number">🪑</div>
              <h3>Complete Home Furnishing</h3>
              <p>From mattresses to wardrobes, sofas to bedsheets — everything under one roof.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-card__number">🏆</div>
              <h3>Authorized Sleepwell Franchise</h3>
              <p>Genuine Sleepwell products with official brand warranty and support.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-card__number">📍</div>
              <h3>Raipur Road, Dehradun</h3>
              <p>Conveniently located showroom, easy to visit and explore.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section about-values">
        <div className="container">
          <div className="section__header">
            <span className="section__label">Our Values</span>
            <h2 className="section__title">What We Stand For</h2>
          </div>
          <div className="values__grid">
            {values.map((v) => (
              <div className="value-card" key={v.title}>
                <FaCheckCircle className="value-card__icon" />
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="section about-brands">
        <div className="container">
          <div className="section__header">
            <span className="section__label">Our Partners</span>
            <h2 className="section__title">Brands We Carry</h2>
            <p className="section__desc">
              We are proud to be authorized dealers and franchise partners of India's leading home comfort brands.
            </p>
          </div>
          <div className="brands__grid">
            <div className="brand-card brand-card--featured">
              <h3>Sleepwell</h3>
              <span className="brand-card__type">Franchise Partner</span>
              <p>India's #1 mattress brand with 50+ years of sleep innovation. Complete range of mattresses, pillows, and accessories available.</p>
            </div>
            <div className="brand-card">
              <h3>Kurlon</h3>
              <span className="brand-card__type">Authorized Dealer</span>
              <p>Heritage mattress brand known for quality coir and spring mattresses. Trusted comfort for Indian homes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container cta__inner">
          <h2>Come Visit Our Showroom</h2>
          <p>Experience our furniture in person at Raipur Road, Dehradun.</p>
          <div className="cta__actions">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Get Directions <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
