import MoviesOverviewCard from "@/app/ui/movies/movieOverview";

import { z } from "zod";
import { moviesOverviewSchema } from "@/app/utils/definitions";
import UpcomingMoviesCarousel from "@/app/ui/general/carousels/upcomingMovies";

const PopularMovies = ({
  popular,
  title,
}: {
  popular: z.infer<typeof moviesOverviewSchema>;
  title: string;
}) => {
  return (
    <UpcomingMoviesCarousel title={title} information={popular.data.results} />
  );
};

export default PopularMovies;
