import { BarLoader } from "react-spinners";

const LoaderMessageCard = () => {
  return (
    <div className="loader-message-card">
      <p className="text-center ">
        One moment please, <br />
        we're untangling the pixels.
      </p>
      <BarLoader color={"#fff"} size={30} />
    </div>
  );
};

export default LoaderMessageCard;
