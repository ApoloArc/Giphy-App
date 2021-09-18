import React, {useState} from 'react'
import GifGrid from './Components/GifGrid';
import { SearchBar } from './Components/SearchBar';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch Man']);

    // const sumarCategoria = () => {
    //     setCategories(categories =>[...categories, 'El Chavo del 8'])
    // }

    return (  
        <>
          <h1>Gif Expert App</h1>
          <SearchBar setCategories={setCategories}/>
          <ol>
            {
                categories.map(categoria => <GifGrid key={categoria} category ={categoria}/>)
            }
          </ol>
        </>
    )
}
