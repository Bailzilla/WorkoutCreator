import React from 'react';
import './Card.css'

const Card = ({ pic, name }) => {
    return (
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <img alt='example of chosen lift' src={pic}/>            
            <h3>{name}</h3>            
        </div>
    );
}

export default Card;