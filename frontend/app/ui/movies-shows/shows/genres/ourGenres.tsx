"use client";

import MoviesGridCard from "@/app/ui/movies/moviesGridCard";
import { HeadingTwo } from "../../../headings/heading";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { useState } from "react";

const ShowGenres = ({ genres }: { genres: { id: number; name: string }[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ITEMS_PER_PAGE = 4;

  const numberOfSlides =
    genres.length % 4 === 0
      ? genres.length / 4
      : Math.floor(genres.length / 4) + 1;

  const nextPage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === numberOfSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevPage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? numberOfSlides - 1 : prevIndex - 1
    );
  };

  const RENDERED_PAGE = genres.slice(
    currentIndex * ITEMS_PER_PAGE,
    (currentIndex + 1) * ITEMS_PER_PAGE
  );

  return (
    <section className="flex flex-col gap-y-10">
      <div className="flex md:flex-row flex-col md:justify-between items-center">
        <HeadingTwo text="Our Genres" />
        <div className="border border-gray-400/30 rounded-md bg-black flex items-center p-2 justify-between gap-x-2">
          <ArrowLeftIcon onClick={prevPage} size={18} stroke="white" />
          <div className="flex gap-x-1">
            {Array.from({ length: numberOfSlides }).map((_, count: number) => (
              <div
                key={count}
                className={`${
                  currentIndex === count ? "bg-red" : "bg-gray-800"
                } w-2 h-1 rounded-md`}
              ></div>
            ))}
          </div>
          <ArrowRightIcon onClick={nextPage} size={18} stroke="white" />
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.3s ease-in-out",
          }}
        >
          {Array.from({ length: numberOfSlides }).map((_, count: number) => (
            <div
              key={count}
              className="grid xs:grid-cols-2 lg:grid-cols-4 grid-rows-1 gap-10 min-w-full "
            >
              {genres
                .slice(count * ITEMS_PER_PAGE, (count + 1) * ITEMS_PER_PAGE)
                .map((genre) => (
                  <MoviesGridCard
                    key={genre.id}
                    category={genre.name}
                    link={genre.name}
                  />
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/*
<div className="overflow-hidden">
  <div
    className={`flex transition-transform duration-400`}
    style={{
      transform: `translateX(-${currentIndex * 100}%)`,
    }}
  >
    {Array.from({ length: numberOfSlides }).map((_, pageIndex) => (
      <div
        key={pageIndex}
        className="grid xs:grid-cols-2 lg:grid-cols-5 grid-rows-1 gap-10 min-w-full"
      >
        {genres
          .slice(
            pageIndex * ITEMS_PER_PAGE,
            (pageIndex + 1) * ITEMS_PER_PAGE
          )
          .map(({ id, name }, count) => (
            <MoviesGridCard
              category={name}
              link={`/movies/${name.toLowerCase()}`}
              key={id}
            />
          ))}
      </div>
    ))}
  </div>
</div>

  */

export default ShowGenres;
