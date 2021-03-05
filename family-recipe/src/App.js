import './App.css';
import React from 'react'
// import * as yup from 'yup'
import { Switch, Link, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import RecipeInput from './components/RecipeInput'
import SearchBar from './components/SearchBar'
import styled from 'styled-components'
// import formSchema from './validation/FormSchema'
import SignUp from './components/SignUp';
import image from './theme/images/thumbs/02.jpg'
import image1 from './theme/images/thumbs/04.jpg'


// import PrivateRoute from './components/PrivateRoute'

const StyleList = styled.div`
display:flex;
flex-wrap:wrap;
background-image:url(${image});
background-size:cover;
background-repeat: no-repeat;
background-attachment: fixed;
min-height:40rem;
`;

const StyleLog = styled.div`
background-image:url(${image1});
background-size:cover;
background-repeat: no-repeat;
background-attachment: fixed;
min-height:40rem;
`;




// const initialRecipeErrors = {
//   title: '',
//   source: '',
//   ingredients: '',
//   instructions: '',
//   category: '',
// };

// let initialDisabled = false;  

// const initialListOfRecipes = [
//   {
//     title: 'pizza',
//   source: 'dad',
//   ingredients: 'dough',
//   instructions: 'no',
//   category: 'pizza',
//   },
//   {
//     title: 'beer',
//   source: 'mom',
//   ingredients: 'dough',
//   instructions: 'no',
//   category: 'appetizer',
//   },
//   {
//     title: 'book',
//   source: 'dad',
//   ingredients: 'dough',
//   instructions: 'no',
//   category: 'savory',
//   },
//   {
//     title: 'neapolitan pizza',
//   source: 'dad',
//   ingredients: 'dough',
//   instructions: 'no',
//   category: 'pizza',
//   },
  
// ];  
  
function App() {


  // const [disabled, setDisabled] = useState(initialDisabled);   //disables and toggles the submit button
  // const [listOfRecipes, setListOfRecipes] = useState(initialListOfRecipes); 
  // const [recipeErrors, setRecipeErrors] = useState(initialRecipeErrors); // this will contain all added recipes 
  
  // const history = useHistory()


  // const postNewRecipe  = newRecipe => {  //Posts a recipe to API
  //   axios.post('https://tt17-secret-family-recipe.herokuapp.com/api/recipes', newRecipe)
  //   .then(res => {
  //     console.log(res,'response')
  //     setListOfRecipes([...listOfRecipes, res.data])
  //   })
  //   .catch(err => {
  //     debugger
  //     alert(err)
  //     console.log(err, 'Error message')
  //   })
  //   setRecipe(initialRecipe);
  // }

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

//   const handleSubmit = e => {  //after submit gets recipe into state for axios post and sends you to homepage
//     e.preventDefault()
//     const newRecipe = {
//         title: recipe.title.trim(),
//         source: recipe.source.trim(),
//         ingredients: recipe.ingredients.trim(),
//         instructions: recipe.instructions.trim(),
//         category: recipe.category.trim(),
//     }
//     postNewRecipe(newRecipe)
//     history.push('./home')
// }

  // useEffect(() => getRecipes(), []); //get recipies on page load

  // useEffect(() => {  // validation for submit button enabeling on recipeInpit
  //   formSchema.isValid(recipe).then(valid => setDisabled(!valid))
  // }, [recipe]);

  return (
    <div className="App">
      <nav>
        <h1 className='myHeader'>Super Sweet Recipe Page!</h1>
        <div className='navLinks'>
          <Link to='/'>Login</Link>
          <Link to='/home'>Home</Link>
          <Link to='/recipes'>Add Recipe</Link>
          <Link to='/signup'>Sign Up</Link>
        </div>
      </nav>

      <Switch>
        <Route path='/recipes'>
          <RecipeInput/>
          {/* <RecipeInput
           recipe={recipe}
           setRecipe={setRecipe}
          
           handleSubmit = {handleSubmit}
           changeHandler = {changeHandler}
           /> */}
        </Route>

        <Route path='/signup' component={SignUp}/>
        
        <Route path='/home'>
          <SearchBar />
          <StyleList className='list'>
          <Home />
          </StyleList>
        </Route>

        <Route path='/'>
          <StyleLog>
          <Login />
          </StyleLog>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
