import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import {
  GiSofa,
  GiBed,
  GiTable,
  GiPillow,
  GiWoodenChair,
  GiLockedDoor,
  GiMirrorMirror,
  GiRolledCloth,
} from 'react-icons/gi'
import { FaArrowRight } from 'react-icons/fa'
import './Products.css'

interface Product {
  icon: React.ReactNode
  name: string
  description: string
  highlights: string[]
}

const sleepwellProducts: Product[] = [
  {
    icon: <GiBed size={40} />,
    name: 'Sleepwell Mattresses',
    description: 'India\'s #1 mattress brand. From orthopaedic to memory foam, find your perfect sleep companion.',
    highlights: ['Ortho Pro Spring', 'Memory Foam', 'Cocoon Range', 'Latex Plus', 'Duet Air'],
  },
  {
    icon: <GiPillow size={40} />,
    name: 'Sleepwell Pillows',
    description: 'Premium pillows designed for optimal neck support and comfort through the night.',
    highlights: ['Memory Foam Pillows', 'Fibre Pillows', 'Latex Pillows', 'Cervical Pillows'],
  },
  {
    icon: <GiRolledCloth size={40} />,
    name: 'Sleepwell Protectors',
    description: 'Mattress and pillow protectors to keep your sleep essentials fresh and long-lasting.',
    highlights: ['Mattress Protectors', 'Pillow Protectors', 'Waterproof Range', 'Anti-Dust Mite'],
  },
]

const kurlonProducts: Product[] = [
  {
    icon: <GiBed size={40} />,
    name: 'Kurlon Mattresses',
    description: 'Trusted heritage brand offering a wide range of comfortable and durable mattresses.',
    highlights: ['Spine Support', 'Coir Mattresses', 'Spring Mattresses', 'Foam Range'],
  },
]

const furnitureProducts: Product[] = [
  {
    icon: <GiSofa size={40} />,
    name: 'Sofas & Sofa Sets',
    description: 'Elegant sofa sets and sectionals to be the centrepiece of your living room.',
    highlights: ['3-Seater Sofas', 'L-Shaped Sofas', 'Recliners', 'Sofa cum Bed', 'Fabric & Leatherette'],
  },
  {
    icon: <GiWoodenChair size={40} />,
    name: 'Chairs',
    description: 'From accent chairs to office chairs — comfort meets style.',
    highlights: ['Accent Chairs', 'Office Chairs', 'Rocking Chairs', 'Dining Chairs'],
  },
  {
    icon: <GiTable size={40} />,
    name: 'Dining Table Sets',
    description: 'Beautiful dining sets for memorable family meals together.',
    highlights: ['4-Seater Sets', '6-Seater Sets', 'Extendable Tables', 'Wooden & Glass'],
  },
  {
    icon: <GiLockedDoor size={40} />,
    name: 'Wardrobes',
    description: 'Spacious and stylish wardrobes for organized and clutter-free living.',
    highlights: ['Sliding Door', 'Hinged Wardrobes', 'Walk-in Closets', 'Wooden Finish'],
  },
  {
    icon: <GiTable size={40} />,
    name: 'Tables',
    description: 'Centre tables, side tables, and study tables for every room.',
    highlights: ['Centre Tables', 'Side Tables', 'Study Tables', 'Console Tables'],
  },
  {
    icon: <GiMirrorMirror size={40} />,
    name: 'Dressing Tables',
    description: 'Elegant dressing tables with mirrors and storage.',
    highlights: ['With Mirror', 'Storage Drawers', 'Wall Mounted', 'Classic Designs'],
  },
]

const beddingProducts: Product[] = [
  {
    icon: <GiRolledCloth size={40} />,
    name: 'Bedsheets & Bedding',
    description: 'High-quality bedsheets, comforters, and bedding accessories for a cozy bedroom.',
    highlights: ['Cotton Bedsheets', 'King & Queen Size', 'Comforters', 'Blankets', 'Cushion Covers'],
  },
  {
    icon: <GiPillow size={40} />,
    name: 'Cushions & Pillows',
    description: 'Decorative cushions and comfortable pillows for your home.',
    highlights: ['Decorative Cushions', 'Floor Cushions', 'Bolster Pillows', 'Cushion Fillers'],
  },
]

function ProductSection({ title, subtitle, products, accent }: { title: string; subtitle: string; products: Product[]; accent?: boolean }) {
  return (
    <div className={`products-section ${accent ? 'products-section--accent' : ''}`}>
      <div className="container">
        <div className="section__header">
          <span className="section__label">{subtitle}</span>
          <h2 className="section__title">{title}</h2>
        </div>
        <div className="products__grid">
          {products.map((p) => (
            <div className="product-card" key={p.name}>
              <div className="product-card__icon">{p.icon}</div>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <ul className="product-card__tags">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  return (
    <>
      <Helmet>
        <title>Products | New Sameer Furniture — Sleepwell, Kurlon, Sofas, Wardrobes & More</title>
        <meta name="description" content="Browse our wide range of Sleepwell mattresses, Kurlon mattresses, sofas, chairs, dining tables, wardrobes, bedsheets, and home furniture at New Sameer Furniture, Dehradun." />
      </Helmet>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Products</h1>
          <p>Premium furniture and sleep solutions for every room in your home</p>
        </div>
      </section>

      <ProductSection
        title="Sleepwell Collection"
        subtitle="Authorized Franchise"
        products={sleepwellProducts}
        accent
      />
      <ProductSection
        title="Kurlon Collection"
        subtitle="Authorized Dealer"
        products={kurlonProducts}
      />
      <ProductSection
        title="Furniture Collection"
        subtitle="Premium Quality"
        products={furnitureProducts}
        accent
      />
      <ProductSection
        title="Bedding & Accessories"
        subtitle="Home Comforts"
        products={beddingProducts}
      />

      {/* CTA */}
      <section className="section cta-section">
        <div className="container cta__inner">
          <h2>Looking for Something Specific?</h2>
          <p>Visit our showroom or reach out — we'll help you find exactly what you need.</p>
          <div className="cta__actions">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Contact Us <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
