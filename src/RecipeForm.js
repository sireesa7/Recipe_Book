import { useState, useEffect } from 'react';

export default function RecipeForm({ onSave, recipeToEdit }) {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  useEffect(() => {
    if (recipeToEdit) {
      setName(recipeToEdit.name);
      setIngredients(recipeToEdit.ingredients);
      setInstructions(recipeToEdit.instructions);
    }
  }, [recipeToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !ingredients || !instructions) {
      alert('All fields are required!');
      return;
    }

    const recipeData = { name, ingredients, instructions };
    if (recipeToEdit) {
      recipeData.id = recipeToEdit.id;
    }

    onSave(recipeData);

    setName('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <div className="p-3">
      <form onSubmit={handleSubmit}>
        <div className="md:flex mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold mb-1" htmlFor="name">
              Name:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter recipe name"
              className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4"
            />
          </div>
        </div>

        <div className="md:flex mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold mb-1" htmlFor="ingredients">
              Ingredients:
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea
              id="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="Enter ingredients"
              className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4"
            />
          </div>
        </div>

        <div className="md:flex mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold mb-1" htmlFor="instructions">
              Instructions:
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea
              id="instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="Enter instructions"
              className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4"
            />
          </div>
        </div>

        <button type="submit" className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
          {recipeToEdit ? 'Update Recipe' : 'Add Recipe'}
        </button>
      </form>
    </div>
  );
}
