import React from 'react'
import logo from '../images/logo_header.png';
import './Navbar.css';

export const Navabr = () => {
    return (
        <header className='header'>
            <div className=' '>
                <a href='#'>
                    <img src={logo} alt='' width={200} height={50}></img>
                </a>
            </div>
            <nav class="nav">
                <input type="checkbox" className='toggle-menu'  />
                <div className='hamburger'></div>
                <ul className='menu'>
                    <li><a className='menuItems' href="#">Home</a></li>
                    <li><a className='menuItems' href="#">Menu</a></li>
                    <li><a className='menuItems' href="#">Book</a></li>
                    <li><a className='menuItems' href="#">About</a></li>
                    <li><a className='logIn' href="#">Log In</a></li>
                </ul>
            </nav>
        </header>
    )
}
