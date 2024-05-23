import { BiSolidError } from "react-icons/bi"; // Importing error icon

const ErrorCard = () => {
  return (
    <div className="loader-message-card border border-primary/20">
      {/* Displaying the error icon */}
      <BiSolidError color={"#f28b82"} size={"40px"} />
      {/* Displaying the error message */}
      <p className="text-center opacity-60">
        Oops! An error occurred,
        <br />
        Check your connection!
      </p>
    </div>
  );
};

export default ErrorCard;
