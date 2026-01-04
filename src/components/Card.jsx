import PropTypes from "prop-types";
import "../App.css";

const Card = ({ title, subtitle, image, link, type }) => {
  const CardContent = () => (
    <>
      <div className="card-image-container">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-info">
        <h3>{title}</h3>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </>
  );

  return (
    <div className={`card ${type ? type : ""}`}>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link-wrapper"
        >
          <CardContent />
        </a>
      ) : (
        <CardContent />
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  image: PropTypes.string.isRequired,
  link: PropTypes.string,
  type: PropTypes.string,
};

export default Card;
