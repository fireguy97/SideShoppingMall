import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./page/Main";
import Best from "./page/Best";
import Tops from "./page/Tops";
import Pants from "./page/Pants";
import Shoes from "./page/Shoes";
import Cart from "./page/Cart";
import ItemDetail from "./page/ItemDetail";
import items from "./db/items.json";
import { useState } from "react";
import Search from "./page/Search";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/item/best" element={<Best />} />
        <Route path="/item/tops" element={<Tops />} />
        <Route path="/item/pants" element={<Pants />} />
        <Route path="/item/shoes" element={<Shoes />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/search/:searchKeyword"
          element={
            <Search
              setSearchResults={setSearchResults}
              searchResults={searchResults}
            />
          }
        />
        <Route
          path="/item/:id"
          element={<ItemDetail filteredItems={items} />}
        />
      </Routes>
    </>
  );
}

export default App;
