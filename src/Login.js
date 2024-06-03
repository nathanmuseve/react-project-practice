import { useState } from "react";
import "./Login.css"

export default function Login() {
const[inputs, setInputs] = useState({});

  const handleSubmit = (event) =>{
    event.PreventDefault();
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]:value}));
  };
  return (
    <div id="logn">
      <div>
        <h1>Login</h1>
      </div>
      <form id="myForm1" onSubmit={handleSubmit}>
        <div>
          <label for="username">UserName
          <input type="text"  id="username" name="UserName" value={inputs.name} onChange={handleChange}  placeholder="Please enter your username"/>
          </label>
        </div>

        <div>
          <label for="password">Password
          <input type="password" id="password" name="Password" value={inputs.Password} onChange={handleChange} />
          </label>
        </div>

        <div>
          <input type="submit" id="submt" />
        </div>     
        <div>
          <p>Don't have an account?<a href="#lo">Sign Up</a></p>

        </div>
      </form>
    </div>
  );
}