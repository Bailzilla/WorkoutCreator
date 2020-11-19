import React, { useState } from 'react';
import CardList from './CardList';
import './App.css';
import { lifts } from './lifts.js';

//update the <p> with id='add' to display the name and image of a random exercise from the clicked button value(object.type)
// function addLift(val){
//     const rando = Math.floor(Math.random() * 5)    
//     const result = lifts.filter(lift => lift.type === val)
//     let exercise = result[rando]
//     // console.log(result[rando].src) 
//     // document.getElementById('add').src = result[rando].src
//     }

function App() {
  const [routine, setRoutine] = useState([])
  const [selected, setSelected] = useState('')
  const addLift = (value) => {
      // need to write this part
  }
  console.log({selected});
  const filteredRoutine = routine;
  setRoutine() //where to call? what to pass?
  
  
  // !routine.length ?

  //   <button className='button' value ="push" onClick={e => setSelected(e.target.value)}>Add push exercise</button> :
  return (
      <div className="App">
          <header className="App-header">
            <h2 id='quote'></h2>
          </header>

          {/* 4 buttons used to add an exercise of their corresponding type  */}
            {/* <div className = 'container'>
              <button className='button' value ="push" onClick={e => addLift(e.target.value)}>Add push exercise</button>
              <button className='button' value="pull" onClick={e => addLift(e.target.value)}>Add pull exercise</button>
              <button className='button' value="anterior" onClick={e => addLift(e.target.value)}>Add anterior lower body exercise</button>
              <button className='button' value="posterior" onClick={e => addLift(e.target.value)}>Add posterior lower body exercise</button>
            </div> */}
          
          {/* image being changed during addLift call */}
            {/* <img id='add' src='' className="App-logo" alt="exercise" /> */}
          

            <button className='button' value="pull" onClick={e => addLift(e.target.value)}>Add pull exercise</button>
            <CardList routine={filteredRoutine} />

        </div>
  
    );
    
}

export default App;
