import './App.css';
import { lifts } from './lifts.js';


//update the <p> with id='add' to display the name and image of a random exercise from the clicked button value(object.type)
function addLift(val){
    const rando = Math.floor(Math.random() * 5)    
    const result = lifts.filter(lift => lift.type === val)
    let exercise = result[rando]
    // console.log(result[rando].src) 
    // document.getElementById('add').src = result[rando].src
    return (
      <div>
        <img alt='exercise demo' src={ exercise.src } />
          <div>
            <h2>{exercise.name}</h2>
          </div>
      </div>
    )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h2 id='quote'> </h2>

      {/* 4 buttons used to add an exercise of their corresponding type  */}
        <div className = 'container'>
          <button className='button' value ="push" onClick={e => addLift(e.target.value)}>Add push exercise</button>
          <button className='button' value="pull" onClick={e => addLift(e.target.value)}>Add pull exercise</button>
          <button className='button' value="anterior" onClick={e => addLift(e.target.value)}>Add anterior lower body exercise</button>
          <button className='button' value="posterior" onClick={e => addLift(e.target.value)}>Add posterior lower body exercise</button>
        </div>
      
      {/* image being changed during addLift call */}
        {/* <img id='add' src='' className="App-logo" alt="exercise" /> */}
        
       
      
      </header>
    </div>
  );
}

export default App;
