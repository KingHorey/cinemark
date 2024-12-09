import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-300 py-8 mt-20">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Home Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Home</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categories" className="hover:text-white">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/devices" className="hover:text-white">
                  Devices
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Movies Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Movies</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/movies/genres" className="hover:text-white">
                  Genres
                </Link>
              </li>
              <li>
                <Link href="/movies/trending" className="hover:text-white">
                  Trending
                </Link>
              </li>
              <li>
                <Link href="/movies/new" className="hover:text-white">
                  New Release
                </Link>
              </li>
              <li>
                <Link href="/movies/popular" className="hover:text-white">
                  Popular
                </Link>
              </li>
            </ul>
          </div>

          {/* Shows Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Shows</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shows/genres" className="hover:text-white">
                  Genres
                </Link>
              </li>
              <li>
                <Link href="/shows/trending" className="hover:text-white">
                  Trending
                </Link>
              </li>
              <li>
                <Link href="/shows/new" className="hover:text-white">
                  New Release
                </Link>
              </li>
              <li>
                <Link href="/shows/popular" className="hover:text-white">
                  Popular
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/support" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscription Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Subscription</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/plans" className="hover:text-white">
                  Plans
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-white">
                  Features
                </Link>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <Link href="/facebook" className="hover:text-white">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="/twitter" className="hover:text-white">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="/linkedin" className="hover:text-white">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">©2023 Cinemark. All Rights Reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm">
            <Link href="/terms" className="hover:text-white">
              Terms of Use
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/cookie" className="hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
