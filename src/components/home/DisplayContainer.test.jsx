import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import dataManagementReducer from "../../redux/features/dataManagementSLice";
import DisplayContainer from "./DisplayContainer";
import { expect, test } from "vitest";

const renderWithProviders = (ui, { reduxState } = {}) => {
  const store = configureStore({
    reducer: {
      dataManagement: dataManagementReducer,
    },
    preloadedState: reduxState,
  });
  return render(<Provider store={store}>{ui}</Provider>);
};

//to test loading state handling
test('shows a loading message "One moment please" before the data is fetched', () => {
  const initialState = {
    dataManagement: {
      value: {
        allImagesData: null,
        searchedImagesData: null,
      },
    },
  };

  renderWithProviders(
    <DisplayContainer
      searchTerm=""
      allImageLoading={true}
      searchLoading={false}
      subsequentSearchLoading={false}
    />,
    { reduxState: initialState }
  );

  expect(screen.getByText(/One moment please/i)).toBeInTheDocument();
});

//to test display of 15 image cards on initial load
test("displays a list of 15 ImageCard components in a grid on initial page load", () => {
  const mockProducts = Array.from({ length: 15 }, (_, index) => ({
    id: index,
    name: `Image ${index}`,
  }));

  const initialState = {
    dataManagement: {
      value: {
        allImagesData: { products: mockProducts },
        searchedImagesData: null,
      },
    },
  };

  renderWithProviders(
    <DisplayContainer
      searchTerm=""
      allImageLoading={false}
      searchLoading={false}
      subsequentSearchLoading={false}
    />,
    { reduxState: initialState }
  );

  const imageCards = screen.getAllByRole("image");
  expect(imageCards).toHaveLength(15);
});
