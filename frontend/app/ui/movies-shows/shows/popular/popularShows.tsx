import { z } from "zod";
import { moviesOverviewSchema } from "@/app/utils/definitions";
import Carousel from "@/app/ui/general/carousels/carousel";

const PopularShows = ({
  popular,
  title,
}: {
  popular: z.infer<typeof moviesOverviewSchema>;
  title: string;
}) => {
  return <Carousel title={title} information={popular.data.results} />;
};

export default PopularShows;
