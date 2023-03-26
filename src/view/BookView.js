import React from 'react';
import {Layout, Carousel} from 'antd'
import {HeaderInfo} from "../components/HeaderInfo";
import {SideBar} from "../components/SideBar";
import '../css/bookDetail.css'
import {withRouter} from "react-router-dom";


// import {getBook} from "../services/bookService";
import {BookDetail} from "../components/BookDetail";


const { Header, Content, Footer } = Layout;
const user = {"username": "vahagn"};
const data = {"bookId": "1",
                "name": "Clean Code",
                "type": "programming",
                "price": "51.30",
                "author":"Robert Cecil Martin" ,
                "description": "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code.",
                "inventory": 1000,
                "image": "https://prodimage.images-bn.com/pimages/9781593279288_p0_v3_s600x595.jpg",
            }

class BookView extends React.Component{

    constructor(props) {
        super(props);

        this.state = {books:null};



    }

    componentDidMount(){
        // let user = localStorage.getItem("user");
        
        this.setState({user:user});

        const query = this.props.location.search;
        const arr = query.split('&');
        const bookId = arr[0].substr(4);
        this.setState({bookInfo: data})
        // getBook(bookId, (data) => {this.setState({bookInfo: data})})
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
                            <BookDetail info={this.state.bookInfo} />

                            <div className={"foot-wrapper"}>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default BookView;