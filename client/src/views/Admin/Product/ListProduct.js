import React, { useEffect, useState } from 'react';
import { Table, Tag, Popconfirm, Button } from 'antd';
import BaseLayoutAdmin from '../../../components/BaseLayoutAdmin/BaseLayoutAdmin';
import { getAllProductAPI } from '../../../api/product';
import { notificationError, notificationSuccess } from '../../../utils/notification';
import {
    Link
} from 'react-router-dom';
let DashboardUser = (props) => {
    let [dataListProduct, setDataListProduct] = useState([]);
    useEffect(() => {
        let _getListProducts = async () => {
            try {
                let res = await getAllProductAPI();
                if (res.status === 200) {
                    let handleData = res.data.data ? res.data.data.map((productItem, index) => {
                        return {
                            key: index + 1,
                            ...productItem
                        }
                    }) : [];
                    setDataListProduct(handleData)
                }
            } catch (error) {
                notificationError(error)
            }
        }
        _getListProducts()
    }, [])

    const columns = [
        {
            title: 'key',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Giá gốc',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Giá bán',
            dataIndex: 'sell',
            key: 'sell',
        },
        {
            title: 'Số lượng',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Hành động',
            render: (record) => (
                <>
                
                    <Button style={{ background: '#8bc34a', color: 'black', marginLeft: "30px" }}> 
                        <Link to={"/user/"+record._id}>Xem chi tiết</Link>
                    </Button>
                    <Popconfirm
                        title="Bạn có chắc chắn muốn xóa sản phẩm"
                        onConfirm={() => {
                            // if (record.status === "active") {
                            //     handleBlockUser(record, "block")
                            // } else {
                            //     handleBlockUser(record, "active")
                            // }

                        }}
                        okText="Đồng ý"
                        cancelText="Không"
                    >
                      <Button style={{ background: 'red', color: 'white',marginLeft: "30px" }}>Xóa</Button>
                    </Popconfirm>
                </>
                
            ),
        },
    ];

    return (
        <BaseLayoutAdmin>
            <Table columns={columns} dataSource={dataListProduct}></Table>
        </BaseLayoutAdmin>
    );
}
export default DashboardUser