import './App.css';
import { lifts } from './lifts';
import React, {useState} from 'react'
import Card from './Card'


function App() {

  const rando = Math.floor(Math.random() * 5)  
  // setting the initial state for image and name
  const [resPic, setResPic] = 
  useState('https://images.unsplash.com/photo-1579364046732-c21c2177730d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')
  const [resName, setResName] = useState('Welcome')
  
  // runs anytime a button is clicked
  function addLift(value){
    const result = lifts.filter(lift => lift.type === value)
    setResPic(result[rando].src)
    setResName(result[rando].name)    
   }

  return (
    <div className='tc'>
      <h2 id='quote'> </h2>

      <div className='button-box'>        
        <button className='button grow bg-light-green' value='push' onClick= {(e) => addLift(e.target.value)}>Select a push exercise</button>
        <button className='button grow bg-light-green' value="pull" onClick={(e) => addLift(e.target.value)}>Select a pull exercise</button>
        <button className='button grow bg-light-green' value="anterior" onClick={(e) => addLift(e.target.value)}>Select an anterior lower body exercise</button>
        <button className='button grow bg-light-green' value="posterior" onClick={(e) => addLift(e.target.value)}>Select a posterior lower body exercise</button>        
      </div>

      <h6>please choose no more than 1 of the same exercise in a row</h6>

      {/* calling our new component and passing the image and name values */}
      <Card pic={resPic} name={resName}/>

    </div>
  )
}

export default App;