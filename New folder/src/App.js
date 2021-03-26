import React,{ useState,useEffect} from "react";
import axios from 'axios';
import './App.css';
import TudoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
  function App() {
  const[todos,setTodos]= useState([]);

  useEffect(()=>{
    fetchTodos();
      },[])
  const fetchTodos=async ()=>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
    await new Promise((x)=> setTimeout(x,1))
    for (var i =0;i<res.data.length;i++){
      if(res.data[i].completed===true){
        setTodos(res.data.splice(0,4))
      }
      else{
        setTodos(res.data.splice(4,8))
      }
    }
    
  }
 
    function addTodo(todo ){
    setTodos([todo,...todos]);
  }
  function toggleComplete(id){
    setTodos(
      todos.map(todo=>{
        if (todo.id === id) {
        return{
          ...todo,
          completed: !todo.completed
        };}
        return todo;
      })
    )
  }
  function removeTodo(id){
setTodos(todos.filter(todo=>todo.id !==id));
  }
  return (
    <div className="App">
      <header className="App-header">
        <p className="heading">To-Do Application</p>
        <TudoForm addTodo={addTodo}/>
        <TodoList 
        todos={todos}
         toggleComplete={toggleComplete}
           removeTodo={removeTodo}
         />
      </header>
    </div>
  );
}
export default App;
