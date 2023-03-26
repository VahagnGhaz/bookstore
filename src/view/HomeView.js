import React from 'react';
import {Layout, Carousel} from 'antd'
import {HeaderInfo} from "../components/HeaderInfo";
import {SideBar} from "../components/SideBar";
import 'antd/dist/antd.css';
import '../css/home.css'
import {BookCarousel} from "../components/BookCarousel";
import {SearchBar} from "../components/SearchBar";
import {BookList} from "../components/BookList";
import { Outlet, Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

// hardcode data
const user = {"username": "vahagn"};

class HomeView extends React.Component{

    constructor(props) {
        super(props);

    }

    componentDidMount(){
        // let user = localStorage.getItem("user");
        this.setState({user:user});
    }

    render(){
        return(
            <Layout className="layout">
                    <Content style={{ padding: '0 50px' }}>
                        <div className="home-content">
                            <SearchBar />

                            <BookCarousel />
                            <BookList /> 
                                <div className={"foot-wrapper"}>
                            </div>
                        </div>
                    </Content>
            </Layout>
        );
    }
}

export default HomeView;