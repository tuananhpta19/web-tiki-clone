import { Modal, Button, Form, Input } from 'antd';
import {signUp} from '../../../api/auth';
import {notificationError, notificationSuccess} from '../../../utils/notification';
const CreateUserModal = (props) => {
    const handleCancel = () => {
        props.setVisibleModalCreateUser(false)
    };
    const onFinish = async (body) => {
        try {
            let res = await signUp(body);
            if(res.status === 200){
                notificationSuccess("Tạo người dùng thành công", "Thành công");
                props.setVisibleModalCreateUser(false)
            }
        } catch (error) {
            notificationError(error)
        }
    };
    return (
        <>
            <Modal
                title="Thêm người dùng"
                visible={props.visibleModalCreateUser}
                footer={null}
                onCancel={handleCancel}
            >
                <Form
                    name="createUser"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Tên"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập tên!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập email!',
                            },
                            {
                                type: 'email',
                                message: 'Email không đúng định dạng',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Mật khẩu"
                        rules={[
                            {
                                required: true,
                                message: 'Hãy nhập mật khẩu!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Xác nhận mật khẩu"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng hãy nhập mật khẩu!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Hai mật khẩu không giống nhau!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit" style={{marginRight: '30px'}}>
                           Tạo người dùng
                        </Button>
                        <Button htmlType="submit" onClick={handleCancel}>
                           Hủy
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};
export default CreateUserModal