import React from "react";
import { number } from "zod";

import { movieSchema } from "@/app/utils/definitions";
import { seriesSchema } from "@/app/utils/definitions";
import { z } from "zod";

import MovieOverviewCard from "@/app/ui/movies/movieOverview";
import MoviesGridCard from "@/app/ui/movies/moviesGridCard";

type SearchResultType =
  | z.infer<typeof movieSchema>[]
  | z.infer<typeof seriesSchema>[];

const SearchResults = ({
  results,
  type,
}: {
  results: SearchResultType;
  type: string;
}) => {
  return (
    <main className="grid xs:grid-cols-2 lg:grid-cols-4 grid-rows-1 gap-10 min-w-full">
      {type === "movies"
        ? results.map((movie, index) => (
            <MovieOverviewCard key={index} data={movie} />
          ))
        : results.map((movie, index) => (
            <MovieOverviewCard data={movie} key={index} />
          ))}
    </main>
  );
};

export default SearchResults;
