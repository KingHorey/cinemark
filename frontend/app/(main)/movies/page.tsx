import Advert from "@/app/ui/advert/advert";
import MoviesContainer from "@/app/ui/movies-shows/movies/moviesContainer";
import NowPlayingContainer from "@/app/ui/movies-shows/now-playing/nowPlayingContainer";
import ShowsContainer from "@/app/ui/movies-shows/shows/showsContainer";

const Page = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <NowPlayingContainer />
      <MoviesContainer />
      <ShowsContainer />
      <Advert />
    </div>
  );
};

export default Page;
