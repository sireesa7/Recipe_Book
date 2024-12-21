import { ADD_RECIPE, REMOVE_RECIPE, EDIT_RECIPE } from "./actions";
const initialState = {
    recipes : []
}

const reducer = (state=initialState, action) => {
    switch(action.type)
    {
        case ADD_RECIPE:
            return{
                ...state, recipes : [...state.recipes,action.payload]
            }
        case REMOVE_RECIPE:
            return{
                ...state, recipes : state.recipes.filter(recipe => recipe.id !== action.payload)
            }
        case EDIT_RECIPE:
                return{
                ...state, 
                recipes : state.recipes.map(recipe => 
                    recipe.id === action.payload.id 
                    ? {...recipe, ...action.payload.updatedRecipe} 
                    : recipe 
                )
                };
        default: return state;
    }
}
export default reducer;