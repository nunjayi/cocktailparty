import React, { useState, useEffect } from "react";
import ShoppingListCard from "./ShoppingListCard";
import "../styles/CocktailList.css";

function ShoppingList() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetchShoppingList();
  }, []);

  function fetchShoppingList() {
    fetch("http://localhost:3000/shoppingList")
      .then(response => response.json())
      .then(data => setCocktails(data))
      .catch(error => console.error("Error fetching shopping list:", error));
  }

  return (
    <div>
      <h2>Shopping List</h2>
      <div className="cocktail-list">
        {
          cocktails.map(cocktail => (
            <ShoppingListCard
              key={cocktail.id}
              name={cocktail.name}
              ingredients={cocktail.ingredients}
              image={cocktail.image}
            />))
          
        
        }
      </div>
    </div>
  );
  
}

export default ShoppingList;
