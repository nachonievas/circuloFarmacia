import './About.css';
import TrueFocus from './TrueFocus';
import DomeGallery from './DomeGallery';

export default function About() {
  return (
    <section id="nosotros" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="gallery-wrapper">
              <DomeGallery 
                fit={0.8}
                minRadius={500}
                maxRadius={850}
                imageBorderRadius="15px"
                openedImageBorderRadius="20px"
                overlayBlurColor="rgba(255, 255, 255, 0.95)"
                grayscale={false}
                dragSensitivity={25}
                enlargeTransitionMs={350}
              />
            </div>
          </div>
                  <div className="about-text">
            <TrueFocus
              revealText="Sobre Nosotros"
              sentence="Sobre Farmacia El Círculo"
              manualControl={false}
              revealSize={14}
              revealDuration={1.2}
              revealStagger={0.03}
              revealTransition="ease-in-out"
            />
            <p className="about-description">
              Somos una farmacia familiar con <strong>10 años de experiencia</strong> en el barrio. 
              Nuestra misión es brindar un servicio de salud integral, combinando la calidez de la 
              atención personalizada con la eficiencia de la tecnología moderna.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">10+</div>
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
