import { useDispatch, useSelector } from "react-redux";
import Header from "../components/common/Header";
import DisplayContainer from "../components/home/DisplayContainer";
import SearchContainer from "../components/home/SearchContainer";
import { IoClose } from "react-icons/io5";
import { closeImage } from "../redux/features/imageExpandSlice";

const Homepage = () => {
  const expand = useSelector((state) => state.imageExpand.value);
  const dispatch = useDispatch();

  console.log("expand", expand);

  return (
    <>
      <Header />
      <main className="">
        <SearchContainer />

        <DisplayContainer />
      </main>

      {expand && (
        <div className="w-full h-screen fixed top-0 left-0 blurry expand bg-[#1f1e20]/60 py-[80px] flex flex-col items-center">
          <div
            onClick={() => dispatch(closeImage())}
            className="bg-[#1f1e20] rounded-full p-3 absolute top-3 left-[50%] translate-x-[-50%] border border-neutral-500 cursor-pointer"
          >
            <IoClose size={"20px"} color="white" />
          </div>
          <div className="w-[80%] max-w-[1500px] h-fit md:h-full relative bg-[#1f1e20] p-3 lg:p-5">
            <img
              alt=""
              src={expand?.imageURL}
              className="w-full h-auto md:h-full object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Homepage;
