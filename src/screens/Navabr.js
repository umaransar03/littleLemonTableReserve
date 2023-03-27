import { React, useState } from 'react'
import logo from './images/logo_header.png';
import { useNavigate } from 'react-router-dom';
import Dialog from './Dialog';
import './Navbar.css';

export const Navabr = () => {

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleBook = () => {
        navigate('/reserveTable')
    };
    const handleHome = () => {
        navigate('/')
    };

    return (
        <header className='header'>
            <div className='logo-header'>
                <a onClick={handleHome}>
                    <img src={logo} alt='' width={200} height={50}></img>
                </a>
            </div>
            
            <nav class="nav">
                <input type="checkbox" className='toggle-menu'/>
                <div className='hamburger'></div>
                <ul className='menu'>
                    <li><a className='menuItems' onClick={handleHome}>Home</a></li>
                    <li><a className='menuItems' href="#">Menu</a></li>
                    <li><a className='menuItems' onClick={handleBook}>Book</a></li>
                    <li>
                        <a className='menuItems' onClick={handleClickOpen}>About</a>
                        <Dialog
                            open={open}
                            handleClose={handleClose}
                            title={"Why Us"}
                            description={`Welcome to Little Lemon Restaurant, where we are passionate about providing our guests 
                                with an exceptional dining experience. Our restaurant is located in the heart of the city, and 
                                we offer a comfortable and inviting atmosphere for all occasions, whether it be a romantic dinner 
                                for two or a family celebration.\n
                            
                                At Little Lemon, we pride ourselves on using the freshest ingredients to create delicious and innovative 
                                dishes. Our menu is inspired by a blend of international flavors and locally sourced produce, ensuring 
                                that each dish is packed with flavor and nutrition.\n
                            
                                Our skilled chefs use traditional cooking techniques combined with modern culinary trends to craft dishes 
                                that are both visually appealing and bursting with flavor. Our friendly staff are committed to providing 
                                outstanding service, and we are dedicated to ensuring that our guests have a memorable experience.\n
                                
                                At Little Lemon, we believe that dining should be an experience to be savored and enjoyed. We invite 
                                you to join us for a meal and discover the magic of Little Lemon Restaurant.`}
                        />
                    </li>

                    <li><a className='logIn' href="#">Log In</a></li>
                </ul>
                <ul className='log'>
                    
                </ul>
            </nav>
        </header>
    )
}
