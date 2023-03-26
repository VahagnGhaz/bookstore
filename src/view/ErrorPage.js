
import { useRouteError } from "react-router-dom";
import React from 'react';
import { Layout, Carousel } from 'antd'
import { HeaderInfo } from "../components/HeaderInfo";
import { SideBar } from "../components/SideBar";
import 'antd/dist/antd.css';
import '../css/home.css'

class ErrorPage extends React.Component {

  constructor(props) {
    super(props);

  }
  // componentDidMount() {
  //   const error = useRouteError();
  //   console.error(error);
  // }
  render() {

    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i></i>
        </p>
      </div>
    );
  }
}

export default ErrorPage;







