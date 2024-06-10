import { useEffect, useState } from "react";

function RecipeLists() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const fetchRecipeslists = [
        {id:1, name: 'Beaf recipes', ingredients:['spaghtee', 'minced meat', 'tomato sauce']},
        {id:2, name: 'Chicken recipes', ingredients:['chicken curry', 'minced chicken curry', 'tomato sauceges']}
      ]
      setRecipes(fetchRecipeslists);
    }
    fetchRecipes();
  }, []);

  const recip = {
    backgroundColor: "green",
    padding: "10px",
    margin: "10px",
    };
  return (
    <div className="recipes" style={recip}>
      <h1>Recipe lists</h1>
      {recipes.map(recipe => ( 
        <div key={recipe.id}>
          <h2>{recipe.name}</h2> 
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} style={{listStyleType:'none'}}> {ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
export default RecipeLists;