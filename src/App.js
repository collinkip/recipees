import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './App.css';

const App=()=>{
  const APP_ID="f6412446";
  const APP_KEY="a50f4012d2a24c17192f3073a3566333";
  const url=" https://api.edamam.com/api/recipes/v2";
  const exampleReq=`https://api.edamam.com/api/recipes/v2/0123456789abcdef0123456789abcdef?app_id=${APP_ID}&app_key=${APP_KEY}`;

  const[counter,setCounter]=useState(0);
  useEffect(async()=>{
    fetRecipe();

    console.log("useRffect has been run");
  },[]);

  const fetRecipe=async()=>{
    const response=await fetch(exampleReq)
    const data=await response.json()
    console.log(data)
  }



  return(
    <div className='App'>
      <h2>Hello world</h2>
      <form className='form' action="submit">
        <input className='input' type="text" />
        <button className='button' type='submit'>search</button>
      </form>
    </div>
  );
}

export default App;
