import { Suspense } from "react";
import PopularShowsWrapper from "./popular/popularShowsWrapper";
import GenreWrapper from "./genres/genreWrapper";

import FieldSets from "../fieldsets";
import { MovieGridSkeleton } from "../../skeleton";
import { myAxios } from "@/middleware";

import TopRatedWrapper from "./top_rated/TopRatedWrapper";
import OnTheAirWrapper from "./onTheAir/onTheAirWrapper";

const ShowsContainer = async () => {
  const [onTheAirResponse, topRatedResponse, popularResponse] =
    await Promise.all([
      myAxios.get("/series?type=on_the_air"),
      myAxios.get("/series?type=top_rated"),
      myAxios.get("/series?type=popular"),
    ]);

  return (
    <FieldSets title="Shows">
      <Suspense fallback={<MovieGridSkeleton />}>
        <GenreWrapper />
      </Suspense>
      <Suspense fallback={<MovieGridSkeleton />}>
        <PopularShowsWrapper popular={popularResponse.data} />
      </Suspense>
      <Suspense fallback={<MovieGridSkeleton />}>
        <TopRatedWrapper popular={topRatedResponse.data} />
      </Suspense>
      <Suspense fallback={<MovieGridSkeleton />}>
        <OnTheAirWrapper popular={onTheAirResponse.data} />
      </Suspense>
    </FieldSets>
  );
};

export default ShowsContainer;
