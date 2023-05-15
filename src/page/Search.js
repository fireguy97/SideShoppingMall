import React from "react";
import Layout from "../layout/Layout";
import SearchList from "../component/search/SearchList";
import { useLocation } from "react-router-dom";

const Search = ({ searchResults }) => {
  const location = useLocation(); // 현재 경로 정보를 가져옴
  const results = location.state && location.state.searchResults; // 현재 경로의 searchResults 값을 가져옴

  return (
    <Layout>
      {/* // 결과가 있으면 가져온 결과를 사용하고, 없으면 전달받은 searchResults를 사용*/}
      <SearchList searchResults={results || searchResults} />
    </Layout>
  );
};
export default Search;
