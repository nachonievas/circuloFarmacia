export default function Services() {
  const services = [
    {
      icon: '👨‍⚕️',
      title: 'Atención Personalizada',
      description: 'Farmacéuticos profesionales listos para asesorarte sobre medicamentos y tratamientos.'
    },
    {
      icon: '💊',
      title: 'Medicamentos de Calidad',
      description: 'Productos originales y certificados. Trabajamos con los mejores laboratorios.'
    },
    {
      icon: '🚗',
      title: 'Entrega a Domicilio',
      description: 'Recibí tus medicamentos en la puerta de tu casa de forma rápida y segura.'
    },
    {
      icon: '🕐',
      title: 'Horario Extendido',
      description: 'Abierto todos los días con horarios pensados para tu comodidad.'
    },
    {
      icon: '📧',
      title: 'Recetas Electrónicas',
      description: 'Aceptamos recetas digitales para mayor comodidad y rapidez en la atención.'
    },
    {
      icon: 'ℹ️',
      title: 'Asesoramiento Profesional',
      description: 'Consultas sobre medicamentos, posología y contraindicaciones sin cargo.'
    }
  ];

  return (
    <section id="servicios" style={{ padding: '100px 20px', color: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.8rem', marginBottom: '16px', color: '#71c119' }}>Nuestros Servicios</h2>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)' }}>
            Todo lo que necesitás para cuidar tu salud y la de tu familia
          </p>
        </div>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px' 
        }}>
          {services.map((service, index) => (
            <div key={index} style={{ 
              background: 'rgba(255,255,255,0.1)', 
              padding: '40px 30px', 
              borderRadius: '20px', 
              textAlign: 'center',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{service.icon}</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '12px', color: '#71c119' }}>{service.title}</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.8)' }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
