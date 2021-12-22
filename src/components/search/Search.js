import React from 'react';
import './Search.scss';

// eslint-disable-next-line react/prop-types
const Search = function ({ setSearch, setPageNumber }) {
  return (
    <form className="d-flex   flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-4">
      <input
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for characters"
        type="text"
        className="input"
      />
      <button
        className="btn btn-primary"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
