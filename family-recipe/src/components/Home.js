/* eslint-disable eqeqeq */
import React from 'react'

export default function Home(props) {
    const {listOfRecipes} = props;

   if (listOfRecipes == '') {
       return (
           <div>
               <h3>No recipes added</h3>
           </div>
       )
   }

   const listToShow = listOfRecipes.map((recipe,index) => {
       return (
           <div className="recipe" key={index}>
        <h3> Recipe #{index + 1}</h3>
        <p>Title: {recipe.title}</p>
        <p>Source: {recipe.source}</p>
        <p>Ingredients: {recipe.ingredients}</p>
        <p>Introduction: {recipe.instruction}</p>
        <p>Category: {recipe.category}</p>
           </div>

       )
   })
   return listToShow;
    
}