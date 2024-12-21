import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRecipe, removeRecipe, editRecipe } from './Redux/actions';
import RecipeForm from './RecipeForm';

export default function RecipeList() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const [editingRecipe, setEditingRecipe] = useState(null);
  const [viewRecipeId, setViewRecipeId] = useState(null); 

  const handleSaveRecipe = (recipeData) => {
    if (recipeData.id) {
      dispatch(editRecipe(recipeData.id, recipeData));
    } else {
      dispatch(addRecipe(recipeData));
    }
  };

  const handleEditRecipe = (recipe) => {
    setEditingRecipe(recipe); 
  };


  const handleDeleteRecipe = (id) => {
    dispatch(removeRecipe(id));
  };


  const handleViewRecipe = (id) => {
    setViewRecipeId(viewRecipeId === id ? null : id); 
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe Book</h1>
      

      <RecipeForm onSave={handleSaveRecipe} recipeToEdit={editingRecipe} />
      
      <h2 className="text-2xl font-bold mt-6">Saved Recipes</h2>
      {recipes.length > 0 ? (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id} className="mb-4">
              <h3 className="text-xl font-semibold">{recipe.name}</h3>
              <p>{recipe.ingredients.substring(0, 30)}...</p>


              <button
                className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full mr-2"
                onClick={() => handleViewRecipe(recipe.id)}
              >
                {viewRecipeId === recipe.id ? 'Hide Details' : 'View'}
              </button>

              <button
                className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full mr-2"
                onClick={() => handleEditRecipe(recipe)}
              >
                Edit
              </button>

              <button
                className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => handleDeleteRecipe(recipe.id)}
              >
                Delete
              </button>

              {viewRecipeId === recipe.id && (
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                  <h4 className="text-lg font-semibold">Ingredients</h4>
                  <p>{recipe.ingredients}</p>
                  <h4 className="text-lg font-semibold mt-2">Instructions</h4>
                  <p>{recipe.instructions}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No recipes yet</p>
      )}
    </div>
  );
}
