import React from "react";

const MoviesGridCarousel = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="grid grid-cols-5 place-items-center gap-4">
      {children}
    </section>
  );
};

export default MoviesGridCarousel;
