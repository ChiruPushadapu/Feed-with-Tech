import React, { useState } from 'react';
import './styles.css'

import HomeLogo from '../../components/HomeLogo';
import RoleSelection from '../../components/RoleSelection';

function HomeScreen() {
    return(
        <div className='container'>
            <div className='left-container'>
                <HomeLogo />
            </div>
            <div className='right-container'>
                <RoleSelection />
            </div>
        </div>
        
    )
}

export default HomeScreen;