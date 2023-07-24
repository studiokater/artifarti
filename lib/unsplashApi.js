import { createApi } from "unsplash-js";

export const unsplashApi = createApi({
  accessKey: process.env.API_ACCESS_KEY,
});