import React from "react";
import "../styles/cocktailcard.css";

function CocktailCard({ name, ingredients, image }) {
  
  function addToShoppingList() {
    const data = {
      name: name,
      ingredients: ingredients,
      image: image
    };

    fetch('http://localhost:3000/shoppingList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }
  
  return (
    <div className="card">
      <div>
        <h1>{name}</h1>
        {ingredients.map((ingredient, index) => (
          <p key={index}>{ingredient}</p>
        ))}
        <span className="material-symbols-outlined" onClick={addToShoppingList}>shopping_cart</span>
      </div>
      <div>
        <img src={image} alt="Cocktail" />
      </div>
    </div>
  );
}

export default CocktailCard;
