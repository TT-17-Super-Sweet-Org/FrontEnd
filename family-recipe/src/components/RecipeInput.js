import React, { useState } from 'react'


export default function AddRecipe(props) {

    const {
        recipe,
        setRecipe,
        disabled,
        } = props

    const changeHandler = e =>{
        setRecipe({...recipe, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        e.changeHandler()
    }

    return (

        <div>
            <h2>Recipe Imputs</h2>
            <form className='formContainer' onSubmit={handleSubmit}>
                <input
                type= 'text'
                name= 'title'
                value= {recipe.title}
                placeholder= 'Title'
                onChange= {changeHandler}
                />
                <input
                type= 'text'
                name= 'source'
                value= {recipe.source}
                placeholder= 'Source ex: Grandma, Mom'
                onChange= {changeHandler}
                />
                <input
                type= 'text'
                name= 'ingredients'
                value= {recipe.ingredients}
                placeholder= 'Ingredients'
                onChange= {changeHandler}
                />
                <input
                type= 'text'
                name= 'instructions'
                value= {recipe.instructions}
                placeholder= 'Instructions'
                onChange= {changeHandler}
                />
                <input
                type= 'text'
                name= 'category'
                value= {recipe.category}
                placeholder= 'Category'
                onChange= {changeHandler}
                />
                <div className='submitBtn'>
                    <button disabled={disabled} id='submit' >Submit</button>
                </div>
            </form>
        </div>
    )
}
