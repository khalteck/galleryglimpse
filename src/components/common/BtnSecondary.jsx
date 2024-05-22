import { IoImage } from "react-icons/io5";

const BtnSecondary = ({ action, title, type }) => {
  const icon = type === "load" ? <IoImage size={"20px"} /> : "";
  return (
    <button onClick={action} className="btn-secondary">
      {/* {icon} */}
      {title}
    </button>
  );
};

export default BtnSecondary;
