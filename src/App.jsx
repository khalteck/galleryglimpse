import "./index.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/common/Loader";

//code splitting - dynamic imports
const Homepage = lazy(() => import("./pages/Homepage"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
