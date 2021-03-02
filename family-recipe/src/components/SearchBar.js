import React from 'react'



export default function SearchBar(e){
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
    return (
        <input name='search' id='searchBar' type='text' placeholder='Search for recipes...' onKeyUp={searchFunc}/>
    )
}