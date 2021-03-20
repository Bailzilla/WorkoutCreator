import React from 'react';
import './Card.css'

// takes a pic and name, returns a new component to display the data
const Card = ({ pic, name }) => {
    return (
        <div className='tc grow bg-light-green br3 pa2 ma1 dib bw1 shadow-5'>
            <img alt={name} src={pic}/>            
            <h3>{name}</h3>
        </div>
    );
}



export default Card;