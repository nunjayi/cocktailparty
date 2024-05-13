import React, { useState, useEffect, useRef } from "react";
import CocktailCard from "./CocktailCard";
import NavBar from "./NavBar";
import "../styles/CocktailList.css";

function LetterButton({ letter, isSelected, onClick }) {
    return (
        <button className={isSelected ? 'selected' : ''} onClick={() => onClick(letter)}>
            {letter}
        </button>
    );
}

function CocktailList() {
    const [cocktails, setCocktails] = useState([]);
    const [selectedLetter, setSelectedLetter] = useState('a'); 
    // Ref to the cocktail list container element
    const listRef = useRef(null);

    // Effect to fetch cocktails whenever the selected letter changes
    useEffect(() => {
        fetchCocktails(selectedLetter);
    }, [selectedLetter]);

    // Effect to scroll to the top of the list whenever the cocktails list changes
    useEffect(() => {
        // Check if the listRef has been initialized
        if (listRef.current) {
            // Scroll the list container to the top smoothly
            listRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [cocktails]);

    const fetchCocktails = (letter) => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
            .then((response) => response.json())
            .then((data) => {
                setCocktails(data.drinks || []);
            })
            .catch((error) => {
                console.error("Error fetching cocktails:", error);
            });
    };

    const handleLetterClick = (letter) => {
        setSelectedLetter(letter);
    };

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    return (
        <div>
            <NavBar />
            <h2 className="cocktail-heading">List of Cocktails</h2>
            <div className="cocktail-list" ref={listRef}>
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
            <div className="letter-buttons">
                {alphabet.map((letter) => (
                    <LetterButton
                        key={letter}
                        letter={letter}
                        isSelected={selectedLetter === letter}
                        onClick={handleLetterClick}
                    />
                ))}
            </div>
        </div>
    );
}

export default CocktailList;
