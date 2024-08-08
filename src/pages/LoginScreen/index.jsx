import React, { useState } from 'react';
import './styles.css'

import HomeLogo from '../../components/HomeLogo';
import LoginForm from '../../components/LoginForm';

function LoginScreen() {
    return(
        <div className='container'>
            <div className='left-container'>
                <HomeLogo />
            </div>
            <div className='right-container'>
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginScreen;