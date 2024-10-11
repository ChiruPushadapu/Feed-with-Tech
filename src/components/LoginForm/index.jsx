import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import './styles.css';
import axios from 'axios';

function LoginForm() {

    const [form] = Form.useForm();

    const onFinish = (formData) => {
        axios.post('/user/login', formData)
            .then(response => {
                message.success("Login successful"); 
                // redirection logics
            })
            .catch(error => {
                message.error('Login failed')
            })
    };

    return (
        <div className='login-container'>
            <Form
                form={form}
                className='login-box'
                layout='horizontal'
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                onFinish={onFinish}
            >
                <p className='heading'>Login</p>
                <h4>Sign in to continue your impact</h4>
                <Form.Item 
                    name='username' 
                    label='Username'
                    rules={[{ required: true, message: 'Please enter your username'}]}
                >
                    <Input />
                        {/* <Input name='username' value={username} onChange={() => setUsername(username)}></Input> */}
                </Form.Item>
                <Form.Item 
                    name='password' 
                    label='Password'
                    rules={[{ required: true, message: 'Please enter your password'}]}
                >
                    <Input.Password />
                    {/* <Input.Password name='password' value={password} onChange={() => setPassword(password)}></Input.Password> */}
                </Form.Item>
                <div className='forgot-password'>
                    <a href='/forgot-password'>Forgot Password?</a>
                </div>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>Login</Button>
                </Form.Item>
                <div className='register'>
                    <a href='/register'>Don't have an account? Register Here</a>
                </div>
            </Form>
        </div>
    )
}

export default LoginForm;