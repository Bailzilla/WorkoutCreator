import React from 'react';

const Card = ({ pic, name }) => {
    return (
        <div>
            <img alt='example of chosen lift' src={pic}/>
            <div>
                <h3>{name}</h3>
            </div>
        </div>
    );
}

export default Card;