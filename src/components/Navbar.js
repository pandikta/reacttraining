import React from 'react'
import { Layout, Menu } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const { Header, Content, Footer } = Layout;

function Navbar() {
    return (
        <>
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    {/* <Router> */}
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}

                    >
                        <Menu.Item key={1}>
                            <Link to="/">
                                Home
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={2}>
                            <Link to="/user">
                                List User
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={3}>
                            <Link to="/register">
                                Register
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Header>
            </Layout>
        </>
    )
}

export default Navbar