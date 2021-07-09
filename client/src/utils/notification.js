import { notification } from 'antd';

export const notificationSuccess = (description, message, duration = 3) => {
    notification.success({
        message,
        description,
        duration,
    });
}
export const notificationError =  (err, message, duration = 2)=>{
  notification.error({
    duration:duration,
    message: message || "Không thành công",
    description: (err.response && err.response.data && err.response.data.message) || "Không thể kết nối server"
  }) 
}
