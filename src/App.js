import React from 'react'
import './App.css';

function App() {
  const [activity,setActivity] = React.useState('Bored? Click on the Button , I will suggest an activity')
  const fetchData = async() => {
    const res = await fetch('https://www.boredapi.com/api/activity');
    const data = await res.json()
    setActivity(data.activity)
  }
  return (
    <div className="App">
      <div className="innerDiv">
      <h1>{activity}</h1>
      <button className='searchButton' onClick={fetchData}>Click Me</button>
      </div>
    </div>
  );
}

export default App;
