// import React, { useEffect, useState } from 'react';
// import { Table, Tag, Popconfirm, Button } from 'antd';
// // import CreateUserModal from './CreateUser';
// import BaseLayoutAdmin from '../../../components/BaseLayoutAdmin/BaseLayoutAdmin';
// import { getAllUserAPI, updateStatusAPI } from '../../../api/user';
// import { notificationError, notificationSuccess } from '../../../utils/notification';
// import {
//     Link
// } from 'react-router-dom';
// let DashboardUser = (props) => {
//     let [dataListUser, setDataListUser] = useState([]);
//     let [visibleModalCreateUser, setVisibleModalCreateUser] = useState(false);
//     let [isCreateUserSuccess, setIsCreateUserSuccess] = useState(false);
//     let [isChangeStatusSuccess, setIsChangeStatusSuccess] = useState(false);
//     useEffect(() => {
//         let _getListUsers = async () => {
//             try {
//                 let res = await getAllUserAPI();
//                 if (res.status === 200) {
//                     let handleData = res.data.data ? res.data.data.map((userItem, index) => {
//                         return {
//                             key: index + 1,
//                             ...userItem
//                         }
//                     }) : [];
//                     setDataListUser(handleData)
//                 }
//             } catch (error) {
//                 notificationError(error)
//             }
//         }
//         _getListUsers()
//     }, [isCreateUserSuccess, isChangeStatusSuccess])

//     let handleBlockUser = async (record, status) => {
//         try {
//             let res = await updateStatusAPI(record._id, { status: status });
//             if (res.status === 200) {
//                 setIsChangeStatusSuccess(!isChangeStatusSuccess)
//                 notificationSuccess("Cập nhật trạng thái thành công")
//             }
//         } catch (error) {
//             notificationError(error)
//         }
//     }
//     const columns = [
//         {
//             title: 'key',
//             dataIndex: 'key',
//             key: 'key',
//         },
//         {
//             title: 'Tên',
//             dataIndex: 'name',
//             key: 'name',
//         },
//         {
//             title: 'email',
//             dataIndex: 'email',
//             key: 'email',
//         },
//         {
//             title: 'trạng thái',
//             dataIndex: 'status',
//             key: 'status',
//             render: (status) => {
//                 let checkStatus = (status) => {
//                     if (status === "active") {
//                         return <Tag color="green">active</Tag>
//                     }
//                     return <Tag color="red">block</Tag>
//                 }
//                 return (
//                     <>
//                         {checkStatus(status)}
//                     </>
//                 )
//             }
//         },
//         {
//             title: 'Hành động',
//             render: (record) => (
//                 <>
//                     <Popconfirm
//                         title="Bạn có chắc chắn muốn thay đổi"
//                         onConfirm={() => {
//                             if (record.status === "active") {
//                                 handleBlockUser(record, "block")
//                             } else {
//                                 handleBlockUser(record, "active")
//                             }

//                         }}
//                         okText="Đồng ý"
//                         cancelText="Không"
//                     >
//                         {record.status === "active" ? <Button style={{ background: 'red', color: 'white' }}>Block</Button> : <Button>Active</Button>}
//                     </Popconfirm>
//                     <Button style={{ background: '#8bc34a', color: 'black', marginLeft: "30px" }}> 
//                         <Link to={"/user/"+record._id}>Xem chi tiết</Link>
//                     </Button>
//                 </>
                
//             ),
//         },
//     ];

//     return (
//         <BaseLayoutAdmin>
//             {/* <CreateUserModal
//                 visibleModalCreateUser={visibleModalCreateUser}
//                 setVisibleModalCreateUser={setVisibleModalCreateUser}
//                 setIsCreateUserSuccess={setIsCreateUserSuccess}
//                 isCreateUserSuccess={isCreateUserSuccess}
//             ></CreateUserModal> */}
//             <div className="user-action" style={{ textAlign: 'right', margin: '30px 0', width: '100%' }}>
//                 <Button type='primary' onClick={() => { setVisibleModalCreateUser(true) }}>
//                    danh sách sản phảm
//                 </Button>
//             </div>

//             <Table columns={columns} dataSource={dataListUser}></Table>
//         </BaseLayoutAdmin>
//     );
// }
// export default DashboardUser