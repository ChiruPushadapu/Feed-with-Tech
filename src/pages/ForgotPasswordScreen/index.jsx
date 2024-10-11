import React from 'react';
import './styles.css';

import HomeLogo from '../../components/HomeLogo';
import ForgotPasswordForm from '../../components/ForgotPasswordForm';

function ForgotPasswordScreen() {

    return(
        <div className='container'>
            <div className='left-container'>
                <HomeLogo />
            </div>
            <div className='right-container'>
                <ForgotPasswordForm />
            </div>
        </div>
    )
}

export default ForgotPasswordScreen;