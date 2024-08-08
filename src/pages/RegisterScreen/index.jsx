import React, { useState } from 'react';
import './styles.css'

import HomeLogo from '../../components/HomeLogo';
import RegisterForm from '../../components/RegisterForm';

function RegisterScreen() {
    return(
        <div className='container'>
            <div className='left-container'>
                <HomeLogo />
            </div>
            <div className='right-container'>
                <RegisterForm />
            </div>
        </div>
    )
}

export default RegisterScreen;