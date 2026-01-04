import PropTypes from "prop-types";
import { FaInstagram, FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";

const iconMap = {
  instagram: <FaInstagram />,
  github: <FaGithub />,
  twitter: <FaTwitter />,
  whatsapp: <FaWhatsapp />,
};

const LinkList = ({ links }) => {
  return (
    <div className="link-list">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link-btn"
        >
          <span className="link-icon">{iconMap[link.icon] || null}</span>
          {link.platform}
        </a>
      ))}
    </div>
  );
};

LinkList.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      platform: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.string,
    })
  ).isRequired,
};

export default LinkList;
