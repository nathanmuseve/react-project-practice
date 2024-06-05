import { useState } from "react";
import "./Register.css"

function Register() {
  const[inputs, setInputs] = useState({});
  
  const handleSubmit = (event) => {
    event.PreventDefault();
  }

   const handleChange = (evnt) => {
    const name = evnt.target.name;
    const value = evnt.target.value;
    setInputs(values => ({...values, [name]: value}));
   }
  return (
    <div id="login">
      <div>
        <h1>Register</h1>
        <p>
          Please fill in this form to create an account.
        </p>
        <hr />
        
      </div>
      <form id="myForm" onSubmit={handleSubmit}>
        <div>
          <label> 
           First Name
          <input type="text" id="fname" name="First Name" value={inputs.fullName || ""} onChange={handleChange} placeholder="Enter your first Name" />
          </label>
        </div>

        <div>
          <label> 
            Middle Name
          <input type="text" id="midname" name="Middle Name" value={inputs.middleName || ""} onChange={handleChange} placeholder="Enter your middle Name" />
          </label>
        </div>
        <div>
          <label >
            Last Name
            <input type="text" id="lname" name="Last Name" value={inputs.lastName || ""} onChange={handleChange} placeholder="Enter your last Name" />
          </label>
        </div>

        <div>
          <label >
            Email
          <input type="text" id="email" name="Email" value={inputs.email || ""} onChange={handleChange} placeholder="Enter your valid email address" />
          </label>
        </div>

        <div>
          <label> 
            Date of Birth
          <input type="date" id="dob" dname="DateofBirth" value={inputs.dayOb || null} onChange={handleChange} />
          </label>
        </div>

        <div>
          <label for="location">Location
          <input type="text" id="location" name="location" value={inputs.location || ""} onChange={handleChange} placeholder="Enter your location " />
          </label>
        </div>

        <div>
          <label >
            Tel No
          <input type="number" id="tel" max={10} name="tel" value={inputs.tel || ""} onChange={handleChange} placeholder="Enter valid phone number" />
          </label>
        </div>

        <div >          
          <input type="submit" id="sbmt" />
        </div>

      </form>
    </div>
  );
}

export default Register;