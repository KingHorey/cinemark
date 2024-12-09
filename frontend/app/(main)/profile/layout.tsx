import React from "react";
import NavLinks from "./navLinks";
import { HeadingOne } from "@/app/ui/headings/heading";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="space-y-10 py-10">
      <HeadingOne text="User Settings" />
      <NavLinks />
      {children}
    </div>
  );
};

export default Layout;
