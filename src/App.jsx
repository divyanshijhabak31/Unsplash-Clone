import Card from './Card';
import './card.css';
import Sdata from './Sdata';

function ncard(val){
  return(
  <Card
  key={val.id}
  imgsrc={val.imgscr}
  title={val.title}
  sname={val.sname}
  link={val.links}
  />
);
}

const App=()=>(
  <>
  <h1 className="menu">List of top 5 Netflix Series in 2020</h1>
  
  {Sdata.map(ncard)}
 
  </>
);
export default App;