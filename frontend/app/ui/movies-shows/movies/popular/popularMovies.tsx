import { z } from "zod";
import { moviesOverviewSchema } from "@/app/utils/definitions";
import Carousel from "@/app/ui/general/carousels/carousel";

const PopularMovies = ({
  popular,
  title,
}: {
  title: string;
  popular: z.infer<typeof moviesOverviewSchema>;
}) => {
  return <Carousel title="Popular Movies" information={popular.data.results} />;
};

export default PopularMovies;
