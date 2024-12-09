// ("use client");

// import { HeadingTwo } from "../../../headings/heading";
// import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

// import { useState } from "react";
// import PopularMoviesWrapper from "./popularMoviesWrapper";

// const PopularMovies = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const ITEMS_PER_PAGE = 5;

//   const numberOfSlides =
//     genres.length % 5 === 0
//       ? genres.length / 5
//       : Math.floor(genres.length / 5) + 1;

//   const nextPage = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === numberOfSlides - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevPage = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? numberOfSlides - 1 : prevIndex - 1
//     );
//   };

//   console.log(genres, numberOfSlides);

//   const RENDERED_PAGE = genres.slice(
//     currentIndex * ITEMS_PER_PAGE,
//     (currentIndex + 1) * ITEMS_PER_PAGE
//   );

//   return (
//     <section className="flex flex-col gap-y-10">
//       <div className="flex md:flex-row flex-col md:justify-between items-center">
//         <HeadingTwo text="Popular Top 10 in Genres" />
//         <div className="border border-gray-400/30 rounded-md bg-black flex items-center p-2 justify-between gap-x-2">
//           <ArrowLeftIcon onClick={prevPage} size={18} stroke="white" />
//           <div className="flex gap-x-1">
//             {Array.from({ length: numberOfSlides }).map((_, count: number) => (
//               <div
//                 key={count}
//                 className={`${
//                   currentIndex === count ? "bg-red" : "bg-gray-800"
//                 } w-2 h-1 rounded-md`}
//               ></div>
//             ))}
//           </div>
//           <ArrowRightIcon onClick={nextPage} size={18} stroke="white" />
//         </div>
//       </div>
//       <div>
//         <PopularMoviesWrapper genre={RENDERED_PAGE} />
//       </div>
//     </section>
//   );
// };

// export default PopularMovies;
