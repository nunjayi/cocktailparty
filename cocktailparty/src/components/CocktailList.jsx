import React, { useState, useEffect } from "react";
import CocktailCard from "./CocktailCard";
import NavBar from "./NavBar"
import "../styles/CocktailList.css";

function CocktailList() {
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
            .then((response) => response.json())
            .then((data) => {
                setCocktails(data.drinks); 
            })
            .catch((error) => {
                console.error("Error fetching cocktails:", error);
            });
    }, []);
    

    return (
        <div>
            < NavBar />
            <h2 className="cocktail-heading">List of Cocktails</h2>
            <div className="cocktail-list">
                {cocktails.map((cocktail) => (
                    <CocktailCard
                        key={cocktail.idDrink}
                        image={cocktail.strDrinkThumb}
                        name={cocktail.strDrink}
                        ingredients={[
                        cocktail.strIngredient1,
                        cocktail.strIngredient2,
                        cocktail.strIngredient3
                        ]}
                    />
                ))}
            </div>
        </div>
    );
}

export default CocktailList;
