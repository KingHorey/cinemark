import { myAxios } from "@/middleware";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const params = url.searchParams;

  // console.log("URL: ", params);

  const category = params.get("category");
  const query = params.get("q");

  switch (category) {
    case "movies":
      try {
        const { data } = await myAxios.get("/movies/", {
          params,
        });
        return NextResponse.json({
          status: 200,
          message: data,
        });
      } catch {
        return NextResponse.json({
          status: 404,
          message: "No movie found",
        });
      }
    case "series":
      try {
        const { data } = await myAxios.get("/series/", { params });
        return NextResponse.json({
          status: 200,
          message: data,
        });
      } catch {
        return NextResponse.json({
          status: 404,
          message: "No series found",
        });
      }
  }
}
