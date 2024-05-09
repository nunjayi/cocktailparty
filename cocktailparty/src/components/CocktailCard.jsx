import React from "react";
import '../styles/cocktailcard.css'

function CocktailCard({prop}){
    return(
        <div className='card'>
        <div>
          <h1>title</h1>
          <p>ingredient 1</p>
          <p>ingredient 2</p>
          <span class="material-symbols-outlined">shopping_cart</span>
  
        </div>
        <div>
          <img src="https://media.istockphoto.com/id/480045080/photo/rum-and-cola-cuba-libre.webp?s=1024x1024&w=is&k=20&c=WyMYJYCwCH0bKKvmmFmQwkuFTW4OgauLDcc3ne-R4dc=" alt="" />
        </div>
      </div>
     
    )
}

export default CocktailCard