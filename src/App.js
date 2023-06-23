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
import Search from "./page/Search";
import LoginPage from "./page/LoginPage";
import FindPage from "./page/FindPage";
import ManagerPage from "./page/MangerPage";
import ProfilePage from "./page/ProfilePage";
import JoinPage from "./page/JoinPage";
import Buy from "./page/Buy";
import Order from "./page/Order";
import Register from "./page/Register";
import ItemEdit from "./page/ItemEdit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/item/best" element={<Best filteredItems={items} />} />
        <Route path="/productList/tops" element={<Tops />} />
        <Route path="/productList/pants" element={<Pants />} />
        <Route path="/productList/shoes" element={<Shoes />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/order" element={<Order />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit" element={<ItemEdit />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Join" element={<JoinPage />} />
        <Route path="/IdPasswordFind" element={<FindPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/ManagerPage" element={<ManagerPage />} />
        <Route path="/searchProduct" element={<Search />} />
        <Route path="/getProduct" element={<ItemDetail />} />
      </Routes>
    </>
  );
}

export default App;
