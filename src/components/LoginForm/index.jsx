import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

function LoginForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

    }

    return (
        <Form>
            <Form.Item name='username' label='Username'>
                    <Input name='username' value={username} onChange={() => setUsername(username)}></Input>
            </Form.Item>
            <Form.Item name='password' label='Password'>
                <Input.Password name='password' value={password} onChange={() => setPassword(password)}></Input.Password>
            </Form.Item>
                <h5>Forgot Password?</h5>
            <Form.Item>
                <Button type='primary' onClick={handleLogin}>Submit</Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm;