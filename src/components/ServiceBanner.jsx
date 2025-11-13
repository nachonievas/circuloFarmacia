import './ServiceBanner.css';

const ServiceBanner = ({ image, title, description, features, reverse = false }) => {
  return (
    <div className={`service-banner ${reverse ? 'reverse' : ''}`}>
      <div className="banner-image">
        <img src={image} alt={title} />
        <div className="image-overlay"></div>
      </div>
      <div className="banner-content">
        <h3 className="banner-title">{title}</h3>
        <p className="banner-description">{description}</p>
        {features && (
          <ul className="banner-features">
            {features.map((feature, index) => (
              <li key={index}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="#71c119"/>
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ServiceBanner;
