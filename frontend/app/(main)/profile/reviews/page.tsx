import UserRatings from "@/app/ui/profile/ratings";
import React from "react";

import axios from "axios";

import { useState, useEffect } from "react";
import { userReview, userReviewContainer } from "@/app/utils/definitions";
import { z } from "zod";

import { getUserReviews } from "@/lib/data";

const Page = async () => {
  const userReviews = await getUserReviews();
  const { data } = userReviews;
  return (
    <div>
      <UserRatings reviews={data.data} />
    </div>
  );
};

export default Page;
