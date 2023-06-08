import './App.css';
import React, { useState } from 'react'
import AddForm from './components/addform';
import DispList from './components/displist';

function App() {
  const [list, setList] = useState([]);
  const addTask = (obj) => {
    setList((prev) => { return [...prev, obj] })
  };
  const updateList = (task, index) => {
    let newList = [...list]
    newList.splice(index, 1, task)
    setList(newList)
  }
  const removeTask = (index) => {
    let newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }
  return (
    <div className="App">
      <AddForm addTask={addTask} list={list} />
      <DispList list={list} updateList={updateList} removeTask={removeTask} />
    </div>
  );
}

export default App;
