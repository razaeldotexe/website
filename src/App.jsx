import Profile from "./components/Profile";
import LinkList from "./components/LinkList";
import DatabaseGrid from "./components/DatabaseGrid";
import profileData from "./database/profile.json";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="w-full max-w-md space-y-8">
        <Profile
          name={profileData.name}
          bio={profileData.bio}
          avatar={profileData.avatar}
        />

        <LinkList links={profileData.socials} />

        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              What I Like
            </span>
          </div>
        </div>

        <DatabaseGrid />
      </div>
    </div>
  );
}

export default App;
