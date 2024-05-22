import { IoClose } from "react-icons/io5";
import { closeImage } from "../../redux/features/imageExpandSlice";
import { useDispatch, useSelector } from "react-redux";

const ImagePopup = () => {
  const expand = useSelector((state) => state.imageExpand.value);
  const dispatch = useDispatch();

  return (
    <div className="w-full h-screen fixed top-0 left-0 blurry expand bg-[#1f1e20]/80 py-[80px] flex flex-col items-center overflow-y-auto">
      <div
        onClick={() => dispatch(closeImage())}
        className="bg-[#1f1e20] rounded-full p-3 absolute top-3 left-[50%] translate-x-[-50%] border border-neutral-500 cursor-pointer"
      >
        <IoClose size={"20px"} color="white" />
      </div>
      <div className="w-[90%] md:w-[80%] max-w-[1500px] h-fit md:h-full relative bg-[#1f1e20] p-3 lg:p-5">
        <img
          alt={`image-${expand?.id}`}
          src={expand?.thumbnail}
          className="w-full h-auto md:h-full object-contain"
        />
      </div>
    </div>
  );
};

export default ImagePopup;
