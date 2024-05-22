import { IoImage } from "react-icons/io5";

const BtnPrimary = ({ action, title, type }) => {
  const icon = type === "thumnail" ? <IoImage size={"20px"} /> : "";
  return (
    <button onClick={action} className="btn-primary">
      {icon}
      {title}
    </button>
  );
};

export default BtnPrimary;
