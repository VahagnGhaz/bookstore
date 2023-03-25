import React from 'react';
import {Layout, Carousel} from 'antd'
import {HeaderInfo} from "../components/HeaderInfo";
import {SideBar} from "../components/SideBar";
import 'antd/dist/antd.css';
import '../css/home.css'
import {BookCarousel} from "../components/BookCarousel";
import {SearchBar} from "../components/SearchBar";
import {BookList} from "../components/BookList";

const { Header, Content, Footer } = Layout;

// hardcode data
const user = {"username": "vahagn"};
const books = [{"bookId": "1",
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
}
]

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

                <Header>
                    <HeaderInfo />
                </Header>
                <Layout>
                    <SideBar />
                    <Content style={{ padding: '0 50px' }}>
                        <div className="home-content">
                            <SearchBar />

                            <BookCarousel />
                            <BookList books={books}/> 
                                <div className={"foot-wrapper"}>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default HomeView;