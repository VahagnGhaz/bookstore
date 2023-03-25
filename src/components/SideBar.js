import React from 'react'
import { Menu, Layout, Icon } from 'antd'
// import {history} from "../utils/history";
import { Outlet, Link } from "react-router-dom";
import '../css/index.css'

const { SubMenu } = Menu;
const { Sider } = Layout;

export class SideBar extends React.Component {

    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        if (collapsed) {

        }
        console.log(collapsed);
        this.setState({ collapsed });
    };

    // bookOnClick = () => {
    //     history.push("/");
    // };

    render() {
        return (
            <>
            <div style={{ width: this.state.collapsed ? "80px" : "180px", maxWidth: this.state.collapsed ? "80px" : "180px", minWidth: this.state.collapsed ? "80px" : "180px" }}>
                <div className="mySider">
                    <Sider collapsible collapsed={this.state.collapsed} width="180px" onCollapse={this.onCollapse} className="sider" style={{ background: '#fff' }}>
                        <Menu defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" onClick={this.bookOnClick}>
                                <Icon type="book" style={{ fontSize: '18px' }} />
                                <span style={{ fontSize: '16px' }}>
                                    <Link style={{ color: 'gray' }} to={`/`}>Books</Link>
                                </span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="shopping-cart" style={{ fontSize: '18px' }} />
                                <span style={{ fontSize: '16px',  color: 'red'}}>
                                     <Link style={{ color: 'gray' }} to={`cart`}>My Cart</Link>
                                </span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="unordered-list" style={{ fontSize: '18px' }} />
                                <span style={{ fontSize: '16px' }}>
                                    <Link style={{ color: 'gray' }}  to={`orders`}>My Orders</Link>
                                </span>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Icon type="user" style={{ fontSize: '18px' }} />
                                <span style={{ fontSize: '16px' }}>
                                    <Link style={{ color: 'gray' }}  to={`profile`}>My Profile</Link>
                                </span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                </div>
            </div>
            
            <div id="detail">
        <Outlet />
        </div>
            </>

        );
    }

}