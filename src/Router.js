import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookDetails from "./view/BookDetails";
import Home from "./view/HomeView";
import Info from "./view/InfoView";
import ShoppingCart from "./view/ShoppingCartView";
import NoPage from "./view/NoPage";
import Layout from "./component/Layout";
import './App.css'
import React from 'react';


class BasicRoute extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout  />}>
                        <Route index element={<Home />} />
                        <Route path="info" element={<Info />} />
                        <Route path="cart" element={<ShoppingCart />} />
                        <Route path="detail" element={<BookDetails />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }

}
export default BasicRoute;
