import  {useState} from 'react';


const Click =()=>{
    //const state= useState();
    let [count, setCount] = useState(0);

    const IncNum =()=>{
    setCount(count++);
  //console.log("clicked");
};

   return(
       <>
       <h1>{count}</h1>
       <button onClick={IncNum}>Click Me</button>
       </>

   );

};
export default Click;