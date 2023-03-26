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
const books = [{"bookId": "1",
"name": "Clean Code",
"price": "51.30",
"image": "https://prodimage.images-bn.com/pimages/9781593279288_p0_v3_s600x595.jpg",
"author":"Robert Cecil Martin" ,
"description": "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code."
}, 
{"bookId": "2",
"name": "C++",
"price": "22",
"image": "https://img3.doubanio.com/view/subject/m/public/s27272780.jpg",
"author":"vahag" ,
"description": "aa"
}
]

class Cart extends React.Component{

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
                        </div>
                    </Content>
            </Layout>
        );
    }
}

export default Cart;