import React, {useState, useEffect} from 'react';
import {InsertForm, ListView} from './components'

function App() {
  const [todos, setTodos] = useState([]);

  function handleInsert (value){
    setTodos((current)=>{
      const newTodo = [...current];
      newTodo.push({
        key : new Date().getTime(),
        text : value,
        isCompleted : false
      });
      return newTodo;
    })
  }




  return (
    <div className="App">
      <header className="App-header">
        <InsertForm onInsert={handleInsert} />
        <ListView todoList = {todos} />
      </header>
    </div>
  );
}

export default App;
