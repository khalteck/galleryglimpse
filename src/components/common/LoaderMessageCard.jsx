import { BarLoader } from "react-spinners";

const LoaderMessageCard = () => {
  return (
    <div className="loader-message-card">
      <p className="text-center opacity-80">
        One moment please, <br />
        we're untangling the pixels.
      </p>
      <BarLoader color={"#f28b82"} size={30} />
    </div>
  );
};

export default LoaderMessageCard;
