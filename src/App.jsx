import './App.css';
import Navbar from './components/Navbar';
import PharmacyBackground from './components/PharmacyBackground';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ServiceBanner from './components/ServiceBanner';
import GlitchText from './components/GlitchText';
import BlurText from './components/BlurText';

// Importar imágenes
import photo1 from './assets/images/fotosWeb/2023-07-26.webp';
import photo2 from './assets/images/fotosWeb/2023-07-26 (1).webp';
import photo3 from './assets/images/fotosWeb/2023-07-26 (2).webp';
import photo4 from './assets/images/fotosWeb/2023-07-26 (3).webp';
import horarios from './assets/images/fotosWeb/horarios.webp';

function App() {
  return (
    <div className="app">
      <Navbar />

      {/* Background profesional de farmacia */}
      <PharmacyBackground />

      {/* Contenido de la página */}
      <div className="content-wrapper">
        <Hero />
        
        {/* Services Section - Banners */}
        <section id="servicios" style={{ 
          padding: '100px 0', 
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ 
                fontSize: '2.8rem', 
                marginBottom: '16px',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 800
              }}>
                <GlitchText
                  speed={1}
                  enableShadows={true}
                  enableOnHover={true}
                  className='custom-class'
                >
                  Nuestros Servicios
                </GlitchText>
              </h2>
              <p style={{ 
                fontSize: '1.2rem', 
                color: 'rgba(255, 255, 255, 0.7)', 
                fontWeight: 300
              }}>
                Todo lo que necesitás para cuidar tu salud y la de tu familia
              </p>
            </div>
            
            {/* Banners de Servicios */}
            <div style={{ marginTop: '40px' }}>
              {/* Banner de Reseñas de Google */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '20px',
                border: '1px solid rgba(113, 193, 25, 0.1)',
                padding: '50px',
                marginBottom: '60px',
                transition: 'all 0.4s ease'
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '50px' 
                }}>
                  <svg 
                    width="60" 
                    height="60" 
                    viewBox="0 0 24 24" 
                    fill="none"
                    style={{
                      filter: 'drop-shadow(0 0 15px rgba(113, 193, 25, 0.6))',
                      animation: 'pulse 2s ease-in-out infinite'
                    }}
                  >
                    <circle cx="12" cy="8" r="4" fill="#71c119" opacity="0.9"/>
                    <path d="M12 14c-5 0-7 3-7 5v2h14v-2c0-2-2-5-7-5z" fill="#71c119" opacity="0.9"/>
                    <circle cx="12" cy="8" r="4" stroke="#71c119" strokeWidth="1" fill="none"/>
                    <path d="M12 14c-5 0-7 3-7 5v2h14v-2c0-2-2-5-7-5z" stroke="#71c119" strokeWidth="1" fill="none"/>
                  </svg>
                </div>

                <div style={{ 
                  position: 'relative',
                  overflow: 'hidden',
                  padding: '0 50px'
                }}>
                  <div style={{ 
                    display: 'flex',
                    gap: '30px',
                    overflowX: 'auto',
                    scrollBehavior: 'smooth',
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#71c119 rgba(255, 255, 255, 0.1)',
                    paddingBottom: '20px'
                  }}
                  className="reviews-container">
                    {/* Reseña 1 */}
                    <div style={{
                      minWidth: '250px',
                      maxWidth: '250px',
                      flex: '0 0 auto',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '12px',
                    padding: '20px',
                    border: '1px solid rgba(113, 193, 25, 0.15)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(113, 193, 25, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}>
                    <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FFC107">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                      ))}
                    </div>
                    <p style={{ fontSize: '0.85rem', lineHeight: '1.5', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '15px', fontStyle: 'italic' }}>
                      "Excelente atención y servicio. Siempre encuentro lo que necesito y el personal es muy amable y profesional."
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #71c119 0%, #5fa015 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: 'white',
                        border: '2px solid rgba(113, 193, 25, 0.3)'
                      }}>
                        M
                      </div>
                      <div>
                        <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 600, marginBottom: '2px' }}>María González</p>
                        <p style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.5)' }}>Cliente verificado</p>
                      </div>
                    </div>
                  </div>

                  {/* Reseña 2 */}
                  <div style={{
                    minWidth: '250px',
                    maxWidth: '250px',
                    flex: '0 0 auto',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '12px',
                    padding: '20px',
                    border: '1px solid rgba(113, 193, 25, 0.15)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(113, 193, 25, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}>
                    <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FFC107">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                      ))}
                    </div>
                    <p style={{ fontSize: '0.85rem', lineHeight: '1.5', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '15px', fontStyle: 'italic' }}>
                      "Muy buena farmacia, con gran variedad de productos y precios accesibles. El servicio de entrega es rápido y confiable."
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #4285F4 0%, #2563eb 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: 'white',
                        border: '2px solid rgba(66, 133, 244, 0.3)'
                      }}>
                        J
                      </div>
                      <div>
                        <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 600, marginBottom: '2px' }}>Jorge Fernández</p>
                        <p style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.5)' }}>Cliente verificado</p>
                      </div>
                    </div>
                  </div>

                  {/* Reseña 3 */}
                  <div style={{
                    minWidth: '250px',
                    maxWidth: '250px',
                    flex: '0 0 auto',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '12px',
                    padding: '20px',
                    border: '1px solid rgba(113, 193, 25, 0.15)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(113, 193, 25, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}>
                    <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FFC107">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                      ))}
                    </div>
                    <p style={{ fontSize: '0.85rem', lineHeight: '1.5', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '15px', fontStyle: 'italic' }}>
                      "Atención farmacéutica de primera. Me ayudaron con todas mis dudas y tienen excelentes horarios de atención."
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #FFC107 0%, #ff9800 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: 'white',
                        border: '2px solid rgba(255, 193, 7, 0.3)'
                      }}>
                        L
                      </div>
                      <div>
                        <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 600, marginBottom: '2px' }}>Laura Martínez</p>
                        <p style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.5)' }}>Cliente verificado</p>
                      </div>
                    </div>
                  </div>

                  {/* Reseña 4 */}
                  <div style={{
                    minWidth: '250px',
                    maxWidth: '250px',
                    flex: '0 0 auto',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '12px',
                    padding: '20px',
                    border: '1px solid rgba(113, 193, 25, 0.15)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(113, 193, 25, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}>
                    <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FFC107">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                      ))}
                    </div>
                    <p style={{ fontSize: '0.85rem', lineHeight: '1.5', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '15px', fontStyle: 'italic' }}>
                      "Servicio impecable, siempre tienen stock y los precios son muy competitivos. Recomiendo totalmente."
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: 'white',
                        border: '2px solid rgba(156, 39, 176, 0.3)'
                      }}>
                        C
                      </div>
                      <div>
                        <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 600, marginBottom: '2px' }}>Carlos Rodríguez</p>
                        <p style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.5)' }}>Cliente verificado</p>
                      </div>
                    </div>
                  </div>

                  {/* Reseña 5 */}
                  <div style={{
                    minWidth: '250px',
                    maxWidth: '250px',
                    flex: '0 0 auto',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '12px',
                    padding: '20px',
                    border: '1px solid rgba(113, 193, 25, 0.15)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(113, 193, 25, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}>
                    <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FFC107">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                      ))}
                    </div>
                    <p style={{ fontSize: '0.85rem', lineHeight: '1.5', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '15px', fontStyle: 'italic' }}>
                      "Personal muy capacitado y siempre dispuesto a ayudar. Es mi farmacia de confianza hace años."
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #E91E63 0%, #C2185B 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: 'white',
                        border: '2px solid rgba(233, 30, 99, 0.3)'
                      }}>
                        A
                      </div>
                      <div>
                        <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 600, marginBottom: '2px' }}>Ana Silva</p>
                        <p style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.5)' }}>Cliente verificado</p>
                      </div>
                    </div>
                  </div>

                  {/* Reseña 6 */}
                  <div style={{
                    minWidth: '250px',
                    maxWidth: '250px',
                    flex: '0 0 auto',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '12px',
                    padding: '20px',
                    border: '1px solid rgba(113, 193, 25, 0.15)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(113, 193, 25, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}>
                    <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FFC107">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                      ))}
                    </div>
                    <p style={{ fontSize: '0.85rem', lineHeight: '1.5', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '15px', fontStyle: 'italic' }}>
                      "Excelente relación calidad-precio y muy buena ubicación. Nunca falta lo que necesito."
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: 'white',
                        border: '2px solid rgba(0, 188, 212, 0.3)'
                      }}>
                        P
                      </div>
                      <div>
                        <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 600, marginBottom: '2px' }}>Pablo Díaz</p>
                        <p style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.5)' }}>Cliente verificado</p>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                  <a 
                    href="https://www.google.com/search?q=farmacia+el+circulo&rlz=1C5CHFA_enAR1073AR1073#lrd=0x943298b6fdd9f11d:0x310527a2ed3bce0f,1"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      background: '#71c119',
                      color: 'white',
                      padding: '15px 35px',
                      borderRadius: '10px',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '1.1rem',
                      transition: 'all 0.3s ease',
                      fontFamily: 'Montserrat, sans-serif'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#5fa015';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(113, 193, 25, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#71c119';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}>
                    Ver todas las reseñas en Google
                  </a>
                </div>
              </div>

              <ServiceBanner
                image={photo4}
                title="Cobertura de Obras Sociales"
                description="Trabajamos con las principales obras sociales y prepagas del país. Facilitamos todos los trámites para que obtengas tus medicamentos de forma ágil y sencilla."
                features={[
                  'Convenios con múltiples obras sociales',
                  'Gestión de autorizaciones y trámites',
                  'Descuentos especiales para afiliados',
                  'Atención preferencial en gestiones'
                ]}
                reverse={true}
              />
            </div>
          </div>
        </section>

        <About />
        <Footer />
      </div>

      <WhatsAppButton />
    </div>
  );
}

export default App;
