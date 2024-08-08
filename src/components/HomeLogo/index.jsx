import React from 'react';
import logo from '../../assets/logo.png';
import './styles.css';

function HomeLogo() {

    return (
        <div className='logo-container'>
            <img className='logo' src={logo} alt='logo'></img>
            <div className='caption'>
                <h1>Connecting Kindness with Technology</h1>
                <h2>Every Meal Matters</h2>
            </div>
        </div>
    )
}

export default HomeLogo