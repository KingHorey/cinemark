import UpcomingMovies from "./upcoming";
import { moviesOverviewSchema } from "@/app/utils/definitions";
import { z } from "zod";

const UpcomingMoviesWrapper = async ({
  popular,
}: {
  popular: z.infer<typeof moviesOverviewSchema>;
}) => {
  return <UpcomingMovies popular={popular} title="upcoming movies" />;
};

export default UpcomingMoviesWrapper;
