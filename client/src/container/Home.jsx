import { Layout, Menu, Breadcrumb } from 'antd';
import React from 'react';
import './Home.css';

const { Header, Content, Footer } = Layout;

function Home(props) {
    return (
        <Layout className="layout">
            <Header style={{backgroundColor : 'white'}}>
                <div className="logo" />
                <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">Bike Price</Menu.Item>
                    <Menu.Item key="3">Helmet</Menu.Item>
                    <Menu.Item key="4">Showrooms</Menu.Item>
                    <Menu.Item key="5">Brands</Menu.Item>
                    <Menu.Item key="6">Scooter</Menu.Item>
                    <Menu.Item key="7">Electric Bikes</Menu.Item>
                    <Menu.Item key="8">Review</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">Content</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}

export default Home;