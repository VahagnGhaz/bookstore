import React from 'react';
import {Layout, Carousel} from 'antd'
import {HeaderInfo} from "../components/HeaderInfo";
import {SideBar} from "../components/SideBar";
import 'antd/dist/antd.css';
import '../css/home.css'
import { Outlet, Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;



class LayoutView extends React.Component{

    constructor(props) {
        super(props);

    }

    render(){
        return(
            <Layout className="layout">
                <Header>
                    <HeaderInfo />
                </Header>
                <Layout>
                    <SideBar />
                </Layout>
            </Layout>
        );
    }
}

export default LayoutView;