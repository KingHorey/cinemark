import { myAxios } from "@/middleware";
import { cookies } from "next/headers";

const getCookies = async () => {
  const userId = (await cookies()).get("_bingeBox-xSet-user-info_")?.value;
  const accessToken = (await cookies()).get("_session-bingebox-access")?.value;
  return {
    userId,
    accessToken,
  };
};

export const getUserInfo = async () => {
  const cookie = await getCookies();
  const { userId, accessToken } = cookie;
  const { id } = userId && JSON.parse(userId);

  try {
    const { data } = await myAxios.get(`user/information/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return {
      status: 200,
      data: data,
    };
  } catch (err: any) {
    console.error(err.message);
  }
};

export const getUserReviews = async () => {
  const cookie = await getCookies();
  const { userId, accessToken } = cookie;
  const { id } = userId && JSON.parse(userId);

  try {
    const { data } = await myAxios.get("review/all-my-reviews/", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return {
      status: 200,
      data: data,
    };
  } catch (err: any) {
    return {
      status: 400,
      data: "Unable to fetch user data",
    };
  }
};
