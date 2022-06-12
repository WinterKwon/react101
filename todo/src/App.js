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
  };

  function handleCompleteClick(index){
    setTodos((current)=>{
      const newTodo = [...current];
      newTodo[index].isCompleted = true;
      return newTodo
    })

  };

  function handleRemoveClick(index){
    setTodos((current)=>{
      const newTodo = [...current];
      newTodo.splice(index, 1);
      return newTodo

    })

  };




  return (
    <div className="App">
      <header className="App-header">
        <InsertForm onInsert={handleInsert} />
        <ListView todoList = {todos} onComplete={handleCompleteClick} onRemove = {handleRemoveClick}/>
      </header>
    </div>
  );
}

export default App;
