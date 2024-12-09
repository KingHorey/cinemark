import React from "react";

import PopularMovies from "./popularMovies";
import { moviesOverviewSchema } from "@/app/utils/definitions";
import { z } from "zod";

const PopularMoviesWrapper = async ({
  popular,
}: {
  popular: z.infer<typeof moviesOverviewSchema>;
}) => {
  return <PopularMovies popular={popular} title="popular movies" />;
};

export default PopularMoviesWrapper;
