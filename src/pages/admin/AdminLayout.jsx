import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  LayoutDashboard,
  User,
  FileText,
  ArrowLeft,
  LogOut,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "../../components/auth-provider";

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
    { name: "Profile", path: "/admin/profile", icon: User },
    { name: "Posts", path: "/admin/posts", icon: FileText },
  ];

  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };

  // Reusable navigation items component
  const NavItems = ({ onNavigate }) => (
    <>
      {navItems.map((item) => (
        <Button
          key={item.path}
          variant={location.pathname === item.path ? "secondary" : "ghost"}
          className="justify-start gap-2"
          asChild
          onClick={onNavigate}
        >
          <Link to={item.path}>
            <item.icon className="h-4 w-4" />
            {item.name}
          </Link>
        </Button>
      ))}
    </>
  );

  return (
    <div className="min-h-screen flex bg-muted/40 font-sans">
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-20 flex h-14 items-center gap-4 border-b bg-background px-4 sm:hidden">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] p-0">
            <div className="flex h-14 items-center justify-center border-b px-4">
              <span className="font-semibold text-lg">CMS Admin</span>
            </div>
            <nav className="flex flex-col gap-2 p-4">
              <NavItems onNavigate={() => setMobileOpen(false)} />
              <div className="mt-auto border-t pt-4 space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                  onClick={() => {
                    setMobileOpen(false);
                    handleLogout();
                  }}
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                  asChild
                  onClick={() => setMobileOpen(false)}
                >
                  <Link to="/">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Site
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
        <span className="font-semibold text-lg">CMS Admin</span>
      </header>

      {/* Desktop Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r bg-background sm:flex">
        <div className="flex h-14 items-center justify-center border-b px-4">
          <span className="font-semibold text-lg">CMS Admin</span>
        </div>
        <nav className="flex flex-col gap-2 p-4">
          <NavItems />
          <div className="mt-auto border-t pt-4 space-y-2">
            <Button
              variant="outline"
              className="w-full justify-start gap-2"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start gap-2"
              asChild
            >
              <Link to="/">
                <ArrowLeft className="h-4 w-4" />
                Back to Site
              </Link>
            </Button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col sm:pl-64 pt-14 sm:pt-0">
        <main className="flex-1 p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
