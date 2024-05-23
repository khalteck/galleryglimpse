import { BarLoader } from "react-spinners";
import LoaderMessageCard from "./LoaderMessageCard";

const Loader = () => {
  return (
    <div
      data-testid="loader"
      className="w-full h-[100dvh] fixed top-0 left-0 bg-[#121214] text-neutral-100 center-flex z-[100]"
    >
      <LoaderMessageCard />
    </div>
  );
};

export default Loader;
