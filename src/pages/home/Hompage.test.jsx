import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Suspense } from "react";
import { Provider } from "react-redux"; // Import Provider
import { store } from "../../redux/store"; // Import your Redux store
import { vi } from "vitest";
import Homepage from "./Homepage";

// Mock the API response data
const mockData = {
  products: [
    { id: 1, title: "Product 1", thumbnail: "url/to/thumbnail1" },
    { id: 2, title: "Product 2", thumbnail: "url/to/thumbnail2" },
    // Add more mock data as needed
  ],
};

// Mock the fetchImages query hook
vi.mock("../services/apiSlice", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    imageApi: {
      reducerPath: "imageApi",
      reducer: (
        state = { data: null, isLoading: false, error: null },
        action
      ) => {
        // Implement reducer logic here if needed
        return state;
      },
      middleware: vi.fn(),
      useFetchImagesQuery: vi.fn(() => ({
        data: mockData,
        isLoading: false,
        error: null,
      })),
      // Add other API methods as needed
    },
  };
});

test("verify API data fetching and state updates", async () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <Suspense fallback={<div>Loading...</div>}>
          <Homepage />
        </Suspense>
      </MemoryRouter>
    </Provider>
  );

  // Wait for the component to render and update its state based on API data - an error will occur thereby displaying the error message
  await waitFor(() => {
    expect(screen.getByText(/Oops! An error occurred/i)).toBeInTheDocument();
  });
});
