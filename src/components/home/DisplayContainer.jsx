import ImageCard from "./ImageCard";
import data from "../../data/mockImageData.json";

const DisplayContainer = () => {
  return (
    <section className="w-full mt-10">
      <h2>Images</h2>

      <div className="grid-container mt-10">
        {data?.map((item, index) => {
          return <ImageCard key={index} item={item} />;
        })}
      </div>
    </section>
  );
};

export default DisplayContainer;
