"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import Link from "next/link";
import Image from "next/image";
import { Suspense, useState } from "react";
import { UserIcon, SearchIcon, MenuIcon } from "lucide-react";

import SearchBar from "@/app/(main)/search/searchBar";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Movies & Shows",
    href: "/movies",
  },
  {
    label: "Support",
    href: "/support",
  },
  {
    label: "Subscriptions",
    href: "/subscriptions",
  },
];

// const Search = ({ setShowSearch }: { setShowSearch: (x: boolean) => void }) => {
//   ;

//   const searchParams = useSearchParams();
//   const { replace } = useRouter();

//   const handleSearch = useDebouncedCallback((e: string) => {
//     const params = new URLSearchParams(searchParams);
//     if (e) {
//       params.set("q", e);
//     } else {
//       params.delete("q");
//     }

//     replace(`/search/?${params.toString()}`);
//   }, 1000);

//   return <SearchBar setShowSearch={setShowSearch} />;
// };

const Navbar = () => {
  const pathname = usePathname();
  const [searchBar, setShowSearch] = useState<boolean>(false);
  const [sideBar, setShowSidebar] = useState<boolean>(false);

  return (
    <header>
      <nav className="flex items-center p-4 w-full mx-auto z-[999999] relative">
        <div className="flex items-center gap-x-3">
          <Image src="/Vector.svg" width={50} height={50} alt="Cinemark logo" />
          <p className="font-bold text-white">Cinemark</p>
        </div>
        <div
          className="md:hidden justify-end ml-auto cursor-pointer"
          tabIndex={0}
          onClick={() => setShowSidebar(!sideBar)}
        >
          <MenuIcon stroke="white" fill="white" className="items-end" />
          {sideBar && (
            <div className="absolute right-0 bg-offBlack w-full z-[999%]">
              <div className="text-white flex flex-col w-full gap-y-5 p-3 z-[999]">
                {navLinks.map((link, count: number) => (
                  <Link
                    href={link.href}
                    key={count}
                    className={`${
                      link.href === pathname &&
                      "rounded-md font-bold p-2 w-full"
                    } hover:bg-offBlack/70 transition-all duration-300 p-2 rounded-md w-full`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-x-5">
                  <SearchBar setShowSearch={setShowSearch} />

                  <Link href="/login">
                    <UserIcon
                      size={20}
                      stroke="white"
                      className="cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-row justify-between items-center w-full xs:hidden md:flex">
          <div className="rounded-md flex gap-x-5 w-[500px] p-2 border-neutral-400/20 border-2 lg:text-base mx-auto items-center justify-center text-white bg-black">
            {navLinks.map((link, count: number) => (
              <Link
                href={link.href}
                key={count}
                className={`${
                  link.href === pathname &&
                  "rounded-md bg-offBlack p-2 font-semibold"
                } hover:bg-offBlack/70 transition-all duration-300 p-2 rounded-md`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-x-5">
            {searchBar ? (
              <Suspense>
                <SearchBar setShowSearch={setShowSearch} />
              </Suspense>
            ) : (
              <SearchIcon
                size={20}
                stroke="white"
                className="cursor-pointer"
                onClick={() => setShowSearch(true)}
                tabIndex={0}
              />
            )}
            <Link href="/login">
              <UserIcon size={20} stroke="white" className="cursor-pointer" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
