import Profile from "../components/Profile";
import LinkList from "../components/LinkList";
import DatabaseGrid from "../components/DatabaseGrid";
import { useContent } from "../components/content-provider";

const Home = () => {
  const { profile } = useContent();

  return (
    <div className="w-full max-w-md space-y-8 mx-auto">
      <Profile name={profile.name} bio={profile.bio} avatar={profile.avatar} />

      <LinkList links={profile.socials} />

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
  );
};

export default Home;
