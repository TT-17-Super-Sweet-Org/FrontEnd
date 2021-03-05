import React, {  useState } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import image from '../theme/images/thumbs/05.jpg'
import { useHistory } from 'react-router-dom'

const initialRecipe = {
    title: '',
    source: '',
    ingredients: '',
    instructions: '',
    username: '',
    category: '',
}

function AddRecipe({disabled}) {

    const [newRecipe, setNewRecipe] = useState(initialRecipe)

    const history= useHistory()


    const handleChange=e=>{
        setNewRecipe({
            ...newRecipe,
            [e.target.name]: e.target.value
        })
    }

    console.log(newRecipe)


    const recipe = e => {
        e.preventDefault()

        axiosWithAuth()
        .post('/api/recipes')
        .then((res)=>{
            console.log('this is newrecipe:',res)
            history.pushState('/home')
        })
        .catch((err)=>{
            console.log('this is newrecipe error:',{err})
        })
    }
    

    return (

        <div className='outsideContainer'>
            <div className='sideDiv'>

                <img src={image} alt='people enjoying a nice dinner' className='recipeImg'/>
                <h1>Have an amazing recipe that you'd like to save or share?</h1>
                <p>Listen, we all have that amazing recipie that we got from grandma, your best friends mother, or even an old soup label!  Why not save them forever on our site in case of fire, flood or any other natural disater? Or I guess, you know, you just want to share that sweet recipe!  Whatever, the world is your oyster!</p>

            </div>
            <div className='formDiv'>
                
            <form className='formContainer' onSubmit={recipe}>
                <label>Title of recipe
                    <input
                    className='textBox title'
                    type= 'text'
                    name= 'title'
                    value= {recipe.title}
                    placeholder= 'Title'
                    onChange= {handleChange}
                    rows ={4}
                    />
                </label>
                
                <label>Source
                    <input
                    className='textBox source'
                    type= 'text'
                    name= 'source'
                    value= {recipe.source}
                    placeholder= 'Source ex: Grandma, Mom'
                    onChange= {handleChange}
                    />
                </label>
                
                <label>Ingredients
                    <textarea
                    className='textBox ingredients'
                    type= 'text'
                    name= 'ingredients'
                    value= {recipe.ingredients}
                    placeholder= 'Ingredients'
                    onChange= {handleChange}
                    rows={4}
                    />
                </label>
                
                <label>Instructions
                    <textarea
                    className='textBox instructions'
                    type= 'text'
                    name= 'instructions'
                    value= {recipe.instructions}
                    placeholder= 'Instructions'
                    onChange= {handleChange}
                    rows={4}
                    />
                </label>

                <label>Username
                    <input
                    className='textBox title'
                    type= 'text'
                    name= 'username'
                    value= {recipe.username}
                    placeholder= 'Username'
                    onChange= {handleChange}
                    />
                </label>

                <label>Category
                    <input
                    className='textBox title'
                    type= 'text'
                    name= 'category'
                    value= {recipe.category}
                    placeholder= 'Category'
                    onChange= {handleChange}
                    />
                </label>
    
                <div className='submitBtn'>
                    <button disabled={disabled} id='submit' >Submit</button>
                </div>
                
            </form>
            </div>
        </div>
        )
    }

export default AddRecipe
