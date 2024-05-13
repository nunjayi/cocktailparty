import React from "react";
import "../styles/cocktailcard.css";

function ShoppingListCard({ id, name, ingredients, image, onDelete }) {
    return (
        <div className="card">
            <div className="image-container">
                <img src={image} className="image" alt="Item" />
            </div>
            <div className="content">
                <h1 className="title">{name}</h1>
                <ul className="description">
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <button className="wishlist-button" onClick={() => onDelete(id)}>
                    <h4>Remove from wishlist</h4>
                    <span className="material-symbols-outlined">heart_minus</span>
                </button>
            </div>
        </div>
    );
}

export default ShoppingListCard;
