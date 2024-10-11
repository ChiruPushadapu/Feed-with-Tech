import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import './styles.css';

function ForgotPasswordForm() {

    const [username, setUsername] = useState('');

    const handleForgotPassword = () => {

    }
    return(
        <div className='forgot-password-container'>
            <Form 
                className='forgot-password-box'
                layout='horizontal'
            >
                <p className='heading'>Forgot your Password?</p>
                <h4>Retrieve your access and continue helping</h4>
                <Form.Item name='username' label='Username'>
                        <Input name='username' value={username} onChange={() => setUsername(username)}></Input>
                </Form.Item>
                <Form.Item>
                    <Button type='primary' onClick={handleForgotPassword}>Submit</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ForgotPasswordForm;