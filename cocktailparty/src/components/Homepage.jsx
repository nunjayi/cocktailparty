import React from "react";
import '../styles/Homepage.css'
function Homepage(){
    return(
        <div className="hero">
            <div id="homeimg"></div>
            <div id="login">
                <h1>Cocktail</h1>
                <hr />
                <h3>Welcome!</h3><br />
                <p>Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Esse rerum dolor incidunt eos neque,
                     veniam ipsam quas odit praesentium 
                    ipsa sed accusamus tempora quis. Quo impedit repellat ea id esse!</p>
                <div id="loginnav">
                    <span><a href="#">Login</a></span>
                    <span><a href="#">Sign up</a></span>
                </div>
            </div>
        </div>
        
    )
}

export default Homepage