import './App.css';
import Navbar from './components/Navbar';
import PharmacyBackground from './components/PharmacyBackground';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ServiceBanner from './components/ServiceBanner';
import GlitchText from './components/GlitchText';

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
              {/* Banner combinado: Entrega a Domicilio + Horarios */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '20px',
                border: '1px solid rgba(113, 193, 25, 0.1)',
                padding: '50px',
                marginBottom: '60px',
                transition: 'all 0.4s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                e.currentTarget.style.borderColor = 'rgba(113, 193, 25, 0.3)';
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(113, 193, 25, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                e.currentTarget.style.borderColor = 'rgba(113, 193, 25, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '50px', alignItems: 'center' }}>
                  <div>
                    <h3 style={{
                      fontSize: '2rem',
                      fontWeight: 800,
                      color: '#71c119',
                      marginBottom: '20px',
                      fontFamily: 'Montserrat, sans-serif'
                    }}>
                      Entrega a Domicilio & Horarios
                    </h3>
                    <p style={{
                      fontSize: '1.1rem',
                      lineHeight: '1.8',
                      color: 'rgba(255, 255, 255, 0.9)',
                      marginBottom: '30px',
                      fontWeight: 300
                    }}>
                      Recibí tus medicamentos en la comodidad de tu hogar con nuestro servicio de entrega a domicilio. 
                      Estamos disponibles en nuestros horarios de atención para atenderte cuando lo necesites.
                    </p>
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      margin: 0 
                    }}>
                      {[
                        'Entregas en el día según disponibilidad',
                        'Lunes a Viernes: 8:00 - 20:00',
                        'Sábados: 9:00 - 13:00',
                        'Transporte seguro de medicamentos',
                        'Cobertura en toda la zona',
                        'Seguimiento de pedidos en tiempo real'
                      ].map((item, index) => (
                        <li key={index} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          marginBottom: '16px',
                          fontSize: '1rem',
                          color: 'rgba(255, 255, 255, 0.85)',
                          fontWeight: 400,
                          transition: 'transform 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(8px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="#71c119"/>
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{
                    position: 'relative',
                    height: '350px',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(113, 193, 25, 0.2)'
                  }}>
                    <img 
                      src={horarios} 
                      alt="Horarios y entregas" 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.6s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(135deg, rgba(113, 193, 25, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%)'
                    }}></div>
                  </div>
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
