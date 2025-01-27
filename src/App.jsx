import { useState } from 'react'
import './App.css'

function Person() {
  const [person, setPerson] = useState({ firstName: "John", age: 25, lastName: "Doe" });

  const handleIncreaseAge = () => {
    // copy the existing person object into a new object
    // while updating the age property
    setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
  };
  const handleDecreaseAge = () => {
    // copy the existing person object into a new object
    // while updating the age property
    setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age - 1 }));
  };
  const changeLastName = (f) => {
    
    if(!f.target.value){console.log("No Changes")}
    else{
      setPerson((prevPerson) => ({ ...prevPerson,lastName: f.target.value}));
    }
  };
  const changeFirstName = (f) => {
    
    if(!f.target.value){console.log("No Changes")}
    else{
      setPerson((prevPerson) => ({ ...prevPerson,firstName: f.target.value}));
    }
  };
  return (
    <>
      
      <button onClick={handleIncreaseAge}>Increase age</button>
      <button onClick={handleDecreaseAge}>Decrease age</button>
      <label>
        First Name:
        <input type="text" onChange={changeFirstName}/>
      </label>
      <label>
        Last Name:
        <input type="text" onChange={changeLastName} />
      </label>
      <h1>{person.firstName +" "+person.lastName}</h1>
      <h2>{person.age}</h2>
    </>
  );
}

export default Person;