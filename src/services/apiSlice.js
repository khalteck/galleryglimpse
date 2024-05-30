// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a base URL for the API, using an environment variable
const baseUrl = import.meta.env.VITE_API_BASE_URL;

// Create an API service
export const imageApi = createApi({
  reducerPath: "imageApi", // Unique key to identify the API in the Redux store
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl, // Set the base URL for all requests
  }),
  endpoints: (builder) => ({
    // Define a query endpoint to fetch images with a limit
    fetchImages: builder.query({
      query: (skip) => `products?limit=15${skip ? `&skip=${skip}` : ""}`,
    }),
    // Define a query endpoint to search for images by title
    searchImages: builder.query({
      query: (title) => `products/search?q=${title}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const { useFetchImagesQuery, useLazySearchImagesQuery } = imageApi;
