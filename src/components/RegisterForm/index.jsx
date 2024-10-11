import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import './styles.css';

function RegisterForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [reEnterPassword, setReEnterPassword] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const handleRegister = () => {

    }

    return(
        <div className='register-container'>
            <Form 
                className='register-box' 
                layout='horizontal' 
                labelCol={{ span: 8 }}
            >
                <p className='heading'>Register</p>
                <h4>Join us and start making a difference today</h4>
                <Form.Item name='username' label='Username'>
                    <Input name='username' value={username} onChange={() => setUsername(username)}></Input>
                </Form.Item>
                
                <Form.Item name='email' label='Email'>
                    <Input name='email' value={email} onChange={() => setEmail(email)}></Input>
                </Form.Item>
                <Form.Item name='mobile' label='Mobile Number'>
                    <Input name='mobile' value={mobile} onChange={() => setMobile(mobile)}></Input>
                </Form.Item>
                <Form.Item name='password' label='Password'>
                    <Input.Password name='password' value={password} onChange={() => setPassword(password)}></Input.Password>
                </Form.Item>
                {/* <Form.Item name='reEnterPassword' label='Re-enter Password'>
                    <Input.Password name='reEnterPassword' value={reEnterPassword} onChange={() => setReEnterPassword(reEnterPassword)}></Input.Password>
                </Form.Item> */}
                <Form.Item>
                    <Button type='primary' onClick={handleRegister}>Register</Button>
                </Form.Item>
                <div className='login'>
                    <a href='/login'>Already have an account? Click to Login</a>
                </div>
            </Form>
        </div>
    )
}

export default RegisterForm;