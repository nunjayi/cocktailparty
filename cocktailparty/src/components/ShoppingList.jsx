import React, { useState, useEffect } from "react";
import ShoppingListCard from "./ShoppingListCard";
import NavBar from "./NavBar";
import "../styles/CocktailList.css";

function ShoppingList() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetchShoppingList();
  }, []);

  function fetchShoppingList() {
    fetch("http://localhost:3000/cocktail")
      .then(response => response.json())
      .then(data => setCocktails(data))
      .catch(error => console.error("Error fetching shopping list:", error));
  }

  function handleDelete(id) {
    console.log("Deleting item with ID:", id);
    fetch(`http://localhost:3000/cocktail/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      console.log("Item deleted successfully");
      setCocktails(prevCocktails => prevCocktails.filter(cocktail => cocktail.idDrink !== id));
      fetchShoppingList();
    });
}



  

  return (
    <div>
      <NavBar />
      <h2>WishList</h2>
      <div className="cocktail-list">
      {
  cocktails.map((cocktail, index) => (
      <ShoppingListCard
        key={`${cocktail.id}-${index}`} 
        id={cocktail.id} 
        image={cocktail.strDrinkThumb}
        name={cocktail.strDrink}
        ingredients={[
          cocktail.strIngredient1,
          cocktail.strIngredient2,
          cocktail.strIngredient3
        ]}
        onDelete={() => handleDelete(cocktail.id)} 
      />

  ))
}

      </div>
    </div>
  );
}

export default ShoppingList;
