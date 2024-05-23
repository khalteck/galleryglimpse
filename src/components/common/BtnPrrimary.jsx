import { IoImage } from "react-icons/io5"; // Importing image icon

const BtnPrimary = ({ action, title, type }) => {
  // Conditionally render icon based on the button type
  const icon = type === "thumbnail" ? <IoImage size={"20px"} /> : null;

  return (
    // Button component with onClick action and CSS class
    <button onClick={action} className="btn-primary">
      {/* Render the icon if available */}
      {icon}
      {/* Render the button title */}
      {title}
    </button>
  );
};

export default BtnPrimary;
