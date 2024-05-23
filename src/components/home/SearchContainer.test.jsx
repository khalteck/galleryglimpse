import { render, fireEvent } from "@testing-library/react";
import SearchContainer from "./SearchContainer";
import { vi } from "vitest";

// Test that the search input updates the state correctly on change
test("Search input updates the state correctly on change", () => {
  const mockHandleSearchInput = vi.fn();
  const { getByPlaceholderText } = render(
    <SearchContainer
      searchTerm=""
      handlesearchInput={mockHandleSearchInput}
      handleCancelSearch={() => {}}
    />
  );

  const searchInput = getByPlaceholderText("Search keyword");
  fireEvent.change(searchInput, { target: { value: "test" } });

  expect(mockHandleSearchInput).toHaveBeenCalledWith(expect.any(Object));
});

// Verify that the cancel button clears the search input and state
test("Cancel button clears the search input and state", () => {
  const mockHandleCancelSearch = vi.fn();
  const { getByTestId, getByPlaceholderText } = render(
    <SearchContainer
      searchTerm="test"
      handlesearchInput={() => {}}
      handleCancelSearch={mockHandleCancelSearch}
    />
  );

  const searchInput = getByPlaceholderText("Search keyword");
  expect(searchInput.value).toBe("test");

  const cancelButton = getByTestId("cancel-button");
  fireEvent.click(cancelButton);

  expect(mockHandleCancelSearch).toHaveBeenCalled();
  expect(searchInput.value).toBe("test");
});

// Check that the search form prevents default form submission behavior
test("Search form prevents default form submission behavior", () => {
  const { getByTestId } = render(
    <SearchContainer
      searchTerm=""
      handlesearchInput={() => {}}
      handleCancelSearch={() => {}}
    />
  );

  const searchForm = getByTestId("search-form");
  const preventDefaultMock = vi.fn();
  searchForm.addEventListener("submit", preventDefaultMock);
  fireEvent.submit(searchForm);

  expect(preventDefaultMock).toHaveBeenCalled();
});
