import { useDispatch, useSelector } from "react-redux";
import ImageCard from "./ImageCard";
import { BarLoader, ClipLoader } from "react-spinners";
import LoaderMessageCard from "../common/LoaderMessageCard";
import BtnSecondary from "../common/BtnSecondary";
import { increaseLimit } from "../../redux/features/dataManagementSLice";
import { useEffect, useState } from "react";

const DisplayContainer = ({ searchTerm, allImageLoading, searchLoading }) => {
  const { allImagesData, searchedImagesData } = useSelector(
    (state) => state.dataManagement.value
  );

  const dispatch = useDispatch();

  const data = searchTerm ? searchedImagesData : allImagesData;

  const [loadingMore, setLoadingMore] = useState(false);

  function handleLimitIncrease() {
    setLoadingMore(true);
    dispatch(increaseLimit());
  }

  useEffect(() => {
    setLoadingMore(false);
  }, [allImagesData]);

  //   console.log("searchLoading", searchLoading);

  return (
    <section className="w-full my-10">
      <div>
        {searchTerm ? (
          <>
            <h2>Filter results ({data?.products?.length || 0})</h2>
          </>
        ) : (
          <h2>Images</h2>
        )}
      </div>

      {!allImageLoading && !searchLoading && (
        <div className="grid-container mt-10">
          {data?.products?.map((item, index) => {
            return <ImageCard key={index} item={item} />;
          })}
        </div>
      )}

      {data && !searchTerm && (
        <div className="mt-10">
          {loadingMore && (
            <div className="center-flex mb-5">
              <ClipLoader color="#f28b82" size={"50px"} />
            </div>
          )}
          <div className="center-flex">
            <BtnSecondary
              type={"load"}
              action={handleLimitIncrease}
              title={"Load more"}
            />
          </div>
        </div>
      )}
      <>
        {(allImageLoading || searchLoading) && (
          <div className="w-full h-[300px] border-primary/20 border rounded-lg flex center-flex mt-10">
            <LoaderMessageCard />
          </div>
        )}
      </>
    </section>
  );
};

export default DisplayContainer;
