import React from 'react'
import tablePhoto from '../images/9.jpeg';
import { Navabr } from '../Navabr';
import Userinput from '../UserInput/UserInput';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import './ReserveTable.css';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Little Lemon
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};



export const ReserveTable = () => {


    return (
        <div>
            <Navabr />
            <div>
                <main className='reserveMain'>
                    <div className='reserveSection'>
                        <div className='reserveTop'>
                            <div className='reserveTable'>
                                <h2>Reserve Table</h2>
                                <h5>
                                    Little Lemon never charges extra fees for table reservations.
                                    Our goal is to provide a simple and upfront dining experience for our customers.
                                </h5>
                            </div>
                            <img src={tablePhoto} alt="" width={300} height={400}></img>
                        </div>
                    </div>
                </main>
            </div>
            <div>
                <div className='details'>
                    <h1>Provide Details</h1>
                </div>
            </div>
            <div className='inputNote'>
                <div className='userInput'>
                    <Userinput/>
                </div>
                <div className='note'>
                    <h1>Stress-Free Bookings</h1>
                    <h3>
                        Reserve your table hassle-free! Little Lemon never charges
                        extra fees for reservations. Book your spot now and enjoy a
                        transparent dining experience.
                    </h3>
                </div>
            </div>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </div>
    )
}
