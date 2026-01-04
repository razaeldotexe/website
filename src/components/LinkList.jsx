import PropTypes from "prop-types";

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
