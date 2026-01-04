import PropTypes from "prop-types";
import { FaInstagram, FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";

const iconMap = {
  instagram: <FaInstagram />,
  github: <FaGithub />,
  twitter: <FaTwitter />,
  whatsapp: <FaWhatsapp />,
};

import { Button } from "@/components/ui/button";

const LinkList = ({ links }) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      {links.map((link) => (
        <Button
          key={link.id}
          asChild
          variant="outline"
          className="w-full h-12 text-base font-medium transition-all hover:scale-105"
        >
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <span className="text-xl">{iconMap[link.icon] || null}</span>
            {link.platform}
          </a>
        </Button>
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
