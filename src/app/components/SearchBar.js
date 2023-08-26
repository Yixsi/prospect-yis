const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Search"
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-black
 text-sm focus:outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
