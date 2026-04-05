import { Helmet } from 'react-helmet-async'
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPhone,
} from 'react-icons/fa'
import './Contact.css'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | New Sameer Furniture — Visit Our Store in Dehradun</title>
        <meta name="description" content="Contact New Sameer Furniture on Raipur Road, Dehradun. Reach us via WhatsApp, email, or visit our showroom. Authorized Sleepwell & Kurlon dealer." />
      </Helmet>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you — visit, call, or message us anytime</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section contact-section">
        <div className="container contact__inner">
          <div className="contact__info">
            <span className="section__label">Get in Touch</span>
            <h2 className="section__title" style={{ textAlign: 'left' }}>
              We're Here to Help
            </h2>
            <p className="contact__desc">
              Whether you have a question about a product, need help choosing furniture for your home, or want to know about the latest Sleepwell collection — reach out to us.
            </p>

            <div className="contact__cards">
              <a
                href="https://wa.me/?text=Hi%2C%20I%20am%20interested%20in%20your%20furniture%20products%20at%20New%20Sameer%20Furniture"
                className="contact-card contact-card--whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={24} />
                <div>
                  <h3>WhatsApp</h3>
                  <p>Chat with us directly</p>
                </div>
              </a>

              <a
                href="mailto:"
                className="contact-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope size={24} />
                <div>
                  <h3>Email</h3>
                  <p>Send us an email</p>
                </div>
              </a>

              <div className="contact-card">
                <FaMapMarkerAlt size={24} />
                <div>
                  <h3>Visit Our Store</h3>
                  <p>Raipur Road, Dehradun, Uttarakhand</p>
                </div>
              </div>

              <div className="contact-card">
                <FaClock size={24} />
                <div>
                  <h3>Working Hours</h3>
                  <p>Mon – Sat: 10:00 AM – 8:00 PM<br />Sunday: 10:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="contact__map">
            <div className="map-placeholder">
              <FaMapMarkerAlt size={48} />
              <h3>Find Us on Google Maps</h3>
              <p>Raipur Road, Dehradun, Uttarakhand</p>
              <p className="map-placeholder__note">
                Google Maps embed will be added here.<br />
                Replace this with your Google Maps iframe.
              </p>
              {/*
                To add your Google Maps:
                1. Go to Google Maps and search your store
                2. Click "Share" → "Embed a map"
                3. Copy the iframe code
                4. Replace this placeholder div with the iframe

                Example:
                <iframe
                  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '16px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="New Sameer Furniture Location"
                />
              */}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section contact-actions-section">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">Quick Actions</h2>
          </div>
          <div className="contact-actions__grid">
            <a
              href="https://wa.me/?text=Hi%2C%20I%20want%20to%20know%20about%20Sleepwell%20mattresses"
              className="action-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={28} />
              <h3>Ask about Sleepwell</h3>
              <p>Get info on Sleepwell mattresses and pillows</p>
            </a>
            <a
              href="https://wa.me/?text=Hi%2C%20I%20am%20looking%20for%20furniture%20for%20my%20home"
              className="action-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPhone size={28} />
              <h3>Furniture Enquiry</h3>
              <p>Sofas, tables, wardrobes and more</p>
            </a>
            <a
              href="https://wa.me/?text=Hi%2C%20I%20would%20like%20to%20visit%20your%20store.%20What%20are%20your%20timings%3F"
              className="action-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaClock size={28} />
              <h3>Store Visit</h3>
              <p>Plan your visit to our showroom</p>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
