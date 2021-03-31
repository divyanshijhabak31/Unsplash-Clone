import React,{useState} from "react";
import './todo.css';
import Todolist from './Todolist';

const Todo =()=> {
  const [inputList,setInputList]= useState("");
  const [Item,setItem]= useState([]);
  const item=(event)=>{
    setInputList(event.target.value);
  };

const listofitem=() =>{
    setItem((olditem)=>{
      return [...olditem, inputList];
    });
    setInputList("");
  };

  const deleteItem=(id)=>{
    setItem((olditem)=>{
      return olditem.filter((arr,index)=>{
        return index!==id
      });
    });
  };

    return(
        <>
        <div className="main">
           <div className="center">
           <br/>
             <h1>ToDo List</h1>
             <input type="text" placeholder="Add an item" value={inputList} onChange={item}/>
             <button onClick={listofitem}>+</button>

            <ol>
             { Item.map((itemval,index)=>{

              return <Todolist key={index} id={index} text={itemval} onSelect={deleteItem}/>;
             })}
           </ol>
           </div>
        </div>

        </>
    );
}
export default Todo;