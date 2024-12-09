import { number, string, z } from "zod";

export const searchParamsSchema = z.object({
  name: z.string(),
});

export const supportSchema = z.object({
  first_name: z
    .string()
    .min(3, { message: "Your first name must be at least 3 characters long" }),
  last_name: z
    .string()
    .min(3, { message: "Your last name must be at least 3 characters long" }),
  email: z.string().email(),
  message: z.string(),
  agree: z.boolean(),
});

export const registerSchema = z
  .object({
    first_name: z.string().min(3, {
      message: "Your first name must be at least 3 characters long",
    }),
    last_name: z
      .string()
      .min(3, { message: "Your last name must be at least 3 characters long" }),
    email: z.string().email(),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        "Must contain 8 characters, one uppercase, one lowercase, one number and one special character"
      ),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

export const loginSchema = z.object({
  email: z.string().email(),
  // .regex(/^[\w-\.]@([\w-]+\.)+[\w]{2,4}$/g, {
  //   message: "Please provide a vald email addres",
  // }),
  password: z.string(),
});

export const movieSchema = z.object({
  id: z.number(),
  original_name: z.string(),
  poster_path: z.string().url(),
  genre: z.string(),
  release_date: z.string().nullable().optional(),
  rating: z.number().optional(),
  seasons_count: z.number().optional(),
  type: z.enum(["movies", "series"]),
});

export const seriesSchema = movieSchema.merge(
  z.object({
    seasons_count: z.number(),
  })
);

export const moviesOverviewSchema = z.object({
  data: z.object({
    page: z.number(),
    results: z.array(movieSchema),
    total_pages: z.number(),
    total_results: z.number(),
    release_date: z.date().optional(),
  }),
});

export const genreSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const languageSchema = z.object({
  iso_639_1: z.string(),
  name: z.string(),
  english_name: z.string(),
});

export const seriesSeasonsSchema = z.object({
  seasons: z.array(
    z.object({
      id: z.number(),
      air_date: z.date(),
      overview: z.string(),
      name: z.string(),
      image: z.string().url(),
      episodes: z.array(
        z.object({
          id: z.number(),
          title: z.string(),
          overview: z.string(),
          runtime: z.number(),
          episode_number: z.number(),
          image: z.string().url(),
        })
      ),
    })
  ),
});

export const seriesInfoSchema = z.object({
  data: z.object({
    id: z.number(),
    genre: genreSchema,
    original_name: z.string(),
    overview: z.string(),
    poster_path: z.string().url(),
    likes: z.number(),
    dislikes: z.number(),
    adult: z.boolean(),
    release_date: z.date(),
    vote_count: z.number(),
    banner: z.string().url(),
    seasons: seriesSeasonsSchema,
  }),
});

export const userProfileInformation = z.object({
  image: z.string().optional(),
  id: z.string().uuid().optional(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
});

export const userReview = z.object({
  rating: z.string(),
  content: z.string(),
  id: z.string().uuid(),
  movie: z.object({
    id: z.number(),
    title: z.string(),
  }),
  user: z.object({
    name: z.string(),
  }),
});

export const userReviewContainer = z.array(userReview);

// extend the jwtpayload
export interface customJWTPayload {
  first_name: string;
  last_name: string;
  email: string;
  image: string;
  id: string;
}

export const userPreferences = z.object({
  genre: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
    })
  ),
});

export const searchSchema = z.object({
  name: z.string().min(3, {
    message: "Please provide a valid search term",
  }),
  category: z.enum(["movies", "series"]),
});

// export const seriesSearch;
