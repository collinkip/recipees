import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './App.css';

const App=()=>{

  
  const[container,setContainer]=useState('');
  const[endpoints,setEndpoints]=useState('');

  useEffect(()=>{
    fetchRecipe();
  },[endpoints])


  const fetchRecipe=()=>{
    fetch(`https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=${endpoints}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
      "x-rapidapi-key": "f7986b70ecmsh3d98881202f754ep1e0190jsnb0a27d39691c"
    }
  })
  .then(response => {
    console.log(response.json())
  })
  .then(data=>{
    setContainer(data.hints)
  })
  .catch(err => {
    console.error(err);
  });


  }

  
  const onChangeHandler=(e)=>{
    setEndpoints(e.target.value)
  }

  const submitHandlet=(e)=>{
    e.preventDefault();
  }

  return(
    <div className='App'>
      <h2>Hello world</h2>
      <form className='form' onSubmit={submitHandlet}>
        <input className='input' type="text" onChange={onChangeHandler} value={endpoints}/>
        <button className='button' type='submit'>search</button>
      </form>
      <p>food available{container}</p>
    </div>
  );
}

export default App;
