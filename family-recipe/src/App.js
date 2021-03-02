import './App.css';
import React, {useEffect, useState} from 'react'
import * as yup from 'yup'
import axios from 'axios'
import { Switch, Link, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import RecipeInput from './components/RecipeInput'
import SearchBar from './components/SearchBar'



const initialRecipe ={
  title: '',
  source: '',
  ingredients: '',
  instructions: '',
  category: '',
}


let initialDisabled = false;  

const initialListOfRecipes = [
  {
    title: 'pizza',
  source: 'dad',
  ingredients: 'dough',
  instructions: 'no',
  category: 'food',
  },
  {
    title: 'beer',
  source: 'mom',
  ingredients: 'dough',
  instructions: 'no',
  category: 'drink',
  },
  {
    title: 'book',
  source: 'dad',
  ingredients: 'dough',
  instructions: 'no',
  category: 'other',
  },
  {
    title: 'neapolitan pizza',
  source: 'dad',
  ingredients: 'dough',
  instructions: 'no',
  category: 'food',
  },
];  


function App() {

  const [recipe, setRecipe] = useState(initialRecipe);   //this creates a recipe state
  const [disabled, setDisabled] = useState(initialDisabled);   //disables and toggles the submit button
  const [listOfRecipes, setListOfRecipes] = useState(initialListOfRecipes);   // this will contain all added recipes 

 console.log(listOfRecipes);
  return (
    <div className="App">
      <nav>
        <h1 className='myHeader'>Super Sweet Recipe Page!</h1>
        <div className='navLinks'>
          <Link to='/'>Login</Link>
          <Link to='/home'>Home</Link>
          <Link to='/recipes'>Add Recipe</Link>
        </div>
      </nav>

      <Switch>
        <Route path='/recipes'>
          <RecipeInput
           recipe={recipe}
           setRecipe={setRecipe}
           disabled = {disabled}
           listOfRecipes = {listOfRecipes}
           setListOfRecipes = {setListOfRecipes} 
           />
        </Route>
        
        <Route path='/home'>
        <SearchBar />
          <Home listOfRecipes={listOfRecipes}/>
        </Route>

        <Route path='/'>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
