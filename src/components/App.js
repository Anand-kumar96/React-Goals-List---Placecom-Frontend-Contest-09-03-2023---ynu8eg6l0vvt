import React, { useState } from 'react'
import '../styles/App.css';
import GoalForm from './GoalForm';
import ListOfGoals from './ListOfGoals';

const App = () => {

const [allGoals, setAllGoals] = useState([]);

  const goalHandler = (goals)=>{

    return setAllGoals((prevGoals)=>[...prevGoals, goals]);

  }

  return (

    <div id="main">

      <GoalForm  onGoalHandler={goalHandler}/>

      <ListOfGoals goals={allGoals}/>

    </div>

  )

  

}

export default App;
