import React, { useState } from 'react';
import { Table, Tag, Space, Button } from 'antd';
import CreateUserModal from './CreateUser';
import BaseLayoutAdmin from '../../../components/BaseLayoutAdmin/BaseLayoutAdmin';
let DashboardUser = (props) => {
    let [dataListUser, setDataListUser] = useState([]);
    let [visibleModalCreateUser, setVisibleModalCreateUser] = useState(false);
    let [isCreateUserSuccess, setIsCreateUserSuccess] = useState(false);
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    return (
        <BaseLayoutAdmin>
            <CreateUserModal 
                visibleModalCreateUser={visibleModalCreateUser}
                setVisibleModalCreateUser={setVisibleModalCreateUser}
                setIsCreateUserSuccess={setIsCreateUserSuccess}
                isCreateUserSuccess={isCreateUserSuccess}
            ></CreateUserModal>
            <div className="user-action" style={{textAlign: 'right', margin: '30px 0', width:'100%'}}>
                <Button type='primary' onClick={() => {setVisibleModalCreateUser(true)}}>
                    Thêm người dùng
                </Button>
            </div>

            <Table columns={columns} dataSource={data}></Table>
        </BaseLayoutAdmin>
    );
}
export default DashboardUser