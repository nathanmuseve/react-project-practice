import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Register from "./Register";
import Login from "./Login";
import Contacts from "./Contacts"
import RecipeLists from "./RecipeLists";
import AddRecipes from "./AddRecipes";
function App() {
  return (
    <div>  
    <Navbar />
    <Home />
    <About />
    <AddRecipes />
    <RecipeLists />
    <Login />
    <Register />
    <Contacts />
   </div> 
  );
}

export default App;
