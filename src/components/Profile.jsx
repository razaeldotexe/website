import PropTypes from "prop-types";

const Profile = ({ name, bio, avatar }) => {
  return (
    <div className="profile-section">
      <div className="avatar-container">
        <img src={avatar} alt={name} className="avatar" />
      </div>
      <h1 className="profile-name">{name}</h1>
      <p className="profile-bio">{bio}</p>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Profile;
