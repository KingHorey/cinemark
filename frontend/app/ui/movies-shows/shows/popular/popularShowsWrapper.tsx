import React from "react";

import { genres } from "@/app/utils/requests";
import { moviesOverviewSchema } from "@/app/utils/definitions";
import { z } from "zod";
import PopularShows from "./popularShows";

const PopularShowsWrapper = async ({
  popular,
}: {
  popular: z.infer<typeof moviesOverviewSchema>;
}) => {
  return <PopularShows popular={popular} title="Popular Shows" />;
};

export default PopularShowsWrapper;
