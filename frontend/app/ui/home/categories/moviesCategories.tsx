import React from "react";
import { HeadingTwo } from "../../headings/heading";
import MoviesGridCard from "../../movies/moviesGridCard";
import MoviesGridCarousel from "../../movies/moviesGridCarousel";
import ExperienceContainer from "../../experience/experienceContainer";
import ExperienceCard from "../../experience/experienceCard";

const MoviesCategories = () => {
  return (
    <div className="text-white flex flex-col gap-y-20">
      <section className="flex flex-col gap-y-20">
        <div className="flex flex-col gap-y-5">
          <HeadingTwo text="Explore our wide range of categories" />
          <p className="text-gray-400">
            Whether you&apos;re looking for a comedy to make you laugh, a drama
            to make you think, or a documentary to learn something new
          </p>
        </div>
        <MoviesGridCarousel>
          <MoviesGridCard category="Action" link="/movies/action" />
          <MoviesGridCard category="Adventure" link="/movies/adventure" />
          <MoviesGridCard category="Drama" link="/movies/drama" />
          <MoviesGridCard category="Horror" link="/movies/horror" />
          <MoviesGridCard category="Comedy" link="/movies/comedy" />
        </MoviesGridCarousel>
      </section>
    </div>
  );
};

export default MoviesCategories;
