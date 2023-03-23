import React from 'react';
import './App.css';
import BasicRouter from "./Router";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  
class App extends React.Component {


    render() {
        return (
            <RouterProvider router={BasicRouter} />
        );
    }
}


export default App;
