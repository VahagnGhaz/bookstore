import React from "react";
// import "./css/index.css";
import {
  Routes,Route, BrowserRouter, redirect 
} from "react-router-dom";
import HomeView from "./view/HomeView";
import Profile from "./view/ProfileView";
import ErrorPage from "./view/ErrorPage";
import BookView from "./view/BookView";
import OrderView from "./view/OrderView";
import Cart from "./view/CartView";
import LayoutView from "./view/LayoutView";


const bookData = [{"bookId": "1",
                "name": "Effective C++",
                "price": "51.30",
                "image": "https://img3.doubanio.com/view/subject/m/public/s27272780.jpg",
                "author":"梅耶" ,
                "description": "大师名著纵横二十载, 稳居任一荐书单三甲, 称职程序员傍身绝学, 通向C++精微奥妙之门。"
            }, 
            {"bookId": "2",
                "name": "C++",
                "price": "22",
                "image": "https://img3.doubanio.com/view/subject/m/public/s27272780.jpg",
                "author":"vahag" ,
                "description": "aa"
            }, 
          ]

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
                  <Route path="detail" element={<BookView />} />
                  <Route path="orders" element={<OrderView />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="*" element={<ErrorPage />} />
              </Route>
          </Routes>
      </BrowserRouter>
        )
    }

}
export default BasicRoute;