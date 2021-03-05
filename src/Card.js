import React from 'react';
import './Card.css'

// takes a pic and name, returns a new component to display the data
const Card = ({ pic, name }) => {
    return (
        <div className='tc grow bg-light-green br3 pa2 ma1 dib bw1 shadow-5'>
            <img alt={name} src={pic}/>            
            <h3>{name}</h3>


            
            <button className='button' value={name} onClick= {(e) => saveLift(e.target.value)}>Save lift</button>            
        </div>
    );
}

let savedLifts = [];

function saveLift(lift){
    savedLifts.push(lift)
    console.log(savedLifts)
}
// need to create the saveLift() function 
// it will interpret the current lift  
// save it to a list 
// to be later saved in a database 
// along with other lifts
// and date performed

export default Card;