import React from "react";
import "./Todo.css";
function Todo({todo,toggleComplete,removeTodo}){
    function checkboxClick(){
        toggleComplete(todo.id);
    }
    function removeClick(){
        removeTodo(todo.id);
    }
    
    return(
    
       <div className="col">
             <div className="card">
                 <div className="card-body" variant="body1"
                 onClick={checkboxClick}>
                     <h5 className="card-title">
                     {todo.title}
                     </h5>
                     <p className="card-text">
                     {todo.task}
                     </p>
                     <input type="checkbox" onClick={checkboxClick} checked={todo.completed?"checked":undefined}/>
    
                     <i onClick={removeClick} className="fa fa-trash-o dlt "></i>
                 </div>
                 </div>
                 </div>
         
        

        );
}
export default Todo;