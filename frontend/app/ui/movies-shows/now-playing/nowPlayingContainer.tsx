"use client";

import { useState } from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import NowPlaying from "./nowPlaying";

const images = ["/images/kantara.png", "/images/avengers-movie.png"];

const NowPlayingContainer = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const nextPage = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevPage = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-full md:h-[500px] flex flex-nowrap flex-row relative overflow-hidden rounded-md">
      {images.map((image, index: number) => {
        return (
          <div
            key={index}
            style={{ translate: `${-100 * currentIndex}%` }}
            className="min-w-full max-w-full transition-all duration-300"
          >
            <NowPlaying image={image} index={index} key={index} />
          </div>
        );
      })}

      <div className="flex justify-between items-center absolute z-[999] bottom-10 w-11/12 mx-auto left-0 right-0 ">
        <div className="border rounded-md bg-offBlack border-gray-400/30 p-1">
          <ArrowLeftIcon
            stroke="white"
            onClick={prevPage}
            role="button"
            onKeyDown={(e: React.KeyboardEvent<HTMLOrSVGElement>) => {
              if (e.key === "Enter" || e.key === " ") {
                prevPage();
              }
            }}
            className="cursor-pointer focus-visible:opacity-40 hover:opacity-40 transition-opacity duration-300"
            tabIndex={0}
            aria-label="Go to previous movie"
          />
        </div>
        <div className="mx-auto z-[999] flex gap-x-2">
          {Array.from({ length: images.length }, (_, index) => (
            <div
              key={index}
              className={`rounded-md px-2 py-1 text-xs text-white ${
                currentIndex === index ? "bg-red" : "bg-black"
              }`}
              tabIndex={0}
              role="button"
            ></div>
          ))}
        </div>
        <div className="border rounded-md bg-offBlack border-gray-400/30 p-1">
          <ArrowRightIcon
            stroke="white"
            onClick={nextPage}
            className="cursor-pointer focus-visible:opacity-40 hover:opacity-40 transition-opacity duration-300"
            tabIndex={0}
            role="button"
            aria-label="Go to next movie"
            onKeyDown={(e: React.KeyboardEvent<HTMLOrSVGElement>) => {
              if (e.key === "Enter" || e.key === " ") {
                nextPage();
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NowPlayingContainer;
