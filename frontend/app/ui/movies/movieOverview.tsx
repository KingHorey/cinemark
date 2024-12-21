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
    <Card className="w-full xs:min-h-[230px] md:h-[390px] lg:h-[300px] bg-offBlack/40 border-slate-200/20 rounded-lg py-3 border p-0">
      <CardContent className="h-full w-full flex flex-col gap-y-5 justify-between xs:p-2 lg:p-4">
        <Link
          href={`${data?.type}/${data.id}`}
          className="flex flex-col justify-between h-full space-y-3"
        >
          <div className="h-[75%] rounded-md overflow-hidden">
            <Image
              width={300}
              height={200}
              src={data.poster_path}
              alt={data.original_name}
              className="rounded-md xs:object-cover md:object-fill lg:object-cover h-full w-full hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="text-white flex justify-between flex-col space-y-2 text-ellipsis">
            <div className="flex md:flex-row flex-col xs:gap-y-2 md:gap-y-0 justify-between">
              <p
                className="text-xs lg:text-sm font-semibold lg:w-1/2 text-ellipsis whitespace-nowrap overflow-hidden w-full"
                title={data.original_name}
              >
                {data.original_name}
              </p>
              {data?.genre && (
                <Badge className="bg-black/40 border flex items-center justify-center border-gray-400/30">
                  {/* {data.genre.split("&")[0]} */}
                </Badge>
              )}
            </div>
            <div className="flex lg:flex-row xs:flex-col justify-between lg:items-center space-x-0 xs:space-y-2">
              {data.rating && <Rating rating={data.rating} />}
              {data.seasons_count && (
                <Card className="flex space-x-1 items-center rounded-full bg-offBlack text-white w-fit h-fit p-0 border-gray-400/30">
                  <CardContent className="flex bg-black/40 border-gray-400/30 md:w-fit md:h-fit py-1 px-3 flex-row items-center rounded-full justify-between xs:px-2 xs:py-1 xs:w-full">
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
