import React from 'react';
import './App.css';
import AddMyTask from './components/AddMyTask.js';
import DisplayTasks from './components/DisplayTasks.js';

function App() {
  return (
    <div className="App">
      <AddMyTask />
      <DisplayTasks />
    </div>
  );
}

export default App;
