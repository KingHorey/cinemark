import React from "react";

import Image from "next/image";
import Link from "next/link";

const AuthNav = () => {
  return (
    <div className="w-full">
      <div className="flex items-center mr-auto">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/Vector.svg" width={50} height={50} alt="Cinemark logo" />
          <p className="font-bold text-white">Cinemark</p>
        </Link>
      </div>
    </div>
  );
};

export default AuthNav;
