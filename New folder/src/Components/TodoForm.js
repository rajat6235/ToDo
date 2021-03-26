import React,{useState} from "react";
import "./TodoForm.css"
function TudoForm({addTodo}){
    const[todo,setTodo]=useState({
        id:"",
        task:"",
        title:"",
        completed:false
    });
    function InputChanget(e){
      setTodo({...todo,title:e.target.value})
         }
    function InputChange(e){
        setTodo({...todo,task:e.target.value});  
      }
    function Submit(e){
        e.preventDefault();
        if((todo.task).trim()){
            addTodo({...todo,id:Math.floor(Math.random()*100)+1})  
        setTodo({...todo,task:"",title:""});
        
        }
        
    }
    return(
        <form onSubmit={Submit}>
            <div className="inputss">
            <input
            className="titlei"
            name="title"
            cols="35"
            type="text"
            value={todo.title}
                onChange={InputChanget}
            />
            <br/>
              <input
             className="taski"
            name="task"
            type="text"
            rows="6"
            cols="35"
            value={todo.task}
                onChange={InputChange}
               
            />
            </div>
            <button className="btn" type="Add to-do">Add to-do</button>
        </form>
    )
}export default TudoForm;