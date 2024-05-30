import { useDispatch, useSelector } from "react-redux";
import ImageCard from "./ImageCard";
import { BarLoader, ClipLoader } from "react-spinners";
import LoaderMessageCard from "../common/LoaderMessageCard";
import BtnSecondary from "../common/BtnSecondary";
import { increaseLimit } from "../../redux/features/dataManagementSLice";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const DisplayContainer = ({
  searchTerm,
  allImageLoading,
  searchLoading,
  subsequentSearchLoading,
}) => {
  // Accessing state data from the Redux store
  const { allImagesData, searchedImagesData } = useSelector(
    (state) => state.dataManagement.value
  );

  const dispatch = useDispatch();

  // Determine which data to display based on whether there's a search term
  const data = searchTerm ? searchedImagesData : allImagesData;

  // Local state to manage the loading status for loading more images
  const [loadingMore, setLoadingMore] = useState(false);

  // Function to handle increasing the limit for loading more images
  function handleLimitIncrease() {
    setLoadingMore(true);
    dispatch(increaseLimit());
  }

  // Effect to reset the loading state after data is fetched
  useEffect(() => {
    setLoadingMore(false);
  }, [allImagesData]);

  return (
    <section className="w-full my-10">
      <div>
        {/* Display appropriate heading based on search term */}
        {searchTerm ? (
          <>
            <h2>Filter results ({data?.products?.length || 0})</h2>
          </>
        ) : (
          <h2>All Images</h2>
        )}
      </div>

      {/* Display images if not loading */}
      {!allImageLoading && !searchLoading && (
        <div className="grid-container mt-10">
          {data?.products?.map((item, index) => {
            return <ImageCard key={index} item={item} />;
          })}
        </div>
      )}

      {/* Show 'Load more' button if not searching */}
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
              disabled={loadingMore}
            />
          </div>
        </div>
      )}

      {/* Show loading spinner if any loading state is true */}
      {(allImageLoading || searchLoading || subsequentSearchLoading) && (
        <div className="w-full h-[300px] border-primary/20 border rounded-lg flex center-flex mt-10">
          <LoaderMessageCard />
        </div>
      )}
    </section>
  );
};

export default DisplayContainer;

//define proptypes
DisplayContainer.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  allImageLoading: PropTypes.bool.isRequired,
  searchLoading: PropTypes.bool.isRequired,
  subsequentSearchLoading: PropTypes.bool.isRequired,
};
