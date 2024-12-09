"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import React from "react";
import { PlayIcon, PlusIcon, ThumbsUpIcon, ThumbsDownIcon } from "lucide-react";

const MovieInformationPlayer = ({
  banner,
  movie,
  title,
}: {
  banner: string;
  movie: string;
  title: string;
}) => {
  const [showTrailer, setShowTrailer] = useState<boolean>(false);

  return (
    <div className="w-full h-full relative rounded-md">
      {showTrailer ? (
        <MovieTrailer movie={movie} title={title} />
      ) : (
        <>
          <img src={banner} className="w-full h-full object-cover rounded-md" />
          <div className="w-full absolute bottom-5 left-0 flex justify-center flex-col space-y-5">
            <h1 className="text-white text-center relative font-bold text-2xl h-10 w-full">
              {title}
            </h1>
            <div className="flex w-full space-x-5 justify-center items-center">
              <Button
                variant="destructive"
                className="bg-red/90 hover:bg-red transition-colors duration-200 p-4 py-6  w-fit font-bold text-base border-red"
                onClick={() => setShowTrailer(true)}
              >
                <PlayIcon fill="white" />
                Play Now
              </Button>
              <Button className="bg-offBlack border-2 border-gray-200/70 p-4 py-6 w-fit backdrop-blur-md">
                <PlusIcon stroke="white" className="h-6 w-6" />
              </Button>
              <Button className="bg-offBlack border-2 border-gray-200/70 p-4 py-6 w-fit backdrop-blur-md">
                <ThumbsUpIcon stroke="white" className="h-6 w-6" />
              </Button>
              <Button className=" border-2 border-gray-200/70 p-4 py-6 w-fit backdrop-blur-lg">
                <ThumbsDownIcon stroke="white" className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieInformationPlayer;

const MovieTrailer = ({ movie, title }: { movie: string; title: string }) => {
  return (
    <iframe
      width="100%"
      height="100%"
      src={movie}
      title={title}
      allowFullScreen
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      className="border-none rounded-lg"
    />
  );
};
