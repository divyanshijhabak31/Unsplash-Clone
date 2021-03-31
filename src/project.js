import React from 'react';
import ReactDOM from 'react-dom';

let curDate=new Date();
curDate=curDate.getHours();
let greeting='';
const cssstyle={ };

if(curDate>=1 && curDate<12){
greeting='Good Morning';
cssstyle.color='blue';
cssstyle.textAlign='center';
}

else if(curDate>=12 && curDate<18){
greeting='Good Afternoon';
cssstyle.color='GREEN';
cssstyle.textAlign='center';
}

else if(curDate>=18 && curDate<21){

greeting='Good Evening';
cssstyle.color='red';
cssstyle.textAlign='center';
}

else{
greeting='Good Night';
cssstyle.color='orange';
cssstyle.textAlign='center';
}

ReactDOM.render(
    <h1>Hello sir,<span style={cssstyle}> {greeting} </span></h1>,
    document.getElementById('root')
 );