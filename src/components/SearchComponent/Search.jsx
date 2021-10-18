import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div id="search_wrapper" className="search_wrapper">
      <input
        type="text"
        id="search"
        className="search"
        placeholder="Search meals"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
