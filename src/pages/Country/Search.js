import React from "react";

function Search({ value, onChange, children }) {
  return (
    <form>
      {children}
      <input
        className="search"
        type="search"
        placeholder="Search Country"
        aria-label="Search"
        value={value}
        onChange={onChange}
      />
    </form>
  );
}
export default Search;
