import React from "react";
import '../styles/cocktailcard.css'

function CocktailCard(){
    return(
        <div className="card">
            <div className="screen">
                <h1>Negroni</h1>
                    <h2>Spagilito</h2>
                <p>ingredients</p>
                <hr />
                <p>100ml  ginger beer</p>
                <hr />
                <p>4cl cognac</p>
                <hr />
                <p>3 drops Angrostura  Bitters </p>
                <hr />
                <div id="buy">
                    <span class="material-symbols-outlined">shopping_cart</span>                
                    <span class="material-symbols-outlined">price_check</span>
                </div>
            </div>

        </div>
    )
}

export default CocktailCard