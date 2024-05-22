import { CgSearch } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const SearchContainer = ({
  searchTerm,
  handlesearchInput,
  handleCancelSearch,
}) => {
  return (
    <section className="w-full">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full lg:w-[50%] rounded-md border border-neutral-500/50 flex"
      >
        <div className="w-12 center-flex">
          <CgSearch size={"25px"} color="#737373" />
        </div>
        <input
          type="text"
          id="search"
          placeholder="Search keyword"
          value={searchTerm}
          onChange={handlesearchInput}
          className="w-full pr-3 py-3 outline-none bg-transparent placeholder:text-neutral-500"
        />
        {searchTerm && (
          <div
            onClick={handleCancelSearch}
            className="bg-[#1f1e20] rounded-md w-14 center-flex cursor-pointer"
          >
            <IoClose size={"20px"} color="white" />
          </div>
        )}
      </form>
      <small className="opacity-70">
        Please enter at least 3 characters to search...
      </small>
    </section>
  );
};

export default SearchContainer;
