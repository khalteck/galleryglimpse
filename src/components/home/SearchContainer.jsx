import { CgSearch } from "react-icons/cg"; // Importing search icon
import { IoClose } from "react-icons/io5"; // Importing close icon

const SearchContainer = ({
  searchTerm,
  handlesearchInput,
  handleCancelSearch,
}) => {
  return (
    <section className="w-full">
      {/* Form to handle search input, prevents default form submission */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full lg:w-[50%] rounded-md border border-neutral-500/50 flex"
      >
        <div className="w-12 center-flex">
          {/* Search icon */}
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
        {/* Conditionally render the cancel search button if there's a search term */}
        {searchTerm && (
          <div
            onClick={handleCancelSearch}
            className="bg-[#1f1e20] rounded-md w-14 center-flex cursor-pointer"
          >
            {/* Close icon */}
            <IoClose size={"20px"} color="white" />
          </div>
        )}
      </form>
      {/* Informational text for the user */}
      <small className="opacity-60">
        Please enter at least 3 characters to search...
      </small>
    </section>
  );
};

export default SearchContainer;
