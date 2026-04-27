const SearchBar = ({ searchInput, setSearchInput }) => {
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search users..."
          className="border border-gray-300 rounded px-3 py-2 w-full"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
    </>
  );
};

export default SearchBar;
