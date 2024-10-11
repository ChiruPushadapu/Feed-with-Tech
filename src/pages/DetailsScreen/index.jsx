import React from 'react';
import './styles.css';

import HomeLogo from '../../components/HomeLogo';
import DetailsForm from '../../components/DetailsForm';

function DetailsScreen() {
    return(
        <div className='container'>
            <div className='left-container'>
                <HomeLogo />
            </div>
            <div className='right-container'>
                <DetailsForm />
            </div>
        </div>
    )
}

export default DetailsScreen;