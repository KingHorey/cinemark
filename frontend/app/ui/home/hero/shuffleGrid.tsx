"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import WatchMovies from "./watchMovies";

const ShuffleHero = () => {
  return (
    <section className="max-w-screen grid grid-cols-1 md:grid-cols-2 items-center gap-8 min-w-screen min-h-screen max-h-screen  top-0 overflow-x-hidden">
      <ShuffleGrid />
      <div className="absolute bottom-16 left-0 right-0 text-center z-[999] flex flex-col gap-y-4 w-5/6 mx-auto items-center justify-center">
        <h1 className="text-white sm:text-sm md:text-2xl lg:text-5xl font-bold">
          The Best Streaming Experience
        </h1>
        <p className="text-gray-400 lg:text-base">
          Cinemark is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With Cinemark, you can
          enjoy a wide variety of content, including the latest blockbusters,
          classic movies, popular TV shows, and more. You can also create your
          own watchlists, so you can easily find the content you want to watch.
        </p>
        <WatchMovies />
      </div>
    </section>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/images/hero/john-wick.jpg",
  },
  {
    id: 2,
    src: "/images/hero/deadpool-wolverine.jpg",
  },
  {
    id: 3,
    src: "/images/hero/the-gray-man.jpg",
  },
  {
    id: 4,
    src: "/images/hero/ant-man.jpg",
  },
  {
    id: 5,
    src: "/images/hero/jumanji.jpg",
  },
  {
    id: 6,
    src: "/images/hero/avengers.jpg",
  },
  {
    id: 7,
    src: "/images/hero/black-panther.jpg",
  },
  {
    id: 8,
    src: "/images/hero/got.jpg",
  },
  {
    id: 9,
    src: "/images/hero/prison-break.jpg",
  },
  {
    id: 10,
    src: "/images/hero/lord-of-the-rings.jpg",
  },
  {
    id: 11,
    src: "/images/hero/money-heist.jpg",
  },
  {
    id: 12,
    src: "/images/hero/thor.jpg",
  },
  {
    id: 13,
    src: "/images/hero/venom.jpg",
  },

  {
    id: 14,
    src: "/images/hero/suits.jpg",
  },
  {
    id: 15,
    src: "/images/hero/stranger-things.jpg",
  },
  {
    id: 16,
    src: "/images/hero/sherlock.jpg",
  },
  {
    id: 17,
    src: "/images/hero/breaking-bad.jpg",
  },
  {
    id: 18,
    src: "/images/hero/the-last-of-us.jpg",
  },
  {
    id: 19,
    src: "/images/hero/lost.jpg",
  },
  {
    id: 20,
    src: "/images/hero/lisabi.jpg",
  },
  {
    id: 21,
    src: "/images/hero/alita.jpg",
  },
  {
    id: 22,
    src: "/images/hero/supacell.jpg",
  },
  {
    id: 23,
    src: "/images/hero/fast-n-furious.jpg",
  },
  {
    id: 24,
    src: "/images/hero/gt-max.jpg",
  },
  {
    id: 25,
    src: "/images/hero/mission-impossible.jpg",
  },
  {
    id: 26,
    src: "/images/hero/mr-plankton.jpg",
  },
  {
    id: 27,
    src: "/images/hero/harry.jpg",
  },
  {
    id: 28,
    src: "/images/hero/avatar.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-sm"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 10000);
  };

  return (
    <div className="grid xs:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 h-full w-screen gradient-mask-t-50-d absolute top-0 opacity-40 left-0">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
