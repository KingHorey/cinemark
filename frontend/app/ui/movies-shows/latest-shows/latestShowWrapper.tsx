// import React from "react";

// import MoviesGridCard from "@/app/ui/movies/moviesGridCard";

// const genre = [
//   {
//     id: 28,
//     name: "Action",
//   },
//   {
//     id: 12,
//     name: "Adventure",
//   },
//   {
//     id: 16,
//     name: "Animation",
//   },
//   {
//     id: 35,
//     name: "Comedy",
//   },
//   {
//     id: 80,
//     name: "Crime",
//   },
//   {
//     id: 99,
//     name: "Documentary",
//   },
//   {
//     id: 18,
//     name: "Drama",
//   },
//   {
//     id: 10751,
//     name: "Family",
//   },
//   {
//     id: 14,
//     name: "Fantasy",
//   },
//   {
//     id: 36,
//     name: "History",
//   },
//   {
//     id: 27,
//     name: "Horror",
//   },
//   {
//     id: 10402,
//     name: "Music",
//   },
//   {
//     id: 9648,
//     name: "Mystery",
//   },
//   {
//     id: 10749,
//     name: "Romance",
//   },
//   {
//     id: 878,
//     name: "Science Fiction",
//   },
//   {
//     id: 10770,
//     name: "TV Movie",
//   },
//   {
//     id: 53,
//     name: "Thriller",
//   },
//   {
//     id: 10752,
//     name: "War",
//   },
//   {
//     id: 37,
//     name: "Western",
//   },
// ];

// const TrendingMoviesWrapper = () => {
//   return (
//     <div className={`grid grid-cols-5 gap-10 transition-all duration-300`}>
//       {genre.map(({ id, name }, count: number) => {
//         return (
//           <MoviesGridCard
//             category={name}
//             link={`/movies/${name.toLowerCase()}`}
//             key={count}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default TrendingMoviesWrapper;
