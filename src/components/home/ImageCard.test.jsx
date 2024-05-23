import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import ImageCard from "./ImageCard";
import imageExpandReducer, {
  displayImage,
} from "../../redux/features/imageExpandSlice";
import { vi, expect, test } from "vitest";

// Helper function to render with Redux provider
const renderWithProviders = (ui, { reduxState } = {}) => {
  const store = configureStore({
    reducer: {
      imageExpand: imageExpandReducer,
    },
    preloadedState: reduxState,
  });
  return render(<Provider store={store}>{ui}</Provider>);
};

const mockDispatch = vi.fn();
// Mock react-redux
vi.mock("react-redux", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useDispatch: () => mockDispatch,
  };
});

const mockItem = {
  id: 1,
  title: "Test Image",
  thumbnail: "test-thumbnail.jpg",
};

test("displays an image correctly", () => {
  renderWithProviders(<ImageCard item={mockItem} />);

  const imageElement = screen.getByRole("img");
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute("src", "test-thumbnail.jpg");
  expect(imageElement).toHaveAttribute("alt", "iamge 1");
});

test('calls displayImage action when "View image" button is clicked', () => {
  renderWithProviders(<ImageCard item={mockItem} />);

  // Simulate mouse over to show the button
  fireEvent.mouseOver(screen.getByRole("image"));

  // Click the "View image" button
  const buttonElement = screen.getByRole("button", { name: "View image" });
  fireEvent.click(buttonElement);

  // Check if dispatch is called with the correct action
  expect(mockDispatch).toHaveBeenCalledWith(displayImage(mockItem));
});
