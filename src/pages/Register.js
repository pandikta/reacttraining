import React from 'react'
import { Button, Checkbox, Form, Input, Modal } from 'antd';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate()
    const onFinish = (value) => {
        axios.post("http://172.16.8.78:4000/api/users/register", value).then((data) => {
            console.log(data.status);
            if (data.status === 200) {
                Modal.confirm({ type: 'success' })
            } else if (data.status === 422) {
                Modal.confirm({ type: 'success' })
            }
        }).catch((err) => {
            Modal.confirm({ type: 'success' })
            console.log(err);
        })
    };

    const onFinishFailed = () => { }

    return (
        <>
            <Navbar></Navbar>
            <Form
                name="basic"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 8 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                style={{ marginTop: 10 }}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: false }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Address"
                    name="address"
                    rules={[{ required: false }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 6, span: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default Register