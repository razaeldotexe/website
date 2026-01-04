import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { MobileSidebar } from "./Sidebar";
import { useAuth } from "./auth-provider";
import { Button } from "@/components/ui/button";

const Navbar = ({ brand }) => {
  const { user, signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center gap-4 px-4 sm:px-8">
        <MobileSidebar className="mr-2 md:hidden" />
        <div className="flex">
          <a className="mr-6 flex items-center space-x-2 font-bold" href="/">
            {brand}
          </a>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Search or other items could go here */}
          </div>
          <div className="flex items-center gap-2">
            {user ? (
              <>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/admin">Admin</Link>
                </Button>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <Button variant="outline" size="sm" asChild>
                <Link to="/login">Login</Link>
              </Button>
            )}
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  brand: PropTypes.string.isRequired,
};

export default Navbar;
