// import PropsItem from "./PropsItems";
import { useState } from "react";

function Props() {
  const [persons, setPersons] = useState([
    {id:1, firstName:"john", middleName:"Kamau", lastName:"Njuguna", years: 34, dateOfBirth:"14/02/1998", location:"Nairobi", Country:"Kenya"},

    {id:2, firstName:"joan", middleName:"Kim", lastName:"Naomy", years: 32, dateOfBirth:"04/12/1989", location:"Nakuru", Country:"Tanzania"},

    {id:3, firstName:"Getrude", middleName:"Arnold", lastName:"Hrurriet", years: 20, dateOfBirth:"14/02/1999", location:"Kisumu", Country:"Kenya"}
  ])

  return ( 
    <div>
      <h1>My Details with props</h1>
      {persons.map((person) =>(
      <div key={person.id}> 
        <p>{person.firstName}  {person.lastName} is {person.years} from {person.location}</p>
      </div>))}
    </div>
   );
}
export default Props;