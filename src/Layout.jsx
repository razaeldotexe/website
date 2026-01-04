import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { useContent } from "./components/content-provider";

const Layout = () => {
  const { profile } = useContent();
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <Navbar brand={profile.name} />
      <Sidebar />
      <div className="flex-1 flex flex-col md:pl-[200px]">
        <main className="flex-1 py-6 px-4 sm:px-8 container max-w-screen-2xl">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
