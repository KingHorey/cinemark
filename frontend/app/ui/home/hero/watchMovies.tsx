import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PlayIcon } from "lucide-react";

const WatchMovies = () => {
  return (
    <Button
      asChild
      className="w-fit z-[999] bg-red hover:bg-red/90 transition-colors duration-200"
    >
      <Link href="/movies">
        <PlayIcon />
        <p className="text-white font-semibold text-base">Start Watching</p>
      </Link>
    </Button>
  );
};

export default WatchMovies;
