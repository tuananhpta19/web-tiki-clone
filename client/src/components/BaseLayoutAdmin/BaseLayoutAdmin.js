import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    DesktopOutlined,
    UserOutlined,
    MailOutlined
} from '@ant-design/icons';
import './Dashboard.css';

import { Link, withRouter } from 'react-router-dom';

const { SubMenu } = Menu;

const { Header, Content, Footer, Sider } = Layout;
let SiderDemo = (props) => {
    let [collapsed, setCollapsed] = useState(false)
    const [activeKeys] = useState(props.location.pathname.split('/')[1]);

    let onCollapse = collapsed => {
        setCollapsed(collapsed);
    };
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" style={{
                    width: '100%',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "50px"
                }}>
                    <img style={{ width: '100px', height: '100%' }} src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"></img>
                </div>
                <Menu theme="dark" defaultSelectedKeys={activeKeys} mode="inline" >
                    <Menu.Item key="user" icon={<UserOutlined />}>
                        <Link to="/admin/customer"> Người dùng</Link>
                    </Menu.Item>
                    <Menu.Item key="order" icon={<DesktopOutlined />}>
                        <Link to="/admin/order">Đơn hàng</Link>
                    </Menu.Item>
                    <SubMenu key="product-menu" icon={<MailOutlined />} title="Sản phẩm">
                        {/* <Menu.ItemGroup key="product-menu"> */}
                            <Menu.Item key="list-product">
                                <Link to="/admin/product/list">Danh sách sản phẩm</Link>
                            </Menu.Item>
                            <Menu.Item key="create-product">
                                <Link to="/admin/product/add-new">Tạo sản phẩm</Link>
                            </Menu.Item>
                        {/* </Menu.ItemGroup> */}
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    {props.children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
}
export default withRouter(SiderDemo)