import React from "react";
import Pagination from "./Pagination";

const Search = () => {
  return (
    <>
      <input type="search" placeholder="Search CryptoAsset..." />
      <input type="submit" value="Search" />
      <Pagination />
    </>
  );
};

export default Search;
