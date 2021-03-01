import React, { useState } from 'react'


export default function AddRecipe(props) {

    const {
        recipe,
        setRecipe,
        disabled,
        listOfRecipes,
        setListOfRecipes,
        } = props

    const changeHandler = e => {
        console.log('change handler')
        const {name, value} = e.target;
            
        setRecipe({...recipe, [name]:value})
        }

    const handleSubmit = e => {
        const newRecipe = {
            title: recipe.title.trim(),
            source: recipe.source.trim(),
            ingredients: recipe.ingredients.trim(),
            instructions: recipe.instructions.trim(),
            category: recipe.category.trim(),
        }
        setListOfRecipes([...listOfRecipes, newRecipe])
        e.preventDefault()
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
