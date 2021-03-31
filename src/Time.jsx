/*import {useState} from 'react';

const Time=()=>{
    let newTime=new Date().toLocaleTimeString();
    const state= useState();
 
    let [Ctime,setCtime]=useState(newTime);
    const Update=()=>{
        let newTime=new Date().toLocaleTimeString();
        setCtime(newTime);
    };
    setInterval(Update,1000);

    return(
        <>
        <h1>{Ctime}</h1>
        <button onClick={Update}>Get Time</button>
        </>
    );
};
export default Time;*/