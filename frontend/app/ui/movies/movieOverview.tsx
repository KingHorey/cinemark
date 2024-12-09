import Image from "next/image";

import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { RectangleStackIcon } from "@heroicons/react/24/outline";

import { movieSchema } from "@/app/utils/definitions";

import { z } from "zod";
import Rating from "../general/rating";
import Link from "next/link";

const MovieOverviewCard = ({ data }: { data: z.infer<typeof movieSchema> }) => {
  const trasformName = (name: string) => {
    name = name.replace(/[ :;]/g, "-").toLowerCase();
    return name;
  };

  return (
    <Card className="w-full xs:h-[270px] md:h-[200px] lg:h-[350px] bg-[#1a1a1a] border-slate-200/20 rounded-lg py-3 border">
      <CardContent className="h-full w-full flex flex-col gap-y-5 justify-between">
        <Link
          href={`${data?.type}/${data.id}`}
          className="flex flex-col justify-between h-full"
        >
          <div className="h-[75%] rounded-md overflow-hidden">
            <Image
              width={300}
              height={200}
              src={data.poster_path}
              alt={data.original_name}
              className="rounded-md object-cover h-full w-full hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="text-white flex justify-between flex-col space-y-2">
            <div className="flex md:flex-row flex-col xs:gap-y-2 md:gap-y-0 justify-between">
              <p
                className="text-xs lg:text-sm font-semibold lg:w-1/2 text-ellipsis whitespace-nowrap overflow-hidden"
                title={data.original_name}
              >
                {data.original_name}
              </p>
              <Badge className="bg-black/40 border flex items-center justify-center border-gray-400/30">
                {data.genre.split("&")[0]}
              </Badge>
            </div>
            <div className="flex lg:flex-row xs:flex-col justify-between items-center space-x-0">
              {data.rating && <Rating rating={data.rating} />}
              {data.seasons_count && (
                <Card className="flex space-x-1 items-center rounded-full bg-offBlack text-white w-fit h-fit p-0 border-gray-400/30">
                  <CardContent className="flex bg-black/40 border-gray-400/30 md:w-fit md:h-fit py-1 px-3 items-center rounded-full justify-between">
                    <RectangleStackIcon className="xs:w-2 xs:h-2 md:w-4 md:h-4" />
                    <div className="flex space-x-1 ml-1">
                      <p className="text-xs">{data.seasons_count}</p>{" "}
                      <span className="text-xs font-semibold">Seasons</span>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};

export default MovieOverviewCard;
