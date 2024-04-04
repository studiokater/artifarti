import { createApi } from "unsplash-js";

export const unsplashApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});
