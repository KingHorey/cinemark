"use client";

import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";

const links = [
  {
    href: "/profile",
    link: "User Information",
  },
  {
    href: "/profile/reviews",
    link: "Reviews",
  },
  {
    href: "/profile/preferences",
    link: "Preferences",
  },
  {
    href: "/profile/liked-videos",
    link: "Liked Videos",
  },
];
const NavLinks = () => {
  const pathname = usePathname();
  return (
    <div className="space-x-5">
      {links.map(({ link, href }, index: number) => (
        <Link
          href={href}
          key={index}
          className={`${
            pathname === href ? "text-white" : "text-white/80"
          } transition-colors duration-200 hover:text-white `}
        >
          {link}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
