import SearchIcon from "./svg/SearchIcon";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="flex justify-between bg-gray-50 text-white-900 text-sm rounded-lg w-30 pl-10 p-2.5 border-gray-600 placeholder-gray-700 transition-colors duration-300 hover:bg-transparent">
      <input
        type="text"
        placeholder="Search a note..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-transparent focus:outline-none w-full text-white-900 placeholder-gray-700"
      />
        <SearchIcon />
    </div>
  );
};

export default SearchBar;
