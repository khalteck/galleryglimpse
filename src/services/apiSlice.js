// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const imageApi = createApi({
  reducerPath: "imageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (builder) => ({
    fetchImages: builder.query({
      query: (limit) => `products?limit=${limit}`,
    }),
    searchImages: builder.query({
      query: (title) => `products/search?q=${title}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useFetchImagesQuery, useLazySearchImagesQuery } = imageApi;
