import { useState } from "react";
import "./App.css"
function App() {

  const [todolist, setTodolist] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) =>{
    event.preventDefault();
    setTodolist(current =>{
      return [ ...current, {
        id: new Date().getTime(),
        isCompleted : false,
        value : inputValue

      }]
    });

    setInputValue("");
  };

  const handleCompleteClick = (index) =>{
    setTodolist((current) =>{
      const newList= [...current];
      newList[index].isCompleted = true;
      return newList;

    })
  };

  const handleRemoveClick = (index) =>{
    setTodolist((current) =>{
      const newList= [...current];
      newList.splice(index, 1);
      return newList;

    });
  };

  return (
    <div>
        <ol id="todo-list">
          {todolist.map((item, index) => (
            <li className={item.isCompleted === true ? "completed" : ""}>
              
            <span >
              {item.value}</span>
            <button onClick={()=> handleCompleteClick(index)}>완료</button>
            <button onClick={()=> handleRemoveClick(index)}>삭제</button>
        
            </li>
          ) )}
        </ol>
        <form id = "create" action="" onSubmit={handleSubmit}>
            <input 
            type="text" 
            value = {inputValue} 
            onChange={(event)=>{
              setInputValue(event.target.value)
            }}
            />
            <button type="submit">등록</button>
        </form>
    </div>
    
  );
};

export default App;
