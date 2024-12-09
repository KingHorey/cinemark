"use client";

// import MoviesOverviewCard from "@/app/ui/movies/movieOverview";
// import { HeadingTwo } from "../../../headings/heading";
// import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

// import { useState } from "react";

import { z } from "zod";
import { moviesOverviewSchema } from "@/app/utils/definitions";
import Carousel from "@/app/ui/general/carousels/carousel";

const TopRated = ({
  topRated,
  title,
}: {
  topRated: z.infer<typeof moviesOverviewSchema>["data"]["results"];
  title: string;
}) => {
  return <Carousel information={topRated} title={title} />;
};
export default TopRated;
