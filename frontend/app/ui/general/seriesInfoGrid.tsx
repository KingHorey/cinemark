import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

import { HeadingThree } from "../headings/heading";

import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { z } from "zod";

import { seriesSeasonsSchema } from "@/app/utils/definitions";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SeriesGrid = ({
  overview,
  series,
}: {
  overview: string;
  series: z.infer<typeof seriesSeasonsSchema>;
}) => {
  return (
    <div className="space-y-10 lg:min-w-[70%] lg:max-w-[70%] w-full">
      <Card className="rounded-lg border bg-offBlack border-gray-400/30 w-full">
        <CardContent>
          <CardHeader>
            <CardTitle>
              <HeadingThree text="Description" />
            </CardTitle>
          </CardHeader>
          <CardContent className="text-white/80">
            <p>{overview}</p>
          </CardContent>
        </CardContent>
      </Card>
      {/* use the series_count to get the number of series */}
      {series?.map(({ data }, key) => (
        <Card className="rounded-lg border bg-[#0f0f0f] border-gray-400/30 w-full text-white p-0">
          <CardContent className="p-2">
            <Accordion
              type="single"
              collapsible
              className="transition-all duration-400 no-underline"
            >
              <AccordionItem
                value={key.toString()}
                className="no-underline border-none p-2 transition-all duration-400"
              >
                <AccordionTrigger className="font-semibold border-none hover:no-underline transition-all duration-400">
                  {data.name}
                </AccordionTrigger>
                {JSON.parse(data.json_episodes).map(
                  (episode: any, count: number) => (
                    <AccordionContent
                      className="flex items-center border-t-none border-b space-x-2 justify-evenly p-2 transition-all duration-400"
                      key={count}
                    >
                      <div className="text-xl font-bold">
                        {episode.episode_number}
                      </div>
                      <div className="flex flex-row w-full items-center rounded-lg p-2 space-x-5">
                        <Image
                          src={`https://image.tmdb.org/t/p/w300${episode.still_path}`}
                          width={130}
                          height={130}
                          alt={`${episode.name}`}
                          className="rounded-lg xs:w-[100px] xs:h-[100px] md:w-[130px] md:h-[130px] lg:w-[130px] lg:h-[130px] object-cover"
                        />
                        <div className="w-full space-y-2">
                          <div className="w-full flex flex-col md:flex-row justify-between xs:gap-y-3">
                            <h4 className="font-bold xs:text-sm md:text-base lg:text-base">
                              {episode?.name}
                            </h4>
                            <Badge className=" border-gray-400/30 space-x-1 flex items-center gap-x-1 w-fit">
                              <Clock size={12} />
                              {episode?.runtime
                                ? `${episode.runtime} mins`
                                : "n/a"}
                            </Badge>
                          </div>
                          <p className="border-gray-400/30 h-[140px] xs:text-xs lg:text-base overflow-hidden text-ellipsis">
                            <span className="line-clamp-4">
                              {episode?.overview || "--"}
                            </span>
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  )
                )}
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SeriesGrid;
