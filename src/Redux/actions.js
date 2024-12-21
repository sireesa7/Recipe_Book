export const ADD_RECIPE = 'ADD_RECIPE';
export const REMOVE_RECIPE = 'REMOVE_RECIPE';
export const EDIT_RECIPE = 'EDIT_RECIPE';

export const addRecipe = (recipe) => {
    return{
    type: ADD_RECIPE,
    payload : recipe
    }
}
export const removeRecipe = (id) => {
    return{
    type: REMOVE_RECIPE,
    payload : id }
}
export const editRecipe = (id, updatedRecipe) => {
    return {
    type : EDIT_RECIPE,
    payload : {id, updatedRecipe}
    }
}
