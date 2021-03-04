import React, {  useState } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const initialRecipe = {
    title: '',
    source: '',
    ingredients: '',
    instructions: '',
    category: '',
}

function AddRecipe({disabled}) {

    // const {
    //     recipe,
    //     setRecipe,
    //     disabled,
    //     handleSubmit,
    //     changeHandler,
    //     } = props
    const [newRecipe, setNewRecipe] = useState(initialRecipe)
    // const [file,setFile] = useState(null);  // for picture upload
    // const [fileError, setFileError] = useState(null)// for picture upload

    // const types = ['image/png', 'image/jpeg']// allowed picture file types

    const handleChange=e=>{
        setNewRecipe({
            ...newRecipe,
            [e.target.name]: e.target.value
        })
    }

    const recipe = e => {
        e.preventDefault()

        axiosWithAuth()
        .post('/api/recipes')
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log({err})
        })
    }


    return (

        <div className='outsideContainer'>
            <div className='sideDiv'>
                <h1>Have an amazing recipe that you'd like to save or share?</h1>
                <p>Listen, we all have that amazing recipe that we got from grandma, your best friends mother, or even an old soup label!  Why not save them forever on our site in case of fire, flood or any other natural disater? Or I guess, you know, you just want to share that sweet recipe!  Whatever, the world is your oyster!</p>
    
            </div>
            <div className='formDiv'>
            <h2></h2>
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
                    // cols={2}
                    />
                </label>
                
                {/*     Radio buttons for catagories     */}
                <h4>Choose the category that best suits your recipe:</h4>
                <div className='categories'>
                    
                    <label>Appetizer
                        <input
                        className='radioBtn category'
                        type= 'radio'
                        name= 'category'
                        value= 'appetizer'
                        checked= {recipe.category === 'appetizer'}
                        onChange= {handleChange}
                        />
                    </label>
                    <label>Savory
                        <input
                        className='radioBtn category'
                        type= 'radio'
                        name= 'category'
                        value= 'savory'
                        checked= {recipe.category === 'savory'}
                        onChange= {handleChange}
                        />
                    </label>
                    <label>Desert
                        <input
                        className='radioBtn category'
                        type= 'radio'
                        name= 'category'
                        value= 'dessert'
                        checked= {recipe.category === 'dessert'}
                        onChange= {handleChange}
                        />
                    </label>
                    <label>Baked good 
                        <input
                        className='radioBtn category'
                        type= 'radio'
                        name= 'category'
                        value= 'baked good '
                        checked= {recipe.category === 'baked good '}
                        onChange= {handleChange}
                        />
                    </label>
                    <label>Pizza
                        <input
                        className='radioBtn category'
                        type= 'radio'
                        name= 'category'
                        value= 'pizza'
                        checked= {recipe.category === 'pizza'}
                        onChange= {handleChange}
                        />
                    </label>
                </div>
                
                
                {/* <label>Upload photo
                    <input 
                    className='upload'
                    type='file'
                    name='picture'
                    onChange={handleChange}
                    style={{display: 'none'}}
                    />
                    <div className='outputFile'>
                        { fileError && <div className='error'>{fileError}</div>}
                        { file && <div>{ file.name }</div>}
                    </div>
                    <button>Upload</button>
                </label> */}
    
                <div className='submitBtn'>
                    <button disabled={disabled} id='submit' >Submit</button>
                </div>
                
            </form>
            </div>
        </div>
        )
    }

export default AddRecipe
