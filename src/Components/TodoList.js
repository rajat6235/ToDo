import React from "react";
import Todo from "./Todo"
function TodoList({todos,toggleComplete,removeTodo}){
          return(
             <div className="container"  >
        <div className="row">
        <h4 style={{color:"#7E7E7E"}}>To Do</h4>
  { todos.map(todo=>{
      return todo.completed===false?
    <Todo
     key={todo.id} 
     todo={todo}
      toggleComplete={toggleComplete}
      removeTodo={removeTodo } />
:null } )}
</div>
      <div className="row">
      <h4 style={{color:"#7E7E7E"}}>Done</h4>

{todos.map(todo=>{
      return todo.completed===true?
    <Todo
     key={todo.id} 
     todo={todo}
      toggleComplete={toggleComplete}
      removeTodo={removeTodo } />
: null })}
</div>
</div>

    )
}export default TodoList;