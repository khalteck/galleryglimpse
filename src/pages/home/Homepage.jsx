import Header from "../../components/common/Header";
import DisplayContainer from "../../components/home/DisplayContainer";
import SearchContainer from "../../components/home/SearchContainer";
import ImagePopup from "../../components/home/ImagePopup";
import { useDispatch, useSelector } from "react-redux";
import {
  useFetchImagesQuery,
  useLazySearchImagesQuery,
} from "../../services/apiSlice";
import { useEffect, useState } from "react";
import {
  setAllImageData,
  setSearchedImagesData,
} from "../../redux/features/dataManagementSLice";
import ErrorCard from "../../components/home/ErrorCard";

const Homepage = () => {
  const dispatch = useDispatch();

  // Get the state for image expansion and limit from the Redux store
  const expand = useSelector((state) => state.imageExpand.value);
  const { limit } = useSelector((state) => state.dataManagement.value);

  // Local state for managing the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Handle changes in the search input field
  const handlesearchInput = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  // Local state to manage subsequent search loading status
  const [subsequentSearchLoading, setSubsequentSearchLoading] = useState(false);

  // Fetch all image data using the custom hook from the API slice
  const {
    data: allImageData,
    error: allImageError,
    isLoading: allImageLoading,
  } = useFetchImagesQuery(limit);

  // Lazy search query setup using the custom hook from the API slice
  const [
    triggerSearch,
    { data: searchData, error: searchError, isLoading: searchLoading },
  ] = useLazySearchImagesQuery();

  // Local state to manage the debounced search term
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  // Effect to dispatch actions when new data is fetched
  useEffect(() => {
    if (allImageData) {
      dispatch(setAllImageData(allImageData));
    }
    if (searchData) {
      dispatch(setSearchedImagesData(searchData));
    }
    setSubsequentSearchLoading(false);
  }, [searchData, allImageData]);

  // Effect to debounce the search input, only setting the debounced term if the length is greater than 2
  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm.length > 2) {
        setDebouncedSearchTerm(searchTerm);
      }
    }, 1800);

    // Reset search results if the search term is cleared
    if (searchTerm === "") {
      dispatch(setSearchedImagesData(null));
    }

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  // Effect to trigger search based on the debounced search term
  useEffect(() => {
    if (debouncedSearchTerm) {
      triggerSearch(debouncedSearchTerm);
      setSubsequentSearchLoading(true);
    }
  }, [debouncedSearchTerm, triggerSearch]);

  // Handle canceling the search, resetting the search term and search results
  const handleCancelSearch = () => {
    setSearchTerm("");
    dispatch(setSearchedImagesData(null));
  };

  return (
    <>
      <Header />
      <main className="">
        <SearchContainer
          searchTerm={searchTerm}
          handlesearchInput={handlesearchInput}
          handleCancelSearch={handleCancelSearch}
        />

        {/* Display the DisplayContainer component if there are no errors */}
        {(!allImageError || !searchError) && (
          <DisplayContainer
            searchTerm={searchTerm}
            allImageLoading={allImageLoading}
            searchLoading={searchLoading}
            subsequentSearchLoading={subsequentSearchLoading}
          />
        )}

        {/* Display an error card if there is an error */}
        {(allImageError || searchError) && (
          <div className="mt-10">
            <ErrorCard />
          </div>
        )}
      </main>

      {/* Display the ImagePopup component if the expand state is true */}
      {expand && <ImagePopup />}
    </>
  );
};

export default Homepage;
