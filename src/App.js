
import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState ([]);

  const inputRef = useRef()

  const handelAddTodo = () => {
    const text = inputRef.current.value;
    const newItem = {completed: false, text};
    setTodos([...todos, newItem])
    inputRef.current.value = "";
  }

  const handelItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos);
  }

  const HandelDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  console.log(todos);
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className='todo-container'>
        <ul>
          {todos.map(({text, completed}, index) => {
            return <div className='item'>
              <li className={completed? 'done' : ''} key={index} onClick={() => handelItemDone(index)}>{text}</li>
              <span className='delete' onClick={() => HandelDeleteItem(index)}>❌</span>
            </div>;
          })}
        </ul>
        <input className='input' ref={inputRef} placeholder='Enter Item ....' />
        <button className='btn' onClick={handelAddTodo}>Add</button>
      </div>
    </div>
  );
}

export default App;
