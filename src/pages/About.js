import React from 'react';
import './About.css';

/* Replace these paths with real photos when ready: warehouse, cotton yard, ginning, office/team */
const OPERATIONS_IMAGES = [
  { id: 'warehouse', title: 'Warehouse', alt: 'Our warehouse and storage operations', src: 'operations/warehouse.png', fallback: 'operations/placeholder.svg' },
  { id: 'cotton-yard', title: 'Cotton Yard', alt: 'Cotton yard and ginning operations', src: 'operations/cotton-yard.png', fallback: 'operations/placeholder.svg' },
  { id: 'ginning', title: 'Ginning', alt: 'Double Roller ginning operations', src: 'operations/ginning.png', fallback: 'operations/placeholder.svg' },
  { id: 'office-team', title: 'Office & Team', alt: 'Our office and team', src: 'operations/office-team.png', fallback: 'operations/placeholder.svg' },
];

const About = () => {
  return (
    <main className="about">
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="container">
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
                <li>68 Double Roller (DR) ginning machines</li>
                <li>15 Oil Expellers</li>
                <li>Operations spread across approximately 5 acres of land</li>
                <li>Warehouse storage capacity of approx. 70,000 – 80,000 sq. ft.</li>
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
            <div className="story-image">
              <img
                src={`${process.env.PUBLIC_URL}/images/operations/foundation.jpg`}
                alt="Jagdamba CotFiber – cotton ginning and processing"
                className="story-image-photo"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `${process.env.PUBLIC_URL}/images/operations/placeholder.svg`;
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Operations */}
      <section className="operations-section" aria-label="Our operations">
        <div className="container">
          <h2 className="section-title">Our Operations</h2>
          <p className="operations-intro">
            From warehouse and cotton yard to ginning and our office—see where we work.
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
          <h2 className="section-title">Our Approach</h2>
          <div className="approach-grid">
            <div className="approach-card">
              <h3>Quality & Discipline</h3>
              <p>
                We deliver good quality products through disciplined operations and proper handling systems. Our focus on cotton bales, cotton seed cake, cotton seed, and cotton seed crude oil is backed by decades of ground-level experience.
              </p>
            </div>
            <div className="approach-card">
              <h3>Transparent Communication</h3>
              <p>
                We believe in transparent communication and long-term business relationships. We align our capabilities with buyer requirements and keep our commitments clear and realistic.
              </p>
            </div>
            <div className="approach-card">
              <h3>Export-Oriented Supply</h3>
              <p>
                With strong processing capability and infrastructure—68 DR ginning machines, 15 oil expellers, and large warehouse capacity—we are positioned to support export-oriented supply based on buyer requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">✓</div>
              <h3>Operational Strength</h3>
              <p>Decades of practical experience in cotton ginning and processing.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">✓</div>
              <h3>Quality</h3>
              <p>Good quality products through disciplined operations.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">✓</div>
              <h3>Transparency</h3>
              <p>Transparent communication with buyers and partners.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">✓</div>
              <h3>Long-term Relationships</h3>
              <p>Building trust through reliability and consistency.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
