/*import {useState} from 'react';

import './image.css';

function Imaage(){
    const [value,setValue] = useState(0)
    const [result,setResult]= useState([0])
    
    
        result.map((item)=>{
        return <img key={item.id} src={item.urls.regular} alt="abc"/>
          })
             
    
    return(
        <>
    //<div className="image">
        <div className="menu">
           <h1>Unsplash Clone</h1>
        </div>
        <div className="mydiv">
            <input type="text" value={value} placeHolder="Search Anything" onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={()=>fetchImages()}>Search</button>
        </div>
      //  </div>
    </>
    {
        result.map((item)=>{
        return <img key={item.id} src={item.urls.regular} alt="abc"/>
          })
        }         
}
    );
}
export default Image;*/