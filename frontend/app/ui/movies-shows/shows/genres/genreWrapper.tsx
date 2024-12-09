import React from "react";

import { availableGenres } from "@/app/utils/requests";
import GenreCarousel from "@/app/ui/general/genreCarousel";

const GenreWrapper = async () => {
  return (
    <>
      <GenreCarousel information={availableGenres} title="Our Genres" />
    </>
  );
};

export default GenreWrapper;
