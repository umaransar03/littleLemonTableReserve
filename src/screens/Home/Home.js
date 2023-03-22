import React from 'react'
import './Home.css'
import { Navabr } from '../Navabr';
import mainPhoto from '../images/1.jpg';

export const Home = () => {
  return (
    <div>
        <Navabr/>
        <main className='main'>
            <section className='topSection'>
                <div className='shortIntro'>
                    <h2>
                        Little Lemon
                    </h2>
                    <h4>Chicago</h4>
                    <h5>
                        Little Lemon is a fresh and healthy restaurant serving 
                        plant-based and gluten-free options. Their locally sourced
                        ingredients make for a delicious and nutritious meal. Enjoy 
                        a cozy atmosphere for breakfast, lunch, or dinner.
                    </h5>
                    <button className='table'>Reserve a Table</button>
                </div>
                <img src={mainPhoto} alt="" width={300} height={400}></img>
            </section>
            <section className='topSection'>
                
            </section>
        </main>
    </div>
  )
}
