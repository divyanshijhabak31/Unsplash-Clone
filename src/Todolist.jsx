import react from 'react';

const Todolist=(props)=>{

      
    
    return(
        <>
        <div className="todo">
         <button onClick={()=>{
             props.onSelect(props.id)
         }}>x</button>
        <li>{props.text} </li>
      </div>
       </>);
  
}
export default Todolist;