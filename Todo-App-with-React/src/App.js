import { useEffect, useState } from "react";
import Switch from 'react-switch'
import TaskContainer from "./components/TaskContainer";


function App() {

  const [tasks, setTasks] = useState([])
  // const [dark, setDark] = (true)

  useEffect(() =>{
    let getTodo = localStorage.getItem('todos')
    if(getTodo){
      setTasks(JSON.parse(getTodo))
    }
  }, [])

  return (
    <div className="App">
      <div  className="header">
        <h1>TODO App (React)</h1>
      </div>
      
      <TaskContainer tasks={tasks} setTasks={setTasks}/>

    </div>
  );
}

export default App;
