import PropTypes from "prop-types";
import { FaDesktop, FaGamepad, FaMobileAlt } from "react-icons/fa";
import "../App.css";

const Card = ({ title, subtitle, image, link, type }) => {
  const getPlatformIcons = (platformString) => {
    if (!platformString) return null;
    const icons = [];
    const lower = platformString.toLowerCase();

    if (lower.includes("pc")) icons.push(<FaDesktop key="pc" title="PC" />);
    if (
      lower.includes("console") ||
      lower.includes("playstation") ||
      lower.includes("xbox")
    )
      icons.push(<FaGamepad key="console" title="Console" />);
    if (lower.includes("mobile"))
      icons.push(<FaMobileAlt key="mobile" title="Mobile" />);

    return icons.length > 0 ? (
      <div className="platform-icons">{icons}</div>
    ) : (
      <p>{platformString}</p>
    );
  };

  const CardContent = () => (
    <>
      <div className="card-image-container">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-info">
        <h3>{title}</h3>
        {type === "games"
          ? getPlatformIcons(subtitle)
          : subtitle && <p>{subtitle}</p>}
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
