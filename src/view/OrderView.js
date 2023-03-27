import React from 'react';
import {Layout} from 'antd'
import 'antd/dist/antd.css';
import {SearchBar} from "../components/SearchBar";


const {Content } = Layout;

// hardcode data
const user = {"username": "vahagn"};

class OrderView extends React.Component{

    componentDidMount(){
        // let user = localStorage.getItem("user");
        this.setState({user:user});
    }

    render(){
        return(
            <Layout className="layout">
                <Content style={{ padding: '0 50px' }}>
                    <div className="form-header">My Orders</div>
                    <div className="home-content">
                        <SearchBar />
                    </div>
                </Content>
            </Layout>
        );
    }
}

export default OrderView;