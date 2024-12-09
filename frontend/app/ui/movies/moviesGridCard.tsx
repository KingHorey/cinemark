import Image from "next/image";
import Link from "next/link";

import { Card, CardTitle, CardContent } from "@/components/ui/card";

import { ArrowLeftIcon } from "lucide-react";

const MoviesGridCard = ({
  category,
  link,
}: {
  category: string;
  link: string;
}) => {
  return (
    <Card className="w-full xs:h-[200px] md:h-[200px] lg:h-[350px] bg-offBlack/40 border-slate-200/20 rounded-md py-3 border">
      <CardContent className="h-full w-full flex flex-col gap-y-5 justify-between">
        <Image
          src={`/images/${category.toLowerCase()}.png`}
          width={240}
          height={230}
          alt={`${category} movies`}
        />
        <div className="flex justify-between">
          <CardTitle className="md:text-sm text-white font-semibold">
            {category}
          </CardTitle>
          <Link href={`/genre/${link.toLowerCase()}`}>
            <ArrowLeftIcon size={20} stroke="white" className="rotate-180" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default MoviesGridCard;
