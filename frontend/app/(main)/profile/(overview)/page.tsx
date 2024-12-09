import React from "react";
import ProfileWrapper from "./profileWrapper";
import { getUserInfo } from "@/lib/data";
import { userProfileInformation } from "@/app/utils/definitions";

const Page = async () => {
  const userInfo = await getUserInfo();
  // const verifiedData = userProfileInformation.safeParse(userInfo?.data);

  return <ProfileWrapper user={userInfo?.data} />;
};

export default Page;
