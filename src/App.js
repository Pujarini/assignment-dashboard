import "./App.css";
import TaskManager from "./components/TaskManager";
import data from "./data/users.json";

function App() {
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskManager data={data} />
    </div>
  );
}

export default App;
