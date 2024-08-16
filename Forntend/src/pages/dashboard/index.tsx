import React from 'react';
import { Input, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import type { ColumnsType } from "antd/es/table";


const { Option } = Select;
export default function index() {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
            <Input
                placeholder="ค้นหา"
                prefix={<SearchOutlined />}
                style={{ width: 300, marginRight: 10 }}
            />
            <Select defaultValue="เลือกหมวดหมู่" style={{ width: 200 }}>
                <Option value="category1">ศิลปะ</Option>
                <Option value="category2">เขียนโค๊ด</Option>
                <Option value="category3">ตัดหญ้า</Option>
            </Select>
        </div>
    );
}