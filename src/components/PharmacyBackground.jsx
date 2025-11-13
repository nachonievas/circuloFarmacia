import './PharmacyBackground.css';

const PharmacyBackground = () => {
  return (
    <div className="pharmacy-background">
      {/* Gradiente base */}
      <div className="gradient-base"></div>
      
      {/* Patrón de cruces farmacéuticas */}
      <div className="crosses-pattern">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`cross cross-${i + 1}`}>
            <span className="cross-horizontal"></span>
            <span className="cross-vertical"></span>
          </div>
        ))}
      </div>
      
      {/* Círculos decorativos */}
      <div className="circles-pattern">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`circle circle-${i + 1}`}></div>
        ))}
      </div>
      
      {/* Ondas sutiles */}
      <div className="waves">
        <svg viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,100 Q300,50 600,100 T1200,100 L1200,400 L0,400 Z" className="wave wave-1"/>
          <path d="M0,150 Q300,100 600,150 T1200,150 L1200,400 L0,400 Z" className="wave wave-2"/>
          <path d="M0,200 Q300,150 600,200 T1200,200 L1200,400 L0,400 Z" className="wave wave-3"/>
        </svg>
      </div>
      
      {/* Grid sutil */}
      <div className="grid-pattern"></div>
    </div>
  );
};

export default PharmacyBackground;
