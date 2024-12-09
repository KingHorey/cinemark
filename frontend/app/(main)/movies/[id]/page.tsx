import BentoGrid from "@/app/ui/general/seriesInfoGrid";
import MovieDetailsCard from "@/app/ui/general/movieDetails";
import React, { Suspense } from "react";

import { CircleIcon } from "lucide-react";
import MovieInformationPlayer from "@/app/ui/movies-shows/now-playing/movieInformationPlayer";
import MovieInformationWrapper from "@/app/ui/movies-shows/now-playing/movieInformationWrapper";
import { myAxios } from "@/middleware";

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
  const { data } = await myAxios.get(`/movies/info/${params}/`);

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
          title={verifiedData.original_name || verifiedData.original_title}
        />
      </MovieInformationWrapper>

      <div className="flex md:flex-row flex-col md:space-x-10 xs:space-y-10 md:space-y-0">
        <BentoGrid overview={verifiedData.overview} series={[]} />
        <MovieDetailsCard
          releaseYear={verifiedData.release_date}
          languages={verifiedData.language}
          genres={verifiedData.genre}
          rating={0}
          director={verifiedData.director}
        />
      </div>
    </div>
  );
};

export default SuspensePage;
