import React from 'react';
import { Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import { Card } from 'antd';
const { Dragger } = Upload;
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};


const Getmoney: React.FC = () => {
    const navigate = useNavigate();

    // const handleAccept = () => {
    //     navigate('/sent');  // Navigate to Sent page on accept
    // };

    const handleReject = () => {
        navigate('/sent');  // Navigate to UnSent page on reject
    };
    return (
        <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '60%' }}>

                <Card style={{ width: '90%', height: '80px', overflowY: 'auto' }}>
                    <div style={{ whiteSpace: 'pre-wrap', color: '#000', fontWeight: 'bold', textAlign: 'center' }}>
                        ชื่อของงาน
                    </div>
                </Card>
                <Card style={{ width: '90%', height: '600px', overflowY: 'auto' }}>
                    <div style={{ whiteSpace: 'pre-wrap', color: '#000', fontWeight: 'bold' }}>
                        รายละเอียดของงาน
                    </div>
                </Card>

            </div>

            <div style={{
                position: 'fixed',
                bottom: '90px',
                right: '200px',
                zIndex: 1000,
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginTop: '20px',
                    gap: '50px'
                }}>
                    <Button type="primary" danger onClick={handleReject}>
                        ย้อนกลับ
                    </Button>
                    <Button type="primary">
                        รับเงิน
                    </Button>
                </div>
            </div>
        </div>

    );
};

export default Getmoney;



