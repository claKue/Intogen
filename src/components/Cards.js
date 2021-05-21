import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these epic destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                        />
                         <CardItem 
                            text="Bla bla bla"
                            label="Nothing"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                        />
                        <CardItem 
                            text="Hier können die Lerntypen stehen"
                            label="Activist"
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
