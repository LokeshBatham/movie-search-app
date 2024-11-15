import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery, fetchMovies }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies(); // Trigger search on button click
  };

  return (
    <form className="d-flex justify-content-center my-3" onSubmit={handleSearch}>
      <input
        className="form-control search me-2"
        type="text"
        placeholder="Search for movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
