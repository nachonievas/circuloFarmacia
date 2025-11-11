import './App.css';
import Navbar from './components/Navbar';
import ColorBendsNew from './components/ColorBendsNew';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="app">
      <Navbar />

      {/* Background animado con ColorBends */}
      <div className="background-wrapper">
        <ColorBendsNew
          colors={[
            '#71c119', // kelly-green
            '#741e7b', // purple
            '#5e2667', // finn
            '#cbe3ac', // tea-green
            '#71c119', // kelly-green
          ]}
          speed={0.15}
          scale={1.2}
          frequency={0.8}
          warpStrength={1.2}
          mouseInfluence={0.8}
          parallax={0.3}
          noise={0.05}
          autoRotate={5}
          transparent={true}
        />
      </div>

      {/* Contenido de la página */}
      <div className="content-wrapper">
        <Hero />
        
        {/* Services Section */}
        <section id="servicios" style={{ 
          padding: '100px 20px', 
          position: 'relative',
          zIndex: 1,
          background: 'linear-gradient(135deg, rgba(94, 38, 103, 0.05) 0%, rgba(113, 193, 25, 0.05) 100%)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ 
                fontSize: '2.8rem', 
                marginBottom: '16px',
                color: '#741e7b',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 800
              }}>
                Nuestros Servicios
              </h2>
              <p style={{ 
                fontSize: '1.2rem', 
                color: '#666', 
                fontWeight: 300
              }}>
                Todo lo que necesitás para cuidar tu salud y la de tu familia
              </p>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: '30px' 
            }}>
              {[
                { 
                  icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '35px', height: '35px'}}><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" fill="currentColor"/></svg>,
                  title: 'Atención Personalizada', 
                  desc: 'Farmacéuticos profesionales listos para asesorarte sobre medicamentos y tratamientos.' 
                },
                { 
                  icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '35px', height: '35px'}}><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" fill="currentColor"/></svg>,
                  title: 'Medicamentos de Calidad', 
                  desc: 'Productos originales y certificados. Trabajamos con los mejores laboratorios.' 
                },
                { 
                  icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '35px', height: '35px'}}><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" fill="currentColor"/></svg>,
                  title: 'Entrega a Domicilio', 
                  desc: 'Recibí tus medicamentos en la puerta de tu casa de forma rápida y segura.' 
                },
                { 
                  icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '35px', height: '35px'}}><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" fill="currentColor"/></svg>,
                  title: 'Horario Extendido', 
                  desc: 'Abierto todos los días con horarios pensados para tu comodidad.' 
                },
                { 
                  icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '35px', height: '35px'}}><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" fill="currentColor"/></svg>,
                  title: 'Recetas Electrónicas', 
                  desc: 'Aceptamos recetas digitales para mayor comodidad y rapidez en la atención.' 
                },
                { 
                  icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '35px', height: '35px'}}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor"/></svg>,
                  title: 'Asesoramiento Profesional', 
                  desc: 'Consultas sobre medicamentos, posología y contraindicaciones sin cargo.' 
                }
              ].map((service, index) => (
                <div key={index} style={{ 
                  background: 'rgba(255, 255, 255, 0.1)', 
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  padding: '40px 30px', 
                  borderRadius: '20px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = '#71c119';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(113, 193, 25, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                }}>
                  <div style={{ 
                    width: '70px',
                    height: '70px',
                    margin: '0 auto 24px',
                    background: 'linear-gradient(135deg, #71c119, #741e7b)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    {service.icon}
                  </div>
                  <h3 style={{ 
                    color: '#71c119', 
                    marginBottom: '12px', 
                    fontSize: '1.4rem',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700
                  }}>
                    {service.title}
                  </h3>
                  <p style={{ 
                    color: 'rgba(255, 255, 255, 0.9)', 
                    lineHeight: '1.6',
                    fontSize: '1rem',
                    fontWeight: 300
                  }}>
                    {service.desc}
                  </p>
                </div>
              ))}
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
