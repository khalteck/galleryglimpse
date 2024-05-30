import { useState } from "react";
import { IoImage } from "react-icons/io5"; // Importing image icon
import { useDispatch } from "react-redux";
import { displayImage } from "../../redux/features/imageExpandSlice";
import BtnPrimary from "../common/BtnPrrimary";
import PropTypes from "prop-types";

const ImageCard = ({ item }) => {
  const [hoverId, setHoverId] = useState(null); // State to track hovering

  const dispatch = useDispatch();

  return (
    <div
      onMouseOver={() => setHoverId(item?.id)} // Set hoverId when mouse enters
      onMouseOut={() => setHoverId(null)} // Reset hoverId when mouse leaves
      className="card relative flex"
      role="image"
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
      {/* Show button overlay if hoverId matches item.id */}
      {hoverId === item?.id && (
        <div className="card-popup-overlay center-flex quickview">
          {/* Button to view image */}
          <BtnPrimary
            type={"thumbnail"} // Type of button
            action={() => dispatch(displayImage(item))} // Dispatch action to display image
            title={"View image"} // Button title
          />
        </div>
      )}
    </div>
  );
};

export default ImageCard;

//define proptypes
ImageCard.propTypes = {
  item: PropTypes.object.isRequired,
};
