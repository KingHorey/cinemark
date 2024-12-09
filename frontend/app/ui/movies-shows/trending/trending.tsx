"use client";

import MovieOverviewCard from "@/app/ui/movies/movieOverview";

import { HeadingTwo } from "../../headings/heading";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { useState } from "react";

import { z } from "zod";
import { moviesOverviewSchema } from "@/app/utils/definitions";
import Carousel from "../../general/carousels/carousel";

const TrendingMovies = ({
  movies,
  title,
}: {
  title: string;
  movies: z.infer<typeof moviesOverviewSchema>;
}) => {
  return <Carousel title={title} information={movies.data.results} />;
};

export default TrendingMovies;
