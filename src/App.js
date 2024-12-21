import './App.css';
import RecipeList from './RecipeList';
function App() {
  return (
    <div className='bg-gray-300 min-h-screen'>
     <h1 className='bg-gray-400 flex font-bold text-white text-4xl items-center ' >Recipe Book </h1>
    <RecipeList />
    </div>
  );
}
export default App;
