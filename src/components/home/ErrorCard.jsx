import { BiSolidError } from "react-icons/bi";

const ErrorCard = () => {
  return (
    <div className="loader-message-card border border-primary/20">
      <BiSolidError color={"#f28b82"} size={"50px"} />
      <p className="text-center opacity-60">
        Oops! An error occurred,
        <br />
        Check your connection!
      </p>
    </div>
  );
};

export default ErrorCard;
