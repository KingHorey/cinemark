import OurGenres from "./ourGenres";

const GenreWrapper = async ({
  genres,
}: {
  genres: { id: number; name: string }[];
}) => {
  return (
    <>
      <OurGenres genres={genres} title="Our Genres" />
    </>
  );
};

export default GenreWrapper;
