import React from 'react';
import { Button, Input, Card, Avatar, Space, Carousel } from 'antd';
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';

const { TextArea } = Input;

const contentStyle: React.CSSProperties = {
    height: '550px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    fontSize: '18px',
};

const PostPage: React.FC = () => {
    const navigate = useNavigate();

    const handleBookJob = () => {
        navigate('/promiss');
    };

    return (
        <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ width: '60%' }}>
                <Card style={{ width: '90%', height: '80px', overflowY: 'auto' }}>
                    <div style={{ whiteSpace: 'pre-wrap', color: '#000', fontWeight: 'bold', textAlign: 'center' }}>
                        ชื่อของงาน
                    </div>
                </Card>
                <Carousel autoplay style={{ width: '90%', height: '600px', overflowY: 'auto' }}>
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
            </div>

            <div style={{ width: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Space wrap size={16}>
                    <Avatar size="large" icon={<UserOutlined />} />
                    Sitthichok
                </Space>

                <Card style={{ width: '50%', height: '200px', overflowY: 'auto', marginTop: '20px' }}>
                    <div style={{ whiteSpace: 'pre-wrap', color: '#000', fontWeight: 'bold', textAlign: 'center' }}>
                        รายละเอียดงาน
                    </div>
                </Card>

                <div style={{
                    position: 'fixed',
                    bottom: '70px',
                    right: '150px',
                    zIndex: 1000,
                }}>
                    <Button type="primary" onClick={handleBookJob}>
                        จองงาน
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PostPage;
