import React from 'react';
import './Card.css'

const Card = ({ pic, name }) => {
    return (
        <div className='tc grow bg-light-green br3 pa3 ma1 dib bw1 shadow-5'>
            <img alt={name} src={pic}/>            
            <h3>{name}</h3>            
        </div>
    );
}

export default Card;