import React, { Suspense } from "react";
import SearchBar from "./searchBar";
import SearchResults from "./searchResults";

import { z } from "zod";
import { movieSchema } from "@/app/utils/definitions";
import { seriesSchema } from "@/app/utils/definitions";
import { verify } from "crypto";
import { HeadingOne } from "@/app/ui/headings/heading";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<Record<string, any>>;
}) => {
  const params = await searchParams;

  const newSearchParams = new URLSearchParams(params);
  const response = await fetch(
    `http://localhost:3000/api/search?${newSearchParams}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const result = await response.json();
  const { data } = result.message;

  const { results } = data;
  let verifyData;
  if (data.type === "movies") {
    verifyData = movieSchema.array().parse(results);
  } else {
    verifyData = seriesSchema.array().parse(results);
  }
  // const verifyData =

  return (
    <div className="space-y-10 mt-10">
      <HeadingOne text={`Showing results for: ${params.q}`} />
      <Suspense fallback={<div>Loading...</div>}>
        <SearchResults results={results} type={data.type} />
      </Suspense>
    </div>
  );
};

export default Page;
