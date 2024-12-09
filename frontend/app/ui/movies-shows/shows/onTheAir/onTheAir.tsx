"use client";

import { z } from "zod";
import { moviesOverviewSchema } from "@/app/utils/definitions";
import Carousel from "@/app/ui/general/carousels/carousel";

const OnTheAir = ({
  popular,
  title,
}: {
  title: string;
  popular: z.infer<typeof moviesOverviewSchema>["data"]["results"];
}) => {
  return <Carousel title={title} information={popular} />;
};

export default OnTheAir;
