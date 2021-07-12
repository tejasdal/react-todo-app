import './App.css';
import ToDoForm from './component/Form';
import ToDoList from './component/ToDoList';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);


  return (
  <div className="container">
    <ToDoForm setTasks={setTasks}/>
    <ToDoList isComplete={false} tasks={tasks} setTasks={setTasks} setOppTasks={setCompletedTasks}></ToDoList>
    <ToDoList isComplete={true} tasks={completedTasks} setTasks={setCompletedTasks} setOppTasks={setTasks}></ToDoList>
  </div>
  );
}

export default App;
