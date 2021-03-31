//import react from 'react';
function Card (props){
    return(
<>
  <div className="cards">
    <div className="card">
        <img src ={props.imgsrc} alt="abc" className="cardimg"/>
      <div className="cardinfo">
        <span className="cardcat">{props.title} </span>
        <h3 className="cardtit"> {props.sname} </h3>
        <a href ={props.link} target="blank">
          <button classname="btn">Watch Now</button>
        </a>
      </div>  
    </div>
  </div>
</>
);
}
export default Card;