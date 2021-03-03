import './App.css';
import React, {useEffect, useState} from 'react'
import * as yup from 'yup'
import axios from 'axios'
import { Switch, Link, Route, useHistory } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import RecipeInput from './components/RecipeInput'
import SearchBar from './components/SearchBar'
import styled from 'styled-components'
import formSchema from './validation/FormSchema'


const StyleList = styled.div`
display:flex;
flex-wrap:wrap;
`;

const initialRecipe ={
  title: '',
  source: '',
  ingredients: '',
  instructions: '',
  category: '',
}

const initialRecipeErrors = {
  title: '',
  source: '',
  ingredients: '',
  instructions: '',
  category: '',
};

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
  const [listOfRecipes, setListOfRecipes] = useState(initialListOfRecipes); 
  const [recipeErrors, setRecipeErrors] = useState(initialRecipeErrors); // this will contain all added recipes 
  
  const history = useHistory()

  const changeHandler = e => {  //gets files and text into state
    // let selected = e.target.files[0];
    // if(selected && types.includes(selected.type)){
    //     setFile(selected);
    //     setFileError('');
    // } else {
    //     setFile(null)
    //     setFileError('Please select and image file (png or jpeg)');
    // }
    const {name, value} = e.target;
    setRecipe({...recipe, [name]:value})
    }

  const postNewRecipe  = newRecipe => {  //Posts a recipe to API
    axios.post('https://tt17-secret-family-recipe.herokuapp.com/api/recipes', newRecipe)
    .then(res => {
      console.log(res,'response')
      setListOfRecipes([...listOfRecipes, res.data])
    })
    .catch(err => {
      debugger
      alert(err)
      console.log(err, 'Error message')
    })
    setRecipe(initialRecipe);
  }

  // const getRecipes = () => {   //gets recipes from api to display on DOM
  //   axios.get('https://tt17-secret-family-recipe.herokuapp.com/')
  //   .then(res => {
  //     setListOfRecipes(res.data)
  //   })
  //   .catch(err => {
  //     debugger
  //     alert(err)
  //     console.log(err, 'Error')
  //   })
  // }

  const handleSubmit = e => {  //after submit gets recipe into state for axios post and sends you to homepage
    e.preventDefault()
    const newRecipe = {
        title: recipe.title.trim(),
        source: recipe.source.trim(),
        ingredients: recipe.ingredients.trim(),
        instructions: recipe.instructions.trim(),
        category: recipe.category.trim(),
    }
    postNewRecipe(newRecipe)
    history.push('./home')
}

  // useEffect(() => getRecipes(), []); //get recipies on page load

  useEffect(() => {  // validation for submit button enabeling on recipeInpit
    formSchema.isValid(recipe).then(valid => setDisabled(!valid))
  }, [recipe]);

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
           handleSubmit = {handleSubmit}
           changeHandler = {changeHandler}
           />
        </Route>
        
        <Route path='/home'>
        <SearchBar />
          <StyleList className='list'>
          <Home listOfRecipes={listOfRecipes}/>
          </StyleList>
        </Route>

        <Route path='/'>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
