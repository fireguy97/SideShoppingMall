import React from "react";
import Layout from "../layout/Layout";
import SearchList from "../component/search/SearchList";

const Search = ({ searchResults, setSearchResults }) => {
  return (
    <Layout>
      <SearchList />
    </Layout>
  );
};

export default Search;
