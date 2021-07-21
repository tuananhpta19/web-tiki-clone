import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Cookies from 'js-cookie';
import { login } from '../../api/auth';
import './Login.css';
import {useHistory} from 'react-router-dom';
import { notificationError, notificationSuccess } from '../../utils/notification';
const Login = (props) => {
    let history = useHistory()
    const onFinish = async (body) => {
        try {
            let res = await login(body);

            if (res.status === 200) {
                console.log(res.data)
                localStorage.setItem("infoUser",  JSON.stringify(res.data.data.infoUser))
                Cookies.set("token", res.data.data.token,  { expires: 30 })
                if(res.data.data.infoUser.role === "admin"){
                    history.push('/admin/customer')
                }else{
                    history.push('/home')
                }
                notificationSuccess("Đăng nhập thành công", "Thành công");
            }
        } catch (error) {
            notificationError(error)
        }
    };
    return (
        <div className="login">
            <div className="login-component">
                <div>TEK4.VN</div>
                <Form
                    name="login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng điền email!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                           Đăng nhập
                        </Button>
                        Hoặc <a href="">Đăng ký ngay!</a>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
export default Login