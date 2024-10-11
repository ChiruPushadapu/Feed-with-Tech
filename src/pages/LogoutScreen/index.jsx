import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';
import './styles.css'

function LogoutScreen() {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    }
    return(
        <div className='logout-container'>
            <h2>You've succcessfully logged out. Thank you for your contributions!</h2>
            <p>Ready to continue making a difference?</p>
            <Button type='primary' onClick={handleLogin}>Login Again</Button>
        </div>
    )
}
export default LogoutScreen;