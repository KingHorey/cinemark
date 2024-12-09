"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { PencilIcon } from "lucide-react";

import React, { useState, useActionState, useEffect } from "react";
import Rating from "../general/rating";
import { Button } from "@/components/ui/button";

import { handleReviewUpdate } from "@/app/utils/actions";
import { toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";

// pass the rating id
const EditRating = ({
  id,
  title,
  content,
  rating,
  movieId,
}: {
  id: string;
  title: string;
  content: string;
  rating: number;
  movieId: number | string;
}) => {
  const [modal, setShowModal] = useState<boolean>(false);
  return (
    <>
      {modal ? (
        <ShowModal
          setShowModal={setShowModal}
          id={id}
          title={title}
          content={content}
          rating={rating}
          movieId={movieId}
        />
      ) : (
        <PencilIcon
          className="hover:text-white text-white/80 transition-colors duration-300 cursor-pointer"
          size={18}
          onClick={() => setShowModal(true)}
        />
      )}
    </>
  );
};

export default EditRating;

//

const ShowModal = ({
  setShowModal,
  id,
  title,
  content,
  rating,
  movieId,
}: {
  setShowModal: (id: boolean) => void;
  id: string;
  title: string;
  content: string;
  rating: number;
  movieId: number | string;
}) => {
  const [state, formAction, isPending] = useActionState(
    handleReviewUpdate,
    null
  );
  useEffect(() => {
    if (state?.status === 200) {
      toast.success(state?.message);
      setShowModal(false);
    }
  }, [state?.status]);
  return (
    <div className="absolute w-screen min-h-screen backdrop-blur-lg top-0 left-0 z-[999] flex justify-center items-center">
      <Card className="bg-offBlack border-red/60 text-white lg:w-3/5">
        <CardHeader className="relative">
          <CardTitle>Edit review for: {title}</CardTitle>
        </CardHeader>
        <CardContent className="relative">
          <form className="space-y-5 bg-offBlack relative" action={formAction}>
            <input type="text" className="hidden" name="id" value={id} />
            <input
              type="movie"
              className="hidden"
              name="movie"
              value={movieId}
            />

            <Select name="rating">
              <SelectTrigger className="w-fit">
                <SelectValue placeholder="Select Rating" />
              </SelectTrigger>
              <SelectContent className="z-[999] bg-offBlack hover:bg-offBlack w-1/2">
                {/* <SelectGroup> */}
                <SelectItem className="duration-200 transition-all" value="1">
                  <Rating rating={1} />
                </SelectItem>
                <SelectItem className="duration-200 transition-all" value="1.5">
                  <Rating rating={1.5} />
                </SelectItem>
                <SelectItem className="duration-200 transition-all" value="2">
                  <Rating rating={2} />
                </SelectItem>
                <SelectItem className="duration-200 transition-all" value="2.5">
                  <Rating rating={2.5} />
                </SelectItem>
                <SelectItem className="duration-200 transition-all" value="3">
                  <Rating rating={3} />
                </SelectItem>
                <SelectItem className="duration-200 transition-all" value="3.5">
                  <Rating rating={3.5} />
                </SelectItem>
                <SelectItem className="duration-200 transition-all" value="4">
                  <Rating rating={4} />
                </SelectItem>
                <SelectItem className="duration-200 transition-all" value="4.5">
                  <Rating rating={4.5} />
                </SelectItem>
                <SelectItem className="duration-200 transition-all" value="5">
                  <Rating rating={5} />
                </SelectItem>
                {/* </SelectGroup> */}
              </SelectContent>
            </Select>
            <textarea
              className="border-2 border-white/30 bg-mainBlack/40  rounded-md p-4 w-full focus:outline-none mt-5"
              defaultValue={content}
              name="content"
            />
            <div className="flex space-x-5 xs:flex-col md:flex-row justify-between items-center">
              <Button
                className="text-black w-full p-5 bg-white/80 hover:bg-white duration-300 transition-all border border-black font-semibold"
                variant="outline"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </Button>
              <Button
                className="bg-red/80 w-full hover:bg-red transition-colors duration-300 text-white rounded-md p-5 font-semibold"
                disabled={isPending}
              >
                {isPending ? <ThreeDots color="white" /> : "Update Review"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
