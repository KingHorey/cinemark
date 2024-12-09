import { CardContent, Card, CardHeader } from "@/components/ui/card";
import React from "react";

import { TrashIcon, PenIcon } from "lucide-react";
import Rating from "../general/rating";
import EditRating from "./editRating";
import DeleteRating from "./deleteRating";

import { userReview } from "@/app/utils/definitions";
import { z } from "zod";

// props should be the rating id, content, movie and rating
const UserRatings = ({
  reviews,
}: {
  reviews: z.infer<typeof userReview>[] | undefined;
}) => {
  return (
    <main className="space-y-5">
      {reviews && reviews.length > 0 ? (
        reviews.map((review: z.infer<typeof userReview>, index: number) => (
          <Card
            className="rounded-lg border bg-black border-gray-400/30 w-full text-white"
            key={index}
          >
            <CardHeader className="flex justify-between flex-row items-center">
              <div className="flex gap-x-5 items-center">
                <span>You rated {review.movie.title} </span>
                <div className="flex gap-x-2 items-center">
                  <Rating rating={Number(review.rating)} /> stars
                </div>
              </div>
              <div className="flex space-x-5">
                <EditRating
                  id={review.id}
                  content={review.content}
                  title={review.movie.title}
                  rating={Number(review.rating)}
                  movieId={review.movie.id}
                />
                <DeleteRating id={review.id} />
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-white/80">{review.content}</p>
            </CardContent>
          </Card>
        ))
      ) : (
        <p className="text-white xs:text-base md:text-xl lg:text-3xl text-center ">
          No Reviews made so far
        </p>
      )}
    </main>
  );
};

export default UserRatings;
