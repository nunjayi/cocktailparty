import React from 'react'
import '../styles/hero.css'
function Hero(){
    return (
        <header class="hero">
            <div class="hero-content">
                <h1 class="hero-title">Lets toast to the Extraodinary</h1>
                <p class="hero-subtitle">join us for the unforgettable journey of delicious blends of passion, spirits <br/>and vibrant jazz</p>
                <a href="/login" className="hero-button">login</a>
                <a href="/signup" className="hero-button">signup</a>
            </div>
        </header>

    )
}

export default Hero