import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  CalendarIcon,
  StarIcon,
  LanguageIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

import Rating from "./rating"; // Assuming you have a Rating component
import { ClapperboardIcon } from "lucide-react";

interface DirectorInfo {
  name: string;
  gender: number;
  image: string;
}

interface MovieDetailsCardProps {
  releaseYear: number;
  languages: string[];
  genres: string[];
  rating: number;
  director: DirectorInfo;
}

const MovieDetailsCard: React.FC<MovieDetailsCardProps> = ({
  releaseYear,
  languages,
  genres,
  rating,
  director,
}) => {
  return (
    <div className="w-full justify-center">
      <Card className="w-full rounded-lg border bg-offBlack border-gray-400/30  text-white">
        <CardContent>
          <CardHeader>
            <CardTitle>
              <div className="flex items-center space-x-1">
                <CalendarIcon className="w-4 h-4" />
                <h3>Release Year</h3>
              </div>
            </CardTitle>
            <CardContent className="text-xs">{releaseYear}</CardContent>
          </CardHeader>

          <CardContent className="flex space-y-10 flex-col">
            {/* Languages Section */}
            <div className="space-y-1">
              <div className="flex items-center space-x-1">
                <LanguageIcon className="w-4 h-4" />
                <h4>Languages</h4>
              </div>
              <div>
                {languages.map((lang, index) => (
                  <Badge
                    key={index}
                    className={`${
                      index === 0 ? "bg-mainBlack border-gray-400/30" : ""
                    } mr-2`}
                  >
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Ratings Section */}
            <div className="space-y-2">
              <div className="flex items-center space-x-1">
                <StarIcon className="inline-block w-4 h-4" />
                <h4>Ratings</h4>
              </div>
              <Card className="bg-black/80 border-gray-400/40 rounded-lg w-fit">
                <CardContent className="flex flex-col items-start justify-center h-full p-2">
                  <CardDescription className="text-white font-semibold">
                    TMDB
                  </CardDescription>
                  <div className="flex items-center gap-x-2">
                    <Rating rating={rating} />
                    <span className="text-white/80">{rating}</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Genres Section */}
            <div className="space-y-2">
              <div className="flex items-center space-x-1">
                <Squares2X2Icon className="w-4 h-4" />
                <h4>Genres</h4>
              </div>
              <div className="flex gap-5 flex-wrap">
                {genres.map((genre, index) => (
                  <Badge
                    key={index}
                    className="bg-mainBlack border-gray-400/30 cursor-default select-none"
                  >
                    {genre}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Director Section */}
            <div className="space-y-1">
              <div className="flex items-center space-x-1">
                <ClapperboardIcon size={14} />
                <h4>Director</h4>
              </div>
              <Card className="bg-black/80 border-gray-400/40 rounded-lg text-white w-full">
                <CardContent className="flex w-full p-2 items-center h-full space-x-1 gap-x-5">
                  <img
                    src={`https://image.tmdb.org/t/p/w300${director?.image}`}
                    alt={`${director?.name} director`}
                    // width={50}
                    // height={50}
                    className="rounded-lg border-offBlack border w-[60px] h-[60px] object-fill"
                  />
                  <div className="space-y-1">
                    <p className="text-sm">{director?.name}</p>
                    <p className="text-xs text-white/80">
                      {director?.gender === 1
                        ? "Female"
                        : director?.gender === 2
                        ? "Male"
                        : "Other"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </CardContent>
      </Card>
    </div>
  );
};

export default MovieDetailsCard;
