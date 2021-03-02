import React, {  useState } from 'react'

export default function AddRecipe(props) {

    const {
        recipe,
        setRecipe,
        disabled,
        handleSubmit,
        changeHandler,
        } = props

    const [file,setFile] = useState(null);  // for picture upload
    const [fileError, setFileError] = useState(null)// for picture upload

    const types = ['image/png', 'image/jpeg']// allowed picture file types

    return (

        <div>
            <h2>Recipe Inputs</h2>
            <form className='formContainer' onSubmit={handleSubmit}>
                <label>Title of recipe
                    <input
                    className='textBox title'
                    type= 'text'
                    name= 'title'
                    value= {recipe.title}
                    placeholder= 'Title'
                    onChange= {changeHandler}
                    />
                </label>
                
                <label>Source
                    <input
                    className='textBox source'
                    type= 'text'
                    name= 'source'
                    value= {recipe.source}
                    placeholder= 'Source ex: Grandma, Mom'
                    onChange= {changeHandler}
                    />
                </label>
                
                <label>Ingredients
                    <input
                    className='textBox ingredients'
                    type= 'text'
                    name= 'ingredients'
                    value= {recipe.ingredients}
                    placeholder= 'Ingredients'
                    onChange= {changeHandler}
                    />
                </label>
                
                <label>Instructions
                    <input
                    className='textBox instructions'
                    type= 'text'
                    name= 'instructions'
                    value= {recipe.instructions}
                    placeholder= 'Instructions'
                    onChange= {changeHandler}
                    />
                </label>
                
                <label>Catagory
                    <input
                    className='textBox category'
                    type= 'text'
                    name= 'category'
                    value= {recipe.category}
                    placeholder= 'eg. food, drink, desert, bread'
                    onChange= {changeHandler}
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
