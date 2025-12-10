import './Footer.css';
import maps1 from '../assets/images/maps/maps1.png';
import maps2 from '../assets/images/maps/maps2.png';
import maps3 from '../assets/images/maps/maps3.png';
import maps4 from '../assets/images/maps/maps4.png';
import sucu1 from '../assets/images/sucursales/sucu1.webp';
import sucu2 from '../assets/images/sucursales/sucu2.webp';
import sucu3 from '../assets/images/sucursales/sucu3.jpg';
import sucu4 from '../assets/images/sucursales/sucu4.jpg';
import GradientText from './GradientText';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    const phoneNumber = '5493517371920';
    const message = encodeURIComponent('Hola, me gustaría obtener más información.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <footer id="contacto" className="footer">
      <div className="container">
        {/* Sección de Sucursales con Mapas */}
        <div className="footer-locations">
          <h3 className="footer-locations-title">
            <GradientText
              colors={["#cbe3ac", "#71c119", "#cbe3ac", "#71c119", "#cbe3ac"]}
              animationSpeed={3}
              showBorder={false}
            >
              Nuestras Sucursales
            </GradientText>
          </h3>
          <div className="locations-grid">
            {/* Farmacia 1 */}
            <div className="location-card">
              <div className="location-photo">
                <img 
                  src={sucu1}
                  alt="Farmacia Av. Duarte Quirós 3891"
                  className="location-photo-img"
                />
              </div>
              <h4 className="location-name">Av. Duarte Quirós 3891</h4>
              <a 
                href="https://maps.app.goo.gl/DaFoxACARTKgWwDv7"
                target="_blank"
                rel="noopener noreferrer"
                className="location-map-link"
              >
                <div className="location-map-preview">
                  <img 
                    src={maps1}
                    alt="Mapa de Av. Duarte Quirós 3891"
                    className="location-map-img"
                  />
                  <div className="map-overlay">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <p>Cómo llegar</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Farmacia 2 */}
            <div className="location-card">
              <div className="location-photo">
                <img 
                  src={sucu2}
                  alt="Farmacia Isabel la Católica 947"
                  className="location-photo-img"
                />
              </div>
              <h4 className="location-name">Isabel la Católica 947</h4>
              <a 
                href="https://www.google.com/maps?vet=10CAAQoqAOahcKEwj4p7aKn_qQAxUAAAAAHQAAAAAQGA..i&rlz=1C5CHFA_enAR1073AR1073&pvq=Cg0vZy8xMXFudHJ3cHZ6IhkKE2Zhcm1hY2lhIGVsIGNpcmN1bG8QAhgD&lqi=ChNmYXJtYWNpYSBlbCBjaXJjdWxvSN6u95vTtoCACFohEAAQARACGAAYARgCIhNmYXJtYWNpYSBlbCBjaXJjdWxvkgEIcGhhcm1hY3mqAUsKDS9nLzExYzF3azBkODUQATIfEAEiG8F9AZ3I7lssPCtDCdWAvk2gT0qZstP8uUqu5DIXEAIiE2Zhcm1hY2lhIGVsIGNpcmN1bG8&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=ar&sa=X&geocode=KWtaNvpQmTKUMWpKBdvvRf3D&daddr=Isabel+la+Cat%C3%B3lica+947,+X5000+C%C3%B3rdoba"
                target="_blank"
                rel="noopener noreferrer"
                className="location-map-link"
              >
                <div className="location-map-preview">
                  <img 
                    src={maps2}
                    alt="Mapa de Isabel la Católica 947"
                    className="location-map-img"
                  />
                  <div className="map-overlay">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <p>Cómo llegar</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Farmacia 3 */}
            <div className="location-card">
              <div className="location-photo">
                <img 
                  src={sucu3}
                  alt="Farmacia Félix Paz 1196"
                  className="location-photo-img"
                />
              </div>
              <h4 className="location-name">Félix Paz 1196</h4>
              <a 
                href="https://www.google.com/maps?rlz=1C5CHFA_enAR1073AR1073&sca_esv=f517df8b24517ced&lqi=ChNmYXJtYWNpYSBlbCBjaXJjdWxvSNHNrvi1uICACFohEAAQARACGAAYARgCIhNmYXJtYWNpYSBlbCBjaXJjdWxvkgEIcGhhcm1hY3maASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTjRlWEpZYlVwUkVBRaoBSwoNL2cvMTFjMXdrMGQ4NRABMh8QASIbwX0BncjuWyw8K0MJ1YC-TaBPSpmy0_y5Sq7kMhcQAiITZmFybWFjaWEgZWwgY2lyY3Vsb_oBBAgAEBY&vet=12ahUKEwje2MSWn_qQAxVXK7kGHV96F50Q8UF6BAgNEEc..i&lei=7aIbaZ6uEdfW5OUP3_Td6Ak&cs=1&um=1&ie=UTF-8&fb=1&gl=ar&sa=X&geocode=KZvNqoKqmTKUMbG_G-ArrP6J&daddr=F%C3%A9lix+Paz+1196,+X5003+C%C3%B3rdoba"
                target="_blank"
                rel="noopener noreferrer"
                className="location-map-link"
              >
                <div className="location-map-preview">
                  <img 
                    src={maps3}
                    alt="Mapa de Félix Paz 1196"
                    className="location-map-img"
                  />
                  <div className="map-overlay">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <p>Cómo llegar</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Farmacia 4 */}
            <div className="location-card">
              <div className="location-photo">
                <img 
                  src={sucu4}
                  alt="Farmacia Santiago Baravino 4442"
                  className="location-photo-img"
                />
              </div>
              <h4 className="location-name">Santiago Baravino 4442</h4>
              <a 
                href="https://www.google.com/maps?rlz=1C5CHFA_enAR1073AR1073&sca_esv=f517df8b24517ced&lqi=ChNmYXJtYWNpYSBlbCBjaXJjdWxvSPm82KvdsYCACFohEAAQARACGAAYARgCIhNmYXJtYWNpYSBlbCBjaXJjdWxvkgEIcGhhcm1hY3maAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjAwTkdOcVFtbGlhM1JEWWxkc1ZXVnNXbnBTTUUweVRsY3hlRlZHUlJBQqoBSwoNL2cvMTFjMXdrMGQ4NRABMh8QASIbwX0BncjuWyw8K0MJ1YC-TaBPSpmy0_y5Sq7kMhcQAiITZmFybWFjaWEgZWwgY2lyY3Vsb_oBBAgAEDY&vet=12ahUKEwje2MSWn_qQAxVXK7kGHV96F50Q8UF6BAgNEEc..i&lei=7aIbaZ6uEdfW5OUP3_Td6Ak&cs=1&um=1&ie=UTF-8&fb=1&gl=ar&sa=X&geocode=KXetURo9mTKUMYvlXmYf2jIq&daddr=Santiago+Baravino+4442,+X5000+C%C3%B3rdoba"
                target="_blank"
                rel="noopener noreferrer"
                className="location-map-link"
              >
                <div className="location-map-preview">
                  <img 
                    src={maps4}
                    alt="Mapa de Santiago Baravino 4442"
                    className="location-map-img"
                  />
                  <div className="map-overlay">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <p>Cómo llegar</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Farmacia El Círculo</h3>
            <p className="footer-description">
              Tu salud es nuestra prioridad. Más de 10 años cuidando tu bienestar y el de tu familia.
            </p>
            <div className="footer-social">
              <a href="https://www.instagram.com/farmaciaelcirculocba/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Información</h4>
            <ul className="footer-links">
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Horarios</h4>
            <ul className="footer-hours">
              <li>
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style={{ marginRight: '8px' }}>
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                </svg>
                Lunes: 9:00 - 22:00
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style={{ marginRight: '8px' }}>
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                </svg>
                Martes: 9:00 - 22:00
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style={{ marginRight: '8px' }}>
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                </svg>
                Miércoles: 9:00 - 22:00
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style={{ marginRight: '8px' }}>
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                </svg>
                Jueves: 9:00 - 22:00
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style={{ marginRight: '8px' }}>
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                </svg>
                Viernes: 9:00 - 22:00
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style={{ marginRight: '8px' }}>
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                </svg>
                Sábado: 9:00 - 22:00
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style={{ marginRight: '8px' }}>
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                </svg>
                Domingo: 9:00 - 22:00
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contacto</h4>
            <ul className="footer-contact">
              <li>
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                351 737 1920
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); handleWhatsAppClick(); }} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'inherit', textDecoration: 'none' }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Farmacia El Círculo. Todos los derechos reservados.</p>
          <p className="footer-disclaimer">
            Medicamentos autorizados por ANMAT. Consulte a su farmacéutico.
          </p>
        </div>
      </div>
    </footer>
  );
}
