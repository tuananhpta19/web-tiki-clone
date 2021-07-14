import { Button, Form, Input, InputNumber } from 'antd';
import { createProductAPI } from '../../../api/product';
import { notificationError, notificationSuccess } from '../../../utils/notification';
import BaseLayoutAdmin from '../../../components/BaseLayoutAdmin/BaseLayoutAdmin';
import UploadImage from '../../../components/Upload/UploadImage';
import "./createProduct.css"
import { useState } from 'react';
const { TextArea } = Input;

const CreateProduct = (props) => {
    let [imageThumbnail, setImageThumbnail] = useState([])
    const [form] = Form.useForm();

    const handleCancel = () => {
        form.setFieldsValue({
            name: "",
            price: "",
            thumnail: null,
            sell: "",
            quantity: ""
        })
        setImageThumbnail([])

    };
    const onFinish = async (body) => {
        // form.resetFields();
        try {
            body.thumnail = imageThumbnail
            let res = await createProductAPI(body);
            if (res.status === 200) {
                notificationSuccess("Tạo người dùng thành công", "Thành công");
                form.setFieldsValue({
                    name: "",
                    price: "",
                    thumnail: null,
                    sell: "",
                    quantity: ""
                })
                setImageThumbnail([])

            }
        } catch (error) {
            notificationError(error)
        }
    };
    return (
        <BaseLayoutAdmin>
            <div className="create-product">
                <Form
                    name="createProduct"
                    labelCol={{
                        span: 5,
                    }}
                    form={form}
                    wrapperCol={{
                        span: 16,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Tên sản phẩm"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập tên!',
                            },
                        ]}
                    >
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item
                        label="Giá gốc"
                        name="price"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập giá bán!',
                            },
                            {
                                type: "number",
                                message: 'Vui lòng nhập kiểu số'
                            }
                        ]}
                    >
                        <InputNumber style={{ width: "100%" }} min={0} />
                    </Form.Item>
                    <Form.Item
                        label="Ảnh đại diện"
                        name="thumnail"
                    >
                        <UploadImage setInfoImage={setImageThumbnail} infoImage={imageThumbnail} />
                    </Form.Item>
                    <Form.Item
                        name="sell"
                        label="Giá bán"
                        rules={[
                            {
                                required: true,
                                message: 'Hãy nhập giá bán!',
                            },
                            {
                                type: "number",
                                message: 'Vui lòng nhập kiểu số'
                            }
                        ]}
                    >
                        <InputNumber style={{ width: "100%" }} min={0} />
                    </Form.Item>

                    <Form.Item
                        name="quantity"
                        label="Số lượng"
                        rules={[
                            {
                                required: true,
                                message: 'Hãy nhập số lượng!',
                            },
                            {
                                type: "number",
                                message: 'Vui lòng nhập kiểu số'
                            }
                        ]}
                    >
                        <InputNumber style={{ width: "100%" }} min={0} />
                    </Form.Item>


                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit" style={{ marginRight: '30px' }}>
                            Tạo sản phẩm
                        </Button>
                        <Button htmlType="submit" onClick={handleCancel}>
                            Hủy
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        </BaseLayoutAdmin>
    );
};
export default CreateProduct