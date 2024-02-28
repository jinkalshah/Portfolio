
import React,{ useState,useEffect } from 'react';
import "./Todo.css";
import axios from 'axios'


function Todo() {

  const [currentTodo,setCurrentTodo]=useState("")
  const [todoList,setTodoList]= useState([])
  const [isAddingNew,setIsAddingNew]= useState(false)
  // const [strikeList, setStrikeList] = useState([])

  const addNewTask= async(e)=>{
    setTodoList((oldarray)=> [...oldarray,{Task: currentTodo,isDone: false}]);
    
      fetch('http://localhost:2000/Todo/post',{
        method:'Post',
        headers:{
          "Access-Control-Allow-Origin": "*",
          'content-type': 'application/json'
        },
        body: JSON.stringify({Task: currentTodo, TimeStamp:new Date(),isDone: false})
      }).then(()=>fetchTodo())
      setCurrentTodo("");
  }

  const updateTask=async(index)=>{
    fetch(`http://localhost:2000/Todo/update/${todoList[index]._id}`,{
      method:'Put',
      headers:{
        "Access-Control-Allow-Origin": "*",
        'content-type': 'application/json'
      },
    })
    setTodoList((oldList)=>{
      const myList=[...oldList];
      myList[index].isDone=true;
      return myList
    })
  }

  const deleteTask=async(index)=>{

      fetch(`http://localhost:2000/Todo/delete/${todoList[index]._id}`,{
        method:'Delete',
        headers:{
          "Access-Control-Allow-Origin": "*",
          'content-type': 'application/json'
        },
      })
      setTodoList(()=> {
        const myList=[...todoList]
        myList.splice(index,1);
        return myList} );
  }

  const fetchTodo=()=>{
    fetch('http://localhost:2000/Todo/get',{
      method: 'GET',
      headers:{
        "Access-Control-Allow-Origin": "*",
        'content-type': 'application/json'
      }
    })
    .then((res)=>res.json())
    .then((result)=>setTodoList(result))
    .catch((err)=>console.log(err))
  }

  useEffect(()=>{
    fetchTodo()
  },[])
  
  return (
    <div className="container" style={{marginTop: "100px"}}>
      <div className="row">
        <div className="col-lg-12 text-center">
      <h2>Todo App</h2>
      
      <div className="input-group" style={{justifyContent:"center"}}>
        <div className='form-outline' data-mdb-input-init onSubmit={addNewTask} >
        <input type="search" id="form1" className="form-control" value={currentTodo} style={{textDecoration: "none"}} onChange={(e)=> setCurrentTodo(e.target.value)}/>
        </div>

      <div>
        <button type="button" className="btn btn-primary" disabled={!currentTodo} onClick={addNewTask}>Add
        </button>
      </div>
      </div>
      
      <div className="d-flex justify-content-center">
        <ul className='list-group list-group-flush'>

        {
          todoList.map((ele,index)=> {
            return (
              <div style={{display: "flex"}}>
                <li className='list-group-item' style={{textDecoration: ele.isDone ? "line-through" : "none"}} key={ele.Task+index}>{ele.Task}</li>
                
                <div style={{padding:"5px"}}>

                <button type="button" class="btn btn-danger btn-circle btn-sm"  style={{marginLeft: "10px"}} onClick={()=>deleteTask(index)}>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
                </svg></button>
                </div>

                <div style={{padding:"5px"}}>

                  <button type="button" class="btn btn-success btn-circle btn-sm" disabled={ele.isDone} onClick={()=>updateTask(index)} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"/>
                </svg></button>
                </div>

              </div>
            )
          })
        }
        </ul>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;