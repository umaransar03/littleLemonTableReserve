import React from 'react'
import './Home.css'
import { Navabr } from '../Navabr';
import mainPhoto from '../images/1.jpg';
import { Card } from './Card';
import { Items } from '../items/Items';

export const Home = () => {
    return (
        <div>
            <Navabr />
            <div>
                <main className='main'>
                    <div className='topSection'>
                        <div className='top'>
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
                        </div>
                    </div>
                    <section className='topSection'>

                    </section>
                </main>
            </div>
            <div>
                <div className='menuu'>
                    <h1>Specials</h1>
                    <button>Menu</button>
                </div>
            </div>
            <div className='Cards'>
                {Items.map(project => (
                    <Card
                        key={project.title}
                        Name={project.title}
                        description={project.description}
                        imgSrc={project.getImageSrc()}
                    />
                ))}
            </div>

        </div>
    )
}
