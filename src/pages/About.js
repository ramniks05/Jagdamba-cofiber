import React from 'react';
import './About.css';

/* Replace these paths with real photos when ready: warehouse, cotton yard, office/team */
const OPERATIONS_IMAGES = [
  { id: 'warehouse', title: 'Warehouse', alt: 'Our warehouse and storage operations', src: 'operations/warehouse.png', fallback: 'operations/placeholder.svg' },
  { id: 'cotton-yard', title: 'Cotton Yard', alt: 'Cotton yard operations', src: 'operations/cotton-yard.png', fallback: 'operations/placeholder.svg' },
  { id: 'office-team', title: 'Office & Team', alt: 'Our office and team', src: 'operations/office-team.png', fallback: 'operations/placeholder.svg' },
];

const APPROACH_ITEMS = [
  {
    id: 'quality',
    icon: 'QC',
    title: 'Quality & Discipline',
    description:
      'We deliver good quality products through disciplined operations and proper handling systems. Our focus on cotton bales, cotton seed cake, cotton seed, and cotton seed crude oil is backed by decades of ground-level experience.',
  },
  {
    id: 'communication',
    icon: 'TC',
    title: 'Transparent Communication',
    description:
      'We believe in transparent communication and long-term business relationships. We align our capabilities with buyer requirements and keep our commitments clear and realistic.',
  },
  {
    id: 'export',
    icon: 'EX',
    title: 'Export-Oriented Supply',
    description:
      'With strong processing capability and infrastructure—68 DR ginning machines, 15 oil expellers, and large warehouse capacity—we are positioned to support export-oriented supply based on buyer requirements.',
  },
];

const CORE_VALUES = [
  { id: 'ops', icon: 'OS', title: 'Operational Strength', description: 'Decades of practical experience in cotton ginning and processing.' },
  { id: 'quality', icon: 'QL', title: 'Quality', description: 'Good quality products through disciplined operations.' },
  { id: 'transparency', icon: 'TR', title: 'Transparency', description: 'Transparent communication with buyers and partners.' },
  { id: 'relationships', icon: 'LR', title: 'Long-term Relationships', description: 'Building trust through reliability and consistency.' },
];

const About = () => {
  return (
    <main className="about">
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="container">
          <span className="hero-badge">About Us</span>
          <h1 className="page-title">About Jagdamba CotFiber LLP</h1>
          <p className="page-subtitle">
            A cotton ginning and processing company built on decades of practical industry experience.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="company-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Foundation</h2>
              <p>
                Jagdamba CotFiber LLP is a cotton ginning and processing company built on decades of practical industry experience. The LLP was formed by merging two established proprietorship firms — <strong>Shree Ganesh Enterprises</strong> and <strong>Shree Jagdamba Agro Processors</strong> — creating a stronger and more structured operational setup.
              </p>
              <h2>Our Infrastructure</h2>
              <p>Our combined infrastructure includes:</p>
              <ul className="about-infra-list">
                <li><span className="infra-icon" aria-hidden="true">DR</span>68 Double Roller (DR) ginning machines</li>
                <li><span className="infra-icon" aria-hidden="true">OE</span>15 Oil Expellers</li>
                <li><span className="infra-icon" aria-hidden="true">LD</span>Operations spread across approximately 5 acres of land</li>
                <li><span className="infra-icon" aria-hidden="true">WH</span>Warehouse storage capacity of approx. 70,000 - 80,000 sq. ft.</li>
              </ul>
              <h2>Our Factory Units</h2>
              <ul className="about-infra-list">
                <li>
                  <span className="infra-icon" aria-hidden="true">U1</span>
                  <span>
                    <strong>Jagdamba LLP Unit 01:</strong> Survey No - 63/1/2, NH 347A, Goiwada, Talegaon Road, Arvi, District - Wardha, 442201
                  </span>
                </li>
                <li>
                  <span className="infra-icon" aria-hidden="true">U2</span>
                  <span>
                    <strong>Jagdamba LLP Unit 02:</strong> SH 241, Deurwada Road, Arvi, District - Wardha, 442201
                  </span>
                </li>
              </ul>
              <h2>Core Operations</h2>
              <p>
                Our core operations include processing and supply of <strong>cotton bales</strong> (including conventional, Organic, Better Cotton, and Regen Agri lint) along with <strong>cotton seed cake</strong>, <strong>cotton seed</strong>, and <strong>cotton seed crude oil</strong>, supported by disciplined operations and proper handling systems.
              </p>
              <p>
                With strong processing capability and infrastructure, we are also positioned to support export-oriented supply based on buyer requirements.
              </p>
              <p>
                At Jagdamba CotFiber LLP, our focus remains simple — delivering good quality products through operational strength, transparent communication, and long-term business relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Operations */}
      <section className="operations-section" aria-label="Our operations">
        <div className="container">
          <span className="section-badge">Operations</span>
          <h2 className="section-title">Our Operations</h2>
          <p className="operations-intro">
            From warehouse and cotton yard to our office - see where we work.
          </p>
          <div className="operations-grid">
            {OPERATIONS_IMAGES.map((item) => (
              <figure key={item.id} className="operations-photo">
                <div className="operations-photo-frame">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${item.src}`}
                    alt={item.alt}
                    className="operations-photo-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `${process.env.PUBLIC_URL}/images/${item.fallback}`;
                    }}
                  />
                </div>
                <figcaption className="operations-photo-caption">{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="our-approach">
        <div className="container">
          <span className="section-badge">Approach</span>
          <h2 className="section-title">Our Approach</h2>
          <div className="approach-grid">
            {APPROACH_ITEMS.map((item) => (
              <div key={item.id} className="approach-card">
                <div className="card-head">
                  <span className="card-icon" aria-hidden="true">{item.icon}</span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values">
        <div className="container">
          <span className="section-badge">Values</span>
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            {CORE_VALUES.map((value) => (
              <div key={value.id} className="value-item">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
