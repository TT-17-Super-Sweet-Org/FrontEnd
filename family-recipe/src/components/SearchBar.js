import React from 'react'
import styled from 'styled-components'

const StyleSearchBar = styled.input`
    border:1px solid #221e1d; 
    width:20%;
    padding:1%;
    margin:2%;
    background-color:#eceae0;
`
const StyleSelectBar = styled.select`
    border:1px solid #221e1d; 
    width:20%;
    margin:2%;
    padding:1%;
    background-color:#eceae0;
    transition: all 0.3s ease-in-out 0s;
`


export default function SearchBar(){

    function searchFunc(){
        let input = document.querySelector('#searchBar').value;
        input = input.toLowerCase().trim();
        let allTitles = document.querySelectorAll('.title');
        let allCategories = document.querySelectorAll('.category');

        for (let i=0; i<allTitles.length ;i++){
            if (allTitles[i].childNodes[1].data.toLowerCase().includes(input) || allCategories[i].childNodes[1].data.toLowerCase().includes(input)) { // we use childNodes[1] in case to avoid displaying content when we enter word 'Title', so we displaying just desired title here;
                allTitles[i].parentElement.style.display=''
            }
            else{
                allTitles[i].parentElement.style.display='none';
            }
        }
    }
    function searchCategory(){
        let ingredientSelect = document.querySelector('#ingredientsSearchId').value;
        let allCategories = document.querySelectorAll('.category');

        for (let i=0; i<allCategories.length ;i++){
        if (ingredientSelect === allCategories[i].childNodes[1].data.trim() || ingredientSelect === 'show_all'){
            allCategories[i].parentElement.style.display=''
        }
        else 
        {
            allCategories[i].parentElement.style.display='none'

        }
    }
    }
    return (
        <div className='searchDiv'>
        <StyleSearchBar class='search' id='searchBar' type='text' placeholder='Search for recipes...' onKeyUp={searchFunc}/>
            <span>or</span>
        <StyleSelectBar name="ingredientsSearch" id="ingredientsSearchId" onChange={searchCategory}>
            <option value='show_all'>select a category to find desired recipe</option>
            <option value='appetizer'>Appetizer</option>
            <option value='savory'>Savory</option>
            <option value='dessert'>Dessert</option>
            <option value='baked good'>Baked Good</option>
            <option value='pizza'>Pizza</option>
        </StyleSelectBar>
        </div>
    )
}