import React from "react";
import {
  Routes, Route, BrowserRouter
} from "react-router-dom";
import HomeView from "./view/HomeView";
import ProfileView from "./view/ProfileView";
import ErrorPage from "./view/ErrorView";
import BookView from "./view/BookView";
import OrderView from "./view/OrderView";
import CartView from "./view/CartView";
import LayoutView from "./view/LayoutView";

class BasicRoute extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutView />}>
            <Route index element={<HomeView />} />
            <Route path="cart" element={<CartView />} />
            <Route path="bookDetails" element={<BookView />} />
            <Route path="orders" element={<OrderView />} />
            <Route path="profile" element={<ProfileView />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }

}
export default BasicRoute;