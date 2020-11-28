import React, { useState } from 'react';
import './App.css';
import Todolist from './components/Todolist';




function App() {

  const [todo, setTodo] = useState({description: '', date: ''});
  const [todos, setTodos] = useState([]);


  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
   
   } 

  function deleteItem(event) {
    event.preventDefault();
    setTodos(todos.filter((item, index) => parseInt(event.target.id) !== index));
  }
  

  return (
    <div className="App">
      <header className="App-header">
      <h1>Simple Todolist</h1>
      </header>

      <form onSubmit={addTodo}>
      <p>Add Todo:</p>
       Description: <input type="text" onChange={inputChanged} placeholder="Description" name="description" value={todo.description}/>
        Date: <input type="text" onChange={inputChanged} placeholder="Date" name="date" value={todo.date}/>
        
       
    <input type="submit" value="Add"/>
    
    </form>

   <Todolist todos={todos} deleteItem={deleteItem}/>
 
  
   

   </div>
    
  );
  }

export default App;
