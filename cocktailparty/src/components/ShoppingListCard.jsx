import React from "react";
import "../styles/cocktailcard.css";

function ShoppingListCard({ name, ingredients, image }) {
  
    function removeFromShoppingList() {
        fetch('http://localhost:3000/shoppingList/' + name, {
          method: 'DELETE'
        })
        .then(() => {
          removeItemFromList(name); 
        });
      }
      
  return (
    <div className="card">
      <div className="shoppinglist-card">
        <img src={image} className="shoppinglist-image" alt="Item" />
        <div className="shoppinglist-info">
          <h5 className="shoppinglist-name">{name}</h5>
          <p className="shoppinglist-ingredients">
           {ingredients}
          </p>
          <button onClick={removeFromShoppingList}>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingListCard;
