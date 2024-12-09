import React from "react";
import GenreWrapper from "./genres/genreWrapper";

import { MovieGridSkeleton } from "../../skeleton";

import { Suspense } from "react";
import PopularMoviesWrapper from "./popular/popularMoviesWrapper";
import TrendingMoviesWrapper from "../trending/trendingWrapper";
import FieldSets from "../fieldsets";

import { availableGenres } from "@/app/utils/requests";
import UpcomingMoviesWrapper from "./upcoming/upcomingWrapper";

export const revalidate = 60 * 60; // Revalidate this page every 60 seconds

async function fetchMovies(type: string) {
  const response = await fetch(`${process.env.BASE_URL}/movies?type=${type}`, {
    next: { revalidate: 3600 }, // Incremental Static Regeneration
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

const MoviesContainer = async () => {
  const [upcomingMovies, popularMovies, topRatedMovies] = await Promise.all([
    fetchMovies("upcoming"),
    fetchMovies("popular"),
    fetchMovies("top_rated"),
  ]);

  return (
    <FieldSets title="Movies">
      <Suspense fallback={<MovieGridSkeleton />}>
        <GenreWrapper genres={availableGenres} />
      </Suspense>
      <Suspense fallback={<MovieGridSkeleton />}>
        <PopularMoviesWrapper popular={popularMovies} />
      </Suspense>
      <Suspense fallback={<MovieGridSkeleton />}>
        <TrendingMoviesWrapper data={topRatedMovies} title="Top Rated Movies" />
      </Suspense>
      <Suspense fallback={<MovieGridSkeleton />}>
        <UpcomingMoviesWrapper popular={upcomingMovies} />
      </Suspense>
    </FieldSets>
  );
};

export default MoviesContainer;
