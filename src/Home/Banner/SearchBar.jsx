import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  return (
    <form className="sm: mt-6">
      <label
        htmlFor="search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-[#cb522d]"
          />
        </div>
        <input
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-[#cb522d] rounded-lg bg-gray-50 focus:outline-none focus:ring-0 focus:border-[#cb522d]"
          placeholder="Search"
        />
        <button className="text-white absolute end-2.5 bottom-2.5 bg-[#cb522d] hover:bg-[#c6745b]focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {" "}
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
