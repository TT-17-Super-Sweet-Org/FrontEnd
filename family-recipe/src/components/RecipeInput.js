import React, {  useState } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const intitalRecipe = {
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
    const [newRecipe, setNewRecipe] = useState(intitalRecipe)
    // const [file,setFile] = useState(null);  // for picture upload
    // const [fileError, setFileError] = useState(null)// for picture upload

    // const types = ['image/png', 'image/jpeg']// allowed picture file types

    const handleChange=e=>{
        e.preventDefault()
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

        <div>
            <h2>Recipe Inputs</h2>
            <form className='formContainer' onSubmit={recipe}>
                <label>Title of recipe
                    <input
                    className='textBox title'
                    type= 'text'
                    name= 'title'
                    value= {newRecipe.title}
                    placeholder= 'Title'
                    onChange= {handleChange}
                    />
                </label>
                
                <label>Source
                    <input
                    className='textBox source'
                    type= 'text'
                    name= 'source'
                    value= {newRecipe.source}
                    placeholder= 'Source ex: Grandma, Mom'
                    onChange= {handleChange}
                    />
                </label>
                
                <label>Ingredients
                    <input
                    className='textBox ingredients'
                    type= 'text'
                    name= 'ingredients'
                    value= {newRecipe.ingredients}
                    placeholder= 'Ingredients'
                    onChange= {handleChange}
                    />
                </label>
                
                <label>Instructions
                    <input
                    className='textBox instructions'
                    type= 'text'
                    name= 'instructions'
                    value= {newRecipe.instructions}
                    placeholder= 'Instructions'
                    onChange= {handleChange}
                    />
                </label>
                
                <label>Catagory
                    <input
                    className='textBox category'
                    type= 'text'
                    name= 'category'
                    value= {newRecipe.category}
                    placeholder= 'eg. food, drink, desert, bread'
                    onChange= {handleChange}
                    />
                </label>
                
                {/* <label>Upload photo
                    <input 
                    className='upload'
                    type='file'
                    name='picture'
                    onChange={changeHandler}
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
    )
}

export default AddRecipe
