import React,{useEffect,useState} from 'react';
import './App.css';
import Navbar from './navbar';
import Footer from './Footer';
import Product from './products';

const App=()=>{
  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState("");
  const [query,setQuery]=useState();
  useEffect(()=>{
    fetchRecipe();
  },[query]);
  const fetchRecipe= async()=>{
    const response =await fetch(`https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=${query}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
        "x-rapidapi-key": "f7986b70ecmsh3d98881202f754ep1e0190jsnb0a27d39691c"
      }
    }).catch(error=>{
      alert(error)
    });
    const data = await response.json();
    setRecipes(data.hints)
    console.log(data.hints)
    
  }  
  // events

  const updateSearch=e=>{
    setSearch(e.target.value);
  }

  const getSearch=e=>{
    e.preventDefault();
    setQuery(search);
  }
  return(
    <div className='App'>
       <Navbar/>
      <form className='form' onSubmit={getSearch}>
        <input className='input' type="text" value={search} onChange={updateSearch}/>
        <button className='button'>search</button>
      </form>
      <div className='recipes'>
      {recipes.map(recipe=>(
        <Product
        key={recipe.food.foodId}
         title={recipe.food.label} 
         image={recipe.food.image} 
         category={recipe.food.category}/>
      ))}
      </div>
      <Footer/>
    </div>
  );
}
export default App;
