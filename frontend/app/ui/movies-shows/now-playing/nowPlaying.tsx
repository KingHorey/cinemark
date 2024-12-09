/* eslint-disable @next/next/no-img-element */

const NowPlaying = ({ image, index }: { image: string; index: number }) => {
  return (
    // <div
    //   className="min-w-full h-full transition-all duration-300 ease-in-out"
    //   style={{ translate: `${-100 * index}%` }}
    // >
    <img
      src={image}
      alt=""
      aria-label={`Now playing ${image}`}
      className="min-w-full shrink-0 grow-0 h-full object-cover transition-all duration-300 ease-in-out"
    />
    // </div>
  );
};

export default NowPlaying;
