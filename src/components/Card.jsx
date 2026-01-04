import PropTypes from "prop-types";
import { FaDesktop, FaGamepad, FaMobileAlt } from "react-icons/fa";
import { Card as UiCard } from "@/components/ui/card";

const Card = ({ title, subtitle, image, link, type }) => {
  const getPlatformIcons = (platformString) => {
    if (!platformString) return null;
    const icons = [];
    const lower = platformString.toLowerCase();

    if (lower.includes("pc"))
      icons.push(<FaDesktop key="pc" title="PC" className="w-4 h-4" />);
    if (
      lower.includes("console") ||
      lower.includes("playstation") ||
      lower.includes("xbox")
    )
      icons.push(
        <FaGamepad key="console" title="Console" className="w-4 h-4" />
      );
    if (lower.includes("mobile"))
      icons.push(
        <FaMobileAlt key="mobile" title="Mobile" className="w-4 h-4" />
      );

    return icons.length > 0 ? (
      <div className="flex gap-2 text-muted-foreground">{icons}</div>
    ) : (
      <p className="text-sm text-muted-foreground">{platformString}</p>
    );
  };

  const content = (
    <div className="flex flex-row items-center gap-4 p-4">
      <div className="relative h-16 w-16 min-w-16 overflow-hidden rounded-md border border-border">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col gap-1 overflow-hidden">
        <h3 className="font-semibold leading-none text-foreground truncate">
          {title}
        </h3>
        {type === "games"
          ? getPlatformIcons(subtitle)
          : subtitle && (
              <p className="text-sm text-muted-foreground line-clamp-1">
                {subtitle}
              </p>
            )}
      </div>
    </div>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full no-underline"
      >
        <UiCard className="hover:bg-accent/50 transition-colors">
          {content}
        </UiCard>
      </a>
    );
  }

  return <UiCard>{content}</UiCard>;
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  image: PropTypes.string.isRequired,
  link: PropTypes.string,
  type: PropTypes.string,
};

export default Card;
