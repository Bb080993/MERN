import React from 'react';
import './App.css'
import PersonCard from './assets/components/PersonCard'

function App() {
  

  return (
    <>
      <PersonCard   lastName={"Francis"}
        firstName={"Brittany"}
        age={"30"}
        hairColor={"brown"}     />
      
      <PersonCard lastName={"Butler"}
        firstName={"Clinton"}
        age={"30"}
        hairColor={"brown"}  />
        
        
     
      <PersonCard lastName={"Butler"}
        firstName={"Melinda"}
        age={"60"}
        hairColor={"grey"} />
        
      <PersonCard lastName={"DePace"}
        firstName={"Kristin"}
        age={"36"}
        hairColor={"black"}/>
        
      
      
    </>
  )
}

export default App
