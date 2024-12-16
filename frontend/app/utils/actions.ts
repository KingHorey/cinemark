"use server";

import { myAxios } from "@/middleware";

import { cookies } from "next/headers";

import { jwtDecode } from "jwt-decode";

import {
  registerSchema,
  loginSchema,
  userProfileInformation,
  userPreferences,
} from "./definitions";
import { z } from "zod";

// import { signIn } from "@/auth";
// import { AuthError } from "next-auth";
// import { getToken } from "next-auth/jwt";

// import { redirect } from "next/navigation";
// import { revalidatePath } from "next/cache";

import { customJWTPayload } from "./definitions";
import { revalidatePath } from "next/cache";

export const handleRegistration = async (
  data: z.infer<typeof registerSchema>
) => {
  try {
    await myAxios.post("/user/register/", JSON.stringify(data));
    return {
      status: 201,
      message: "Registration successful",
    };
  } catch (err: any) {
    console.error(err.message, err.response);
    return {
      status: 400,
      message: err.response.data.data.email[0],
    };
  }
};

export const handleLogin = async (formData: z.infer<typeof loginSchema>) => {
  try {
    const cookieStore = await cookies();

    const { data } = await myAxios.post("/user/token/", {
      email: formData.email,
      password: formData.password,
    });

    cookieStore.set("_session-bingebox-access", data.access, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 60 * 30,
      secure: process.env.NODE_ENV === "production",
    });

    cookieStore.set("_session-bingebox-refresh", data.refresh, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24,
      secure: process.env.NODE_ENV === "production",
    });

    const decoded_token: customJWTPayload = jwtDecode(data.access);
    cookieStore.set(
      "_bingeBox-xSet-user-info_",
      JSON.stringify(decoded_token),
      {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        expires: new Date(Date.now() + 7 * 30 * 60 * 60 * 3600),
      }
    );

    const { first_name, last_name, email, image, id } = decoded_token;
    return {
      status: 200,
      message: "Successfully logged in",
      user: { first_name, last_name, email, image, id },
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        status: 400,
        message: "Invalid credentials.",
      };
    }
  }
};

export const handleUpdateUserInformation = async (
  formData: z.infer<typeof userProfileInformation>,
  id: string
) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("_session-bingebox-access")?.value;
  try {
    await myAxios.put(
      `user/update-information/${id}/`,
      JSON.stringify(formData),
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    revalidatePath("/profile");
    return {
      status: 200,
      message: "Profile successfully updated",
    };
  } catch (err: any) {
    console.error("===> ", err.message);
    return {
      status: 400,
      message: Object.values(err.response.data.data).flat(),
    };
  }
};

export const handleDelete = async (id: string) => {
  const cookieStore = await cookies();
  const access = cookieStore.get("_session-bingebox-access")?.value;
  try {
    await myAxios.delete(`review/actions/${id}`, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    revalidatePath("/profile/reviews");
  } catch (err: any) {
    console.error(err.message);
  }
};

// handle token refresh

export const handleTokenRefresh = async (drefresh: string) => {
  try {
    const cookieStore = await cookies();
    const refresh = { refresh: drefresh };
    // const { data } = await fetch(
    //   "http://localhost:8000/api/user/token/refresh/",
    //   {
    //     method: "POST",
    //     body: JSON.stringify(refresh),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    const { data } = await myAxios.post(
      "/user/token/refresh/",
      JSON.stringify(refresh),
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Length": JSON.stringify(refresh).length,
        },
      }
    );

    cookieStore.set("_session-bingebox-access", data.access, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 30,
      secure: false,
      path: "/",
    });
    cookieStore.set("_session-bingebox-refresh", data.refresh, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
      secure: false,
      path: "/",
    });
    const decoded_token: customJWTPayload = jwtDecode(data.access);
    cookieStore.set(
      "_bingeBox-xSet-user-info_",
      JSON.stringify(decoded_token),
      {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        expires: new Date(Date.now() + 7 * 30 * 60 * 60 * 3600),
        path: "/",
      }
    );
    return {
      status: 200,
    };
  } catch {
    return {
      status: 400,
    };
  }
};

export const handleReviewUpdate = async (
  prevState: any,
  formData: FormData
) => {
  const cookieStore = await cookies();
  const access = cookieStore.get("_session-bingebox-access")?.value;

  try {
    await myAxios.put(`review/actions/${formData.get("id")}`, formData, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    revalidatePath("/profile/reviews");
    return {
      status: 200,
      message: "successfully updated review",
    };
  } catch {
    return {
      status: 400,
    };
  }
};

export const getUserPreferences = async () => {
  const cookieStore = await cookies();
  const access = cookieStore.get("_session-bingebox-access")?.value;
  try {
    const { data } = await myAxios.get("preferences/", {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    return {
      status: 200,
      message: data,
    };
  } catch {
    return {
      status: 400,
      message: "Unable to fetch data",
    };
  }
};

export const updateUserPreferences = async (
  formData: z.infer<typeof userPreferences>
) => {
  const cookieStore = await cookies();
  console.log("Form Data: ", formData);
  const access = cookieStore.get("_session-bingebox-access")?.value;
  try {
    const { data } = await myAxios.post("preferences/", formData, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    return {
      status: 200,
      message: data,
    };
  } catch {
    return {
      status: 400,
      message: "Unable to fetch data",
    };
  }
};
