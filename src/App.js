import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TaskList } from "./components/TaskList";
import './App.css';
import AddTasks from "./components/AddTasks";

function App() {

  return (
    <div className="App">
      <Header />
        <AddTasks />
      <TaskList />
      <Footer />
    </div>
  );
}

export default App;