import { Link } from 'react-router-dom'
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <h3 className="footer__title">
            <span className="footer__icon">🪑</span> New Sameer Furniture
          </h3>
          <p className="footer__desc">
            Dehradun's trusted destination for premium furniture, Sleepwell mattresses, and complete home furnishing solutions since years.
          </p>
        </div>

        <div className="footer__links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer__links">
          <h4>Products</h4>
          <Link to="/products">Sleepwell Mattresses</Link>
          <Link to="/products">Kurlon Mattresses</Link>
          <Link to="/products">Sofas & Chairs</Link>
          <Link to="/products">Wardrobes & Tables</Link>
        </div>

        <div className="footer__contact">
          <h4>Get in Touch</h4>
          <a href="https://wa.me/?text=Hi%2C%20I%20am%20interested%20in%20your%20furniture%20products" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp /> WhatsApp Us
          </a>
          <a href="mailto:" target="_blank" rel="noopener noreferrer">
            <FaEnvelope /> Email Us
          </a>
          <p className="footer__address">
            <FaMapMarkerAlt /> Raipur Road, Dehradun, Uttarakhand
          </p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>&copy; {currentYear} New Sameer Furniture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
