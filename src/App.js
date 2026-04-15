import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TaskList } from "./components/TaskList";
import './App.css';
import AddTasks from "./components/AddTasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
      
    ]);
  return (
    <div className="App">
      <Header />
        <AddTasks tasks ={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      <Footer />
    </div>
  );
}

export default App;