import React from 'react';
import { Card } from 'antd';
import './styles.css';
import donorLogo from '../../assets/donor.png';
import delivererLogo from '../../assets/deliverer.png';

const { Meta } = Card;


function RoleSelection() {

    return(
        <div className='card-container'>
            <p className='card-header'>Choose how you want to contribute to the cause</p>
            <div className='card-grid'>
            <Card
                hoverable
                cover={<img src={donorLogo} alt='Donor' />}
            >
                <Meta title='Food Donor' />
            </Card>
            <Card
                hoverable
                cover={<img src={delivererLogo} alt='Deliverer' />}
            >
                <Meta title='Food Deliverer' />
            </Card>
        </div>
        </div>
        
    )
}

export default RoleSelection;