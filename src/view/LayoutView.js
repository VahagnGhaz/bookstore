import React from 'react';
import {Layout} from 'antd'
import {HeaderInfo} from "../components/HeaderInfo";
import {SideBar} from "../components/SideBar";
import 'antd/dist/antd.css';

const { Header} = Layout;

class LayoutView extends React.Component{
    
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