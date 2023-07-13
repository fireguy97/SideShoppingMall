import { Route, Routes } from "react-router-dom";
import "./App.css";
import items from "./db/items.json";
import LoginPage from "./page/login/LoginPage";
import FindPage from "./page/find/FindPage";
import ManagerPage from "./page/manager/MangerPage";
import ProfilePage from "./page/profile/ProfilePage";
import JoinPage from "./page/join/JoinPage";
import CartPage from "./page/cart/Cart";
import BuyPage from "./page/cart/buy/Buy";
import ShoesPage from "./page/item/shoes/Shoes";
import TopsPage from "./page/item/tops/Tops";
import PantsPage from "./page/item/pants/Pants";
import SearchPage from "./page/item/search/Search";
import OrderPage from "./page/cart/order/Order";
import DetailPage from "./page/item/detail/Detail";
import ItemEditPage from "./page/management/edit/ItemEdit";
import RegisterPage from "./page/management/register/Register";
import MainPage from "./page/main/Main";
import BestPage from "./page/item/best/Best";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/item/best" element={<BestPage filteredItems={items} />} />
        <Route path="/productList/tops" element={<TopsPage />} />
        <Route path="/productList/pants" element={<PantsPage />} />
        <Route path="/productList/shoes" element={<ShoesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/edit" element={<ItemEditPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Join" element={<JoinPage />} />
        <Route path="/IdPasswordFind" element={<FindPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/ManagerPage" element={<ManagerPage />} />
        <Route path="/searchProduct" element={<SearchPage />} />
        <Route path="/getProduct" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
