import GenreCarousel from "@/app/ui/general/genreCarousel";

const OurGenres = ({
  genres,
  title,
}: {
  genres: { id: number; name: string }[];
  title: string;
}) => {
  return <GenreCarousel information={genres} title={title} />;
};

export default OurGenres;
