import React from "react";

import { moviesOverviewSchema } from "@/app/utils/definitions";
import { z } from "zod";
import OnTheAir from "./onTheAir";

const OnTheAirWrapper = async ({
  popular,
}: {
  popular: z.infer<typeof moviesOverviewSchema>;
}) => {
  return (
    <>
      <OnTheAir popular={popular.data.results} title="Airing Shows" />
    </>
  );
};

export default OnTheAirWrapper;
