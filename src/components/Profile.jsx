import PropTypes from "prop-types";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Profile = ({ name, bio, avatar }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <Avatar className="h-24 w-24">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{name ? name.charAt(0) : "U"}</AvatarFallback>
      </Avatar>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          {name}
        </h1>
        <p className="text-muted-foreground">{bio}</p>
      </div>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Profile;
