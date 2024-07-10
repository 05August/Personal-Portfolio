"use client";

import "@fontsource/space-mono";
import Navigation from "../Navigation";
import Footer from "../Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black">
      <Navigation />
      <div className="content-container">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
