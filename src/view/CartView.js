import React from 'react';
import { Layout, Table, Button } from 'antd'
import 'antd/dist/antd.css';
import '../css/main.css'
import { SearchBar } from "../components/SearchBar";
import book1 from "../assets/book1.jpg"
import book2 from "../assets/book2.jpg"   

const { Content } = Layout;

// hardcode data
const user = { "username": "vahagn" };
const books = [{"bookId": "1",
                "name": "Clean Code",
                "price": "51.30",
                "image": <img width="80" height="100" src={book1} alt="Product" />  ,
                "author":"Robert Cecil Martin" ,
                "type":"Programming",
                "inventory": 79,
                "description": "The first describes the principles, patterns, and practices of writing clean code. The second part consists of several case studies of increasing complexity.",
                "action": <Button type="link" className="remove-button">Remove</Button>,

            }, 
            {"bookId": "2",
                "name": "Intro to Algorithms",
                "price": "40.5",
                "image": <img width="80" height="100" src={book2} alt="Product" />   ,
                "author":"Thomas H. Cormen" ,
                "type":"Programming",
                "inventory": 13,
                "description": "Some books on algorithms are rigorous but incomplete; others cover masses of material but lack rigor. Introduction to Algorithms uniquely combines rigor and comprehensiveness. The book covers a broad range of algorithms in depth, yet makes their design and analysis accessible to all levels of readers.",
                "action": <Button type="link" className="remove-button">Remove</Button>,

            }, ];

const columns = [
  {
    title: 'Cover',
    dataIndex: 'image',
    key: 'image',
    className: 'cover-column',
  },
  {
    title: 'Title',
    dataIndex: 'name',
    key: 'name',
    className: 'title-column',
  },
  {
    title: 'Amount',
    dataIndex: 'inventory',
    key: 'inventory',
    className: 'amount-column',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    className: 'price-column',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    className: 'action-column',
  },
];

class CartView extends React.Component {

    componentDidMount() {
        // let user = localStorage.getItem("user");
        this.setState({ user: user });
    }

    render() {
        return (
            <Layout className="layout">
                <Content style={{ padding: '0 50px' }}>
                    <div className="form-header">My Shopping Cart</div>
                    <div className="home-content">
                        <SearchBar />
                    </div>
                    <Table
                        className="shopping-cart"
                        dataSource={books}
                        columns={columns}
                        pagination={false}
                    />
                </Content>
            </Layout>
        );
    }
}

export default CartView;