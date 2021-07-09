import React from 'react';
import { Menu, Dropdown, Image } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './BaseLayout.css';
const menu = (
  <Menu>
    <Menu.Item key="profile">
      {/* <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com"> */}
        1st menu item
      {/* </a> */}
    </Menu.Item>
  </Menu>
);

let BaseLayout = (props) => {
    return(
        <div>
            <div className="header">
                <div className="header-logo"> 
                    <img style={{marginLeft: "10px", width: '100px', height: '40px'}} src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"></img>
                </div>
                <Dropdown overlay={menu} className="header-menu">
                        <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            Hover me <DownOutlined />
                        </div>
                </Dropdown>
            </div>
        </div>
    )
}
export default BaseLayout