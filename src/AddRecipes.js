import { useState } from "react";

function AddRecipes() {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [recipe, setRecipes] = useState([]);

  const handeleAddRecipe = () => {
    const newRecipe = {
      id: recipe.length + 1,
      name: name,
      ingredients: ingredients.split(',')
      }
    setRecipes([...recipe, newRecipe]);
    setName('');
    setIngredients('');
    console.log(recipe);
    console.log(newRecipe);
  }

  return (
    <div>
      <h1>Add Recipes</h1>
      <input type="text" placeholder="Recipe Name" value={name} onChange={(e) =>setName(e.target.value)} required style={{cursor:'pointer', fontSize:'1.5rem', padding:'4px', border:" 2px solid green", borderRadius:'4px', margin: '0.4rem'}}/>

      <input type="text" placeholder="Ingredient Name" value={ingredients} onChange={(e) => setIngredients(e.target.value) } required style={{cursor:'pointer', fontSize:'1.5rem', padding:'4px', border:" 2px solid green", borderRadius:'4px', margin: '0.4rem'}}/>

      <button onClick={handeleAddRecipe} style={{cursor:'pointer', backgroundColor: "green", fontSize:'1.5rem', padding:'4px', border:" 2px solid transparent", borderRadius:'4px', margin: '0.4rem'}}>Add Recipe</button>
    </div>
  )
}
export default AddRecipes;