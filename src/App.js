import { render } from '@testing-library/react';
import React,{useEffect,useState} from 'react';
import './App.css';
import Navbar from './navbar';
import Footer from './Footer';
import Product from './products';

const App=()=>{
  const [recipes,setRecipes]=useState([]);
  useEffect(()=>{
    fetchRecipe();
  },[]);
  const fetchRecipe= async()=>{
    const response =await fetch(`https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=pork`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
        "x-rapidapi-key": "f7986b70ecmsh3d98881202f754ep1e0190jsnb0a27d39691c"
      }
    }).catch(error=>{
      alert(error)
    });
    const data = await response.json();
    console.log(data.hints);
    setRecipes(data.hints)
    
  }  
  const onChangeHandler=(e)=>{
  }

  const submitHandler=(e)=>{
    e.preventDefault();
  }

  return(
    <div className='App'>
       <Navbar/>
      <h2>Hello world</h2>
      <form className='form' onSubmit={submitHandler}>
        <input className='input' type="text" onChange={onChangeHandler}/>
        <button className='button' type='submit'>search</button>
      </form>
      {recipes.map(recipe=>(
        <Product title={recipe.food.label} image={recipe.food.image} category={recipe.food.category}/>
      ))}
      <Footer/>
    </div>
  );
}
export default App;
