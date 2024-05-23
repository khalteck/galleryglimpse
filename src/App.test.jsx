import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import Loader from "./components/common/Loader";
import { expect, it, test, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

//to test routes
test("App should render homepage component for the route '/", () => {
  const { container } = render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  expect(container.innerHTML).toBeDefined();
});

// to mock the lazy-loaded component with a delay
const MockHomepage = () => <div>Homepage Component</div>;

vi.mock("./pages/home/Homepage", () => ({
  default: MockHomepage,
}));

//to test lazy-loaded components display
test("Wait for the lazy-loaded component to be displayed", async () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </MemoryRouter>
  );

  await waitFor(() =>
    expect(screen.getByText(/homepage component/i)).toBeInTheDocument()
  );
});
