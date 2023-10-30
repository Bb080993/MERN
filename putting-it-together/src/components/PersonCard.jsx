import React, { useState } from 'react';

const PersonCard= (props) =>{
    const {firstName, lastName, age, hairColor}=props;
    const [personAge, setPersonAge]= useState(age);
    const agePlusOne=()=> {setPersonAge(personAge + 1);}
    return(
        <div >   
            <h1> {lastName}, {firstName}  </h1>
            <p> Age: {personAge}</p>
            <p>Hair Color {hairColor} </p>
            <button onClick={agePlusOne}>Birthday Button for {firstName} {lastName}</button>
        </div>

    );


}

export default PersonCard;