import React from 'react';
import './Header.css';
import logo from '../Image/Kire.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faHeart } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    return (
        <div>
            <div className='image-style'>
                <img className='image' src={logo} alt="" />
            </div>
            <div>  
                <ul>
                    <FontAwesomeIcon className='icon' icon={faHeart} />
                    <a href="/Home">Home</a>
                    <a href="/">Catagory</a>
                    <a href="/">Cart</a>
                    <a href="/">Order</a>
                    <a href="/">Contact</a>
                </ul>
            </div>
        </div>
    );
};

export default Header;