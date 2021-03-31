import React,{useState} from 'react';
import './App.css';

function App(){
  const [value,setValue] = useState("")
  const [results,setResults] = useState([])
  const fetchImages = ()=>{
    fetch(`https://api.unsplash.com/search/photos?client_id=o8zKpcVylynJ1H_8vpOWQNgKl-WRkltiE35acZuyFXY&query=${value}&orientation=squarish&per_page=20`)
    .then(res=>res.json())
    .then(data=>{
      //console.log(data)
    setResults(data.results)     
    })
}
  return(
    <div className="image">
        <div className="menu">
           <h1>Unsplash Clone</h1>
        </div>
        <div className="mydiv">
            <input type="text" value={value} placeHolder="Search Anything" onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={()=>fetchImages()}>Search</button>
        </div>

        <div className="gallery">
          {
            results.map((item)=>{
              return <img className="item" key={item.id} src={item.urls.regular} alt=""/>
            })
          }
        </div>
    </div>
    
  );

  }
export default App;



























/*import logo from './logo.svg';
import './App.css';*/

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
