import React from "react";
import ReactDOM from "react-dom";
const name = "Showkat Ali";
//const element = <h1>Hello {name}</h1>

function fullName (user){

return user.firstName + ' '+ user.lastName;
}

const user= {
    firstName:'Showkat',
    lastName : 'Ali'
};

function Click({local}){
    return (
        <h1>
            <span>{new Date().toLocaleTimeString(local)}</span><br/>
            Hello, {fullName(user)}
        </h1>
    );
    
}
  
    ReactDOM.render(<Click  local="bn-BD"/>, document.getElementById('root'));

