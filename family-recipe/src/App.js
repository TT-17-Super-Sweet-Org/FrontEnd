import './App.css';
import React, {useEffect, useState} from 'react'
import * as yup from 'yup'
import axios from 'axios'
import { Switch, Link, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import RecipeInput from './components/RecipeInput'


const initialRecipe ={
  title: '',
  source: '',
  ingredients: '',
  instructions: '',
  category: '',
}



function App() {

  const [recipe, setRecipe] = useState(initialRecipe)

  return (
    <div className="App">
      <nav>
        <h1 className='myheader'>Super Sweet Recipe Page!</h1>
        <div className='navLinks'>
          <Link to='/'>Login</Link>
          <Link to='/home'>Home</Link>
          <Link to='/recipes'>Add Recipe</Link>
        </div>
      </nav>

      <Switch>
        <Route path='/recipes'>
          <RecipeInput recipe={recipe} setRecipe={setRecipe} />
        </Route>
        
        <Route path='/home'>
          <Home />
        </Route>

        <Route path='/'>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
