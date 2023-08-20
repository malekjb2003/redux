import React from 'react';
import './App.css';
import ListTask from './components/ListTask';
import AddTask from './components/AddTask';

function App() {
  return (
    <div className="app">
      <h1>Task List</h1>
      <AddTask />
      <div className="filters">
        <ListTask filter="all" />
        <ListTask filter="done" />
        <ListTask filter="not" />
      </div>
    </div>
  );
}

export default App;