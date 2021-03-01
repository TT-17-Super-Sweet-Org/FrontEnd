import React, { useState } from 'react'




export default function AddRecipe(props) {

    const newRecipe = {
        title: recipe.title.trim(),
        source: recipe.source.trim(),
        ingredients: recipe.instructions.trim(),
        instructions: recipe.instructions.trim(),
        catagory: recipe.catagory.trim(),
    }

    const {recipe, setRecipe} = props

    const changeHandler = e =>{
        setRecipe({...recipe, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <div>
            <h2>Recipe Imputs</h2>
            <form onSubmit={handleSubmit}>
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
            </form>
        </div>
    )
}
