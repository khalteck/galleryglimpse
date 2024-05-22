import { useState } from "react";
import { IoImage } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { displayImage } from "../../redux/features/imageExpandSlice";
import BtnPrimary from "../common/BtnPrrimary";

const ImageCard = ({ item }) => {
  const [hoverId, setHoverId] = useState(null);

  const dispatch = useDispatch();
  return (
    <div
      onMouseOver={() => setHoverId(item?.id)}
      onMouseOut={() => setHoverId(null)}
      className="card relative flex"
    >
      <img
        alt="iamge 1"
        src={item?.thumbnail}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="card-overlay p-3 flex flex-col justify-end">
        <div className="w-full flex gap-2 items-center">
          <div className="bg-secondary w-2 h-2 rounded-full"></div>
          <p className="font-medium">{item?.title}</p>
        </div>
      </div>
      {hoverId === item?.id && (
        <div className="card-popup-overlay center-flex quickview">
          <BtnPrimary
            type={"thumnail"}
            action={() => dispatch(displayImage(item))}
            title={"View image"}
          />
        </div>
      )}
    </div>
  );
};

export default ImageCard;
