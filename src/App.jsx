import "./App.css";
import Profile from "./components/Profile";
import LinkList from "./components/LinkList";
import DatabaseGrid from "./components/DatabaseGrid";
import profileData from "./database/profile.json";

function App() {
  return (
    <div className="app-container">
      <div className="content-wrapper">
        <Profile
          name={profileData.name}
          bio={profileData.bio}
          avatar={profileData.avatar}
        />

        <LinkList links={profileData.socials} />

        <div className="divider"></div>

        <DatabaseGrid />
      </div>
    </div>
  );
}

export default App;
