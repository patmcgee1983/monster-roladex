import { Component } from 'react';
import Card from '../card/card.component'
import './card-list.style.css'

const CardList = ({ monsters }) => {

    return (
        <div className="card-list">
            { monsters.map((monster) => {
                return <Card key={monster.id} monster={monster}/>;
            })}
        </div>
        )
}

export default CardList;