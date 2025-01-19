import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/favicon.png';
import { Avatar, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './styles.css'
function Header(){
    const [menuVisible, setMenuVisible] = useState(false);
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/home');
    }

    const handleMenuClick = ({key}) => {
        setMenuVisible(false);
        if(key == 'logout')
        {
            sessionStorage.clear();
        }
        navigate(`/${key}`);
    }

    const menuItems = [
        { label: 'My Account', key: 'my-account' },
        { label: 'About Us', key: 'about-us' },
        { label: 'Logout', key: 'logout'},
    ]

    const menu = {
        items: menuItems,
        onClick: handleMenuClick,
        className: 'custom-dropdown-menu'
    }

    return(
        <div className='header-container'>
            <img className='header-image' src={logo} alt='logo' onClick={handleLogoClick}></img>
            <h2 className='header-title' onClick={handleLogoClick}>Feed with Tech</h2>
            <Dropdown menu={menu} placement='bottomRight'>
                <Avatar className='header-avatar' size='large' icon={<UserOutlined />}></Avatar>
            </Dropdown>
        </div>
    )
}

export default Header;