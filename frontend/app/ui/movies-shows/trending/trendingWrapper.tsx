import React from "react";

import { moviesOverviewSchema } from "@/app/utils/definitions";

import TrendingMovies from "./trending";
import { z } from "zod";

const TrendingMoviesWrapper = async ({
  data,
  title,
}: {
  title: string;
  data: z.infer<typeof moviesOverviewSchema>;
}) => {
  return (
    <>
      <TrendingMovies movies={data} title={title} />
    </>
  );
};

export default TrendingMoviesWrapper;
