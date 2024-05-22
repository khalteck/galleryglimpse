import Header from "../components/common/Header";
import DisplayContainer from "../components/home/DisplayContainer";
import SearchContainer from "../components/home/SearchContainer";
import ImagePopup from "../components/home/ImagePopup";
import { useDispatch, useSelector } from "react-redux";
import {
  useFetchImagesQuery,
  useLazySearchImagesQuery,
} from "../services/apiSlice";
import { useEffect, useState } from "react";
import {
  setAllImageData,
  setSearchedImagesData,
} from "../redux/features/dataManagementSLice";
import ErrorCard from "../components/home/ErrorCard";

const Homepage = () => {
  const dispatch = useDispatch();

  const expand = useSelector((state) => state.imageExpand.value);

  const { limit } = useSelector((state) => state.dataManagement.value);

  const [searchTerm, setSearchTerm] = useState("");

  const handlesearchInput = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  //to fetch images data
  const {
    data: allImageData,
    error: allImageError,
    isLoading: allImageLoading,
  } = useFetchImagesQuery(limit);

  const [
    triggerSearch,
    { data: searchData, error: searchError, isLoading: searchLoading },
  ] = useLazySearchImagesQuery();

  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useEffect(() => {
    if (allImageData) {
      dispatch(setAllImageData(allImageData));
    }
    if (searchData) {
      dispatch(setSearchedImagesData(searchData));
    }
  }, [searchData, allImageData]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm.length > 2) {
        setDebouncedSearchTerm(searchTerm);
      }
    }, 1800);

    if (searchTerm === "") {
      dispatch(setSearchedImagesData(null));
    }

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      triggerSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, triggerSearch]);

  const handleCancelSearch = () => {
    setSearchTerm("");
    dispatch(setSearchedImagesData(null));
  };

  //   console.log("searchError", searchError);

  return (
    <>
      <Header />
      <main className="">
        <SearchContainer
          searchTerm={searchTerm}
          handlesearchInput={handlesearchInput}
          handleCancelSearch={handleCancelSearch}
        />

        {(!allImageError || !searchError) && (
          <DisplayContainer
            searchTerm={searchTerm}
            allImageLoading={allImageLoading}
            searchLoading={searchLoading}
          />
        )}

        {(allImageError || searchError) && (
          <div className="mt-10">
            <ErrorCard />
          </div>
        )}
      </main>

      {expand && <ImagePopup />}
    </>
  );
};

export default Homepage;
