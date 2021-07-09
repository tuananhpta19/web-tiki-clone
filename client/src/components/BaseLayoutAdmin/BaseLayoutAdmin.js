import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    DesktopOutlined,
    UserOutlined,
} from '@ant-design/icons';
import './Dashboard.css';
const { Header, Content, Footer, Sider } = Layout;
let SiderDemo = (props) => {
    let [collapsed, setCollapsed] = useState(false)


    let onCollapse = collapsed => {
        setCollapsed(collapsed);
    };
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" style={{width: '100%', display: 'flex'}}>
                    <img style={{margin: '0 auto', width: '100px', height: '40px', marginTop: '20px', marginLeft:"20px"}} src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"></img>
                </div>
                <Menu theme="dark" defaultSelectedKeys={['user']} mode="inline">
                    <Menu.Item key="user" icon={<UserOutlined />}>
                        Người dùng
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        Đơn hàng
                    </Menu.Item>
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
export default SiderDemo