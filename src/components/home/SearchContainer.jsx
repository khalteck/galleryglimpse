import { CgSearch } from "react-icons/cg";

const SearchContainer = () => {
  return (
    <section className="w-full">
      <form className="w-full rounded-md border border-neutral-500/50 flex">
        <div className="w-12 flex justify-center items-center">
          <CgSearch size={"25px"} color="#737373" />
        </div>
        <input
          type="text"
          id="search"
          placeholder="Search image title"
          className="w-full pr-3 py-3 outline-none bg-transparent placeholder:text-neutral-500"
        />
      </form>
    </section>
  );
};

export default SearchContainer;
