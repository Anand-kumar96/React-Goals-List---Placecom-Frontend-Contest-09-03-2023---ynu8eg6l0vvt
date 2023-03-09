import React, { useState } from 'react'
import '../styles/App.css';
import GoalForm from './GoalForm';
import ListOfGoals from './ListOfGoals';

const App = () => {

  const [allGoals, setAllGoals] = useState([]);

  return (
    <div id="main">
      <GoalForm />
      <ListOfGoals />
    </div>
  )
  
}


export default App;
const [allGoals, setAllGoals] = useState([]);

  const goalHandler = (goals)=>{

    return setAllGoals((prevGoals)=>[...prevGoals, goals]);

  }

  return (

    <div id="main">

      <GoalForm  onGoalHandler={goalHandler}/>

      {/* {allGoals.map((goal,idx) => <ListOfGoals key={goal.idx} mygoal={goal.goal} bygoal={goal.by}/>)} */}

      <ListOfGoals goals={allGoals}/>

    </div>

  )

  

}

export default App;
