import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const routes = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
];

const NavItems = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col space-y-2">
      {routes.map((route) => (
        <Button
          key={route.path}
          asChild
          variant={location.pathname === route.path ? "secondary" : "ghost"}
          className="justify-start text-base"
        >
          <Link to={route.path}>{route.name}</Link>
        </Button>
      ))}
    </div>
  );
};

export const MobileSidebar = ({ className }) => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className={className}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] sm:w-[300px]">
          <div className="py-4">
            <h2 className="mb-4 text-lg font-semibold tracking-tight">
              Navigation
            </h2>
            <NavItems />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

MobileSidebar.propTypes = {
  className: PropTypes.string,
};

const Sidebar = () => {
  return (
    <aside className="hidden w-[200px] flex-col border-r bg-background md:flex fixed left-0 top-14 bottom-0 z-30">
      <div className="p-4 h-full overflow-y-auto">
        <h2 className="mb-4 text-lg font-semibold tracking-tight px-4">Menu</h2>
        <NavItems />
      </div>
    </aside>
  );
};

export default Sidebar;
