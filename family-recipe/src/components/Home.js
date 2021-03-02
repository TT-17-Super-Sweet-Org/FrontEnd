/* eslint-disable eqeqeq */
import React from 'react'
import styled from 'styled-components'

const RecipeStyle = styled.div`
border:2px solid black;
margin:5% auto;
justify-content:center;
align-items:center;
padding:5% 0;
width:40%;
`;


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
           <RecipeStyle className="recipe" key={index}>


        <h3> Recipe #{index + 1}</h3>
        <p className='title'>Title: {recipe.title}</p>
        <p>Source: {recipe.source}</p>
        <p>Ingredients: {recipe.ingredients}</p>
        <p>Introduction: {recipe.instruction}</p>
        <p className='category'>Category: {recipe.category}</p>
           </RecipeStyle>

       )
   })
   return listToShow;
    
}