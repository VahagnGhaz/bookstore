import React from "react";
// import "./css/index.css";
import {
  Routes,Route, BrowserRouter, redirect 
} from "react-router-dom";
import HomeView from "./view/HomeView";
import ProfileForm from "./view/ProfileView";
import ErrorPage from "./view/ErrorPage";
import BookView from "./view/BookView";
import OrderView from "./view/OrderView";
import Cart from "./view/CartView";
import LayoutView from "./view/LayoutView";

class BasicRoute extends React.Component{
      constructor(props) {
        super(props);
    }

    render(){
        return(
          <BrowserRouter>
          <Routes>
              <Route path="/" element={<LayoutView  />}>
                  <Route index element={<HomeView />} />
                  <Route path="cart" element={<Cart />} />
                  <Route path="bookDetails" element={<BookView />} />
                  <Route path="orders" element={<OrderView />} />
                  <Route path="profile" element={<ProfileForm />} />
                  <Route path="*" element={<ErrorPage />} />
              </Route>
          </Routes>
      </BrowserRouter>
        )
    }

}
export default BasicRoute;