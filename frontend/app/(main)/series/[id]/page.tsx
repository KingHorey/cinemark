import { myAxios } from "@/middleware";
import SeriesGrid from "@/app/ui/general/seriesInfoGrid";
import MovieDetailsCard from "@/app/ui/general/movieDetails";
import React from "react";

import MovieInformationWrapper from "@/app/ui/movies-shows/now-playing/movieInformationWrapper";
import MovieInformationPlayer from "@/app/ui/movies-shows/now-playing/movieInformationPlayer";

import { Suspense } from "react";
import { CircleIcon } from "lucide-react";

const SuspensePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return (
    <Suspense
      fallback={
        <div className="w-full h-[500px] flex items-center justify-center">
          <CircleIcon
            className="animate-spin duration-500 transition-all"
            size={24}
            stroke="white"
          />
        </div>
      }
    >
      <Page params={id} />
    </Suspense>
  );
};

const Page = async ({ params }: { params: string }) => {
  const { data } = await myAxios.get(`/series/info/${params}/`);
  // const verifiedData = seriesInfoSchema.safeParse(data.data);
  const verifiedData = data.data;
  const { key, site } = verifiedData;
  let url = "";
  if (site === "YouTube") url = `https://www.youtube.com/embed/${key}`;
  return (
    <div className="space-y-10">
      <MovieInformationWrapper>
        <MovieInformationPlayer
          banner={verifiedData.banner}
          movie={url}
          title={verifiedData.original_name}
        />
      </MovieInformationWrapper>
      <div className="flex md:flex-row flex-col md:space-x-10 xs:space-y-10 md:space-y-0">
        <SeriesGrid
          overview={data.data.overview}
          series={verifiedData.seasons}
        />
        <MovieDetailsCard
          releaseYear={data.data.release_date}
          languages={data.data.language}
          genres={data.data.genre}
          rating={0}
          director={data?.data?.director}
        />
      </div>
    </div>
  );
};

export default SuspensePage;
