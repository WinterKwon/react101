import React, {useState, useEffect} from 'react';
import {InsertForm, ListView} from './components'

function App() {
  const [todo, setTodo] = useState([]);

  function handleInsert (value){
    setTodo((current)=>{
      const newTodo = [...current];
      newTodo.push({
        key : new Date().getTime(),
        value,
        isCompleted : false
      });
      return newTodo;
    })
  }




  return (
    <div className="App">
      <header className="App-header">
        <InsertForm onInsert={handleInsert} />
        <ListView />
      </header>
    </div>
  );
}

export default App;
