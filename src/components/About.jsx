import './About.css';

export default function About() {
  return (
    <section id="nosotros" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="200" r="180" fill="url(#aboutGradient)" opacity="0.1"/>
                <path d="M200 80c-66.27 0-120 53.73-120 120s53.73 120 120 120 120-53.73 120-120S266.27 80 200 80zm0 216c-53.02 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96z" fill="var(--purple)"/>
                <rect x="180" y="140" width="40" height="20" rx="10" fill="var(--kelly-green)"/>
                <rect x="180" y="190" width="40" height="20" rx="10" fill="var(--kelly-green)"/>
                <rect x="180" y="240" width="40" height="20" rx="10" fill="var(--kelly-green)"/>
                <defs>
                  <linearGradient id="aboutGradient" x1="20" y1="20" x2="380" y2="380">
                    <stop offset="0%" stopColor="var(--kelly-green)"/>
                    <stop offset="100%" stopColor="var(--purple)"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="about-text">
            <h2 className="about-title">Sobre Farmacia Círculo</h2>
            <p className="about-description">
              Somos una farmacia familiar con <strong>más de 20 años de experiencia</strong> en el barrio. 
              Nuestra misión es brindar un servicio de salud integral, combinando la calidez de la 
              atención personalizada con la eficiencia de la tecnología moderna.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">Años de Experiencia</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5000+</div>
                <div className="stat-label">Clientes Satisfechos</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Atención al Cliente</div>
              </div>
            </div>
            <div className="about-features">
              <div className="feature-item">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="var(--kelly-green)"/>
                </svg>
                <span>Farmacéuticos matriculados</span>
              </div>
              <div className="feature-item">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="var(--kelly-green)"/>
                </svg>
                <span>Productos certificados ANMAT</span>
              </div>
              <div className="feature-item">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="var(--kelly-green)"/>
                </svg>
                <span>Todas las obras sociales</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
