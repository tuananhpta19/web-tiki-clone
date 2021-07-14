import React, { useEffect, useState } from "react";
import { Upload, message, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const UploadMutipleImage = (props) => {
    let [previewVisible, setPreviewVisible] = useState(false);
    let [previewImage, setPreviewImage] = useState("");
    let [previewTitle, setPreviewTitle] = useState("");
    let [fileList, setFileList] = useState([])
    useEffect(()=>{
        setFileList(props.infoImage)
    }, [props.infoImage])
    const handleCancel = () => {
        setPreviewVisible(false)
    }
    const token = localStorage.getItem("token");
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
    //xem ảnh vừa đăng
    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewVisible(true)
        setPreviewImage(file.url || file.preview);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
    }
    //trước khi upload ảnh thì check điều kiện up ảnh
    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
        if (!isJpgOrPng) {
            message.error("Bạn chỉ có thể up ảnh đuôi jpeg/png!");
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error("Ảnh up lên phải nhỏ hơn 2MB!");
        }

        return isJpgOrPng && isLt2M;
    };

    //nếu đăng thêm 1 ảnh thì sẽ thwucj hiện hàm này
    const handleChange = (info) => {
        info.fileList = info.fileList.filter(item => {
            return item.size / 1024 / 1024 < 2
        })
        setFileList(info.fileList)
        if (info.file.status === 'done' && !info.file.response.error ) {
            props.setInfoImage(info.fileList)
        }
    };
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    return (
        <>
            <Upload
                listType="picture-card"
                action={`${
                    process.env.NODE_ENV !== "production"
                      ? process.env.REACT_APP_BACKEND_DEV
                      : process.env.REACT_APP_BACKEND_PROD
                  }/api/product/upload-thumbnail`}
                onPreview={handlePreview}
                headers={headers}
                onChange={handleChange}
                beforeUpload={beforeUpload}
                name="image"
                fileList={fileList}
                multiple={false}
            >
                {fileList.length >= 1 ? null : uploadButton}
            </Upload>
            <Modal
                visible={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
            >
                <img alt="img" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </>
    )
};

export default UploadMutipleImage;
