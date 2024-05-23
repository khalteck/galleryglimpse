import { IoImage } from "react-icons/io5";

const BtnSecondary = ({ action, title, type, disabled }) => {
  return (
    <button onClick={action} disabled={disabled} className="btn-secondary">
      {title}
    </button>
  );
};

export default BtnSecondary;
