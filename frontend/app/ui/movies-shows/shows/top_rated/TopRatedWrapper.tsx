import React from "react";

import { moviesOverviewSchema } from "@/app/utils/definitions";
import { z } from "zod";
import TopRated from "./topRated";

const TopRatedWrapper = async ({
  popular,
}: {
  popular: z.infer<typeof moviesOverviewSchema>;
}) => {
  return (
    <>
      <TopRated topRated={popular.data.results} title="Top-rated shows" />
    </>
  );
};

export default TopRatedWrapper;
