import { BarLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-full h-[100dvh] fixed top-0 left-0 bg-[#121214] text-neutral-100 flex justify-center items-center z-[100]">
      <div className="md:w-1/3 w-[80%] text-[.95rem] md:text-[1.2rem] p-[25px] md:py-[20px] rounded-2xl flex flex-col gap-4 justify-center items-center">
        <p className="text-center ">
          One moment please, <br />
          we're untangling the pixels.
        </p>
        <BarLoader color={"#fff"} size={30} />
      </div>
    </div>
  );
};

export default Loader;
