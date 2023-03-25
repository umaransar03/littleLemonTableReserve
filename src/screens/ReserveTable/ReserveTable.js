import React from 'react'
import tablePhoto from '../images/9.jpeg';
import { Navabr } from '../Navabr';
import './ReserveTable.css';

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
            <div>
                <input type="text" placeholder='Your Name'/>
                <input type="text" placeholder='Your Name'/>
                <input type="text" placeholder='Your Name'/>
            </div>
        </div>
    )
}
