import React from 'react';
import { Button, Card } from 'antd';
import { useNavigate } from 'react-router-dom';

const Promiss: React.FC = () => {
    const navigate = useNavigate();

    const handleAccept = () => {
        navigate('/sent');  // Navigate to Sent page on accept
    };

    const handleReject = () => {
        navigate('/');  // Navigate to UnSent page on reject
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
                        สัญญาจากลูกค้า
                    </div>
                </Card>
            </div>

            <div style={{ width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center', color: 'red', fontWeight: 'bold' }}>
                    *****โปรดอ่านสัญญาให้ระเอียดก่อนกดตกลง*****
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                    <Button type="primary" danger style={{ width: '45%' }} onClick={handleReject}>
                        ปฏิเสธสัญญา
                    </Button>
                    <Button type="primary" style={{ width: '45%' }} onClick={handleAccept}>
                        ยอมรับสัญญา
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Promiss;
