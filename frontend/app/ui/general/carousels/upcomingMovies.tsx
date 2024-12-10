"use client";

import { HeadingTwo } from "@/app/ui/headings/heading";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { useState } from "react";
import { z } from "zod";
import { movieSchema, moviesOverviewSchema } from "@/app/utils/definitions";
import UpcomingListing from "../../movies/upcomingListing";

const UpcomingMoviesCarousel = ({
  information,
  title,
}: {
  information: z.infer<typeof moviesOverviewSchema>["data"]["results"];
  title: string;
}) => {
  console.log(information);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ITEMS_PER_PAGE = 5;

  const numberOfSlides =
    information?.length % 5 === 0
      ? information?.length / 5
      : Math.floor(information?.length / 5) + 1;

  const nextPage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === numberOfSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevPage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? numberOfSlides - 1 : prevIndex - 1
    );
  };
  return (
    <section className="flex flex-col gap-y-10">
      <div className="flex md:flex-row flex-col xs:items-start xs:gap-y-5 md:justify-between items-center">
        <HeadingTwo text={title} />
        <div className="border border-gray-400/30 rounded-md bg-black flex items-center p-2 justify-between gap-x-2">
          <ArrowLeftIcon onClick={prevPage} size={18} stroke="white" />
          <div className="flex gap-x-1">
            {Array.from({ length: numberOfSlides }).map((_, count: number) => (
              <div
                key={count}
                className={`${
                  currentIndex === count ? "bg-red" : "bg-gray-800"
                } w-2 h-1 rounded-md`}
              ></div>
            ))}
          </div>
          <ArrowRightIcon onClick={nextPage} size={18} stroke="white" />
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.3s ease-in-out",
          }}
        >
          {Array.from({ length: numberOfSlides }).map((_, count: number) => (
            <div
              key={count}
              className="grid xs:grid-cols-2 lg:grid-cols-5 grid-rows-1 p-2 lg:p-0 gap-2 md:gap-10 min-w-full "
            >
              {information
                ?.slice(count * ITEMS_PER_PAGE, (count + 1) * ITEMS_PER_PAGE)
                .map((genre: z.infer<typeof movieSchema>) => (
                  <UpcomingListing key={genre.id} data={genre} />
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingMoviesCarousel;
