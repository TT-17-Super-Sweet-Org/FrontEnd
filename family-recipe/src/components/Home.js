/* eslint-disable eqeqeq */
// import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import image from '../theme/images/thumbs/06.jpg'
import axios from 'axios'


const RecipeStyle = styled.div`
border:2px solid black;
border-radius:5%;
margin:5% auto;
justify-content:center;
align-items:center;
padding:5% 0;
width:40%;
height:40%;
background:#eceae0;
h3{
    color:#e9633b;
    margin-top:-5%;
    margin-bottom:10%;
}
p{
    font-size:x-large;
    font-weight:500;
    text-align:left;
    margin-left:15%;
}
span{
    color:#63aa9c;
}

`;


export default function Home() {
    // const {listOfRecipes} = props;

const [userRecipes, setUserRecipes]= useState([])
const user = localStorage.getItem('user')

useEffect(()=>{
    axios
    .get(`https://tt17-secret-family-recipe.herokuapp.com/api/recipes/${user}/`)
    .then((res)=>{
        console.log('this is userrecipe:',res.data)
    //    const {id}= useParams()
        localStorage.setItem('user', res.data)
        setUserRecipes(res.data)
    })
    .catch((err)=>{
        console.log('this is userrecipe error:',{err})
    })
},[]

)

    
//    if (listOfRecipes == '') {
//        return (
//            <div>
//                <h3>No recipes added</h3>
//            </div>
//        )
//    }

   const listToShow = userRecipes.map((recipe,index) => {
       return (
           <>
           <RecipeStyle className="recipe" key={index}setUserRecipes={setUserRecipes} userRecipes={userRecipes}>


        <h3> Recipe #{index + 1}</h3>
        <p className='title'><span>Title: </span>{recipe.title}</p>
        <p><span>Source: </span>{recipe.source}</p>
        <p><span>Ingredients: </span>{recipe.ingredients}</p>
        <p className='category'><span>Category: </span>{recipe.category}</p>
        <p><span>Instructions: </span>{recipe.instruction}</p>
        <button>Delete</button>
           </RecipeStyle>
        </>
       )
   })
   return listToShow;
    
}