import React, { useState } from "react";
import '../styles/Homepage.css'
function Homepage(){
    function navigate(e) {
        // don't make a GET request
        e.preventDefault();
        // use pushState to navigate using the href attribute of the <a> tag
        window.history.pushState(null, "", e.target.href);
      }

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
                    <span ><a href="/login">Login</a></span>
                    <span ><a href="/signup">Sign up</a></span>
                </div>
            </div>
        </div>
        
    )
}

export default Homepage