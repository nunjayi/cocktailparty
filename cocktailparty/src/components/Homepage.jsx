// Homepage.jsx
import React, { useState } from "react";
import '../styles/Homepage.css';
import NavBar from "./NavBar";

function Homepage() {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(true);
        setShowSignup(false);
    };

    const handleSignupClick = () => {
        setShowSignup(true);
        setShowLogin(false);
    };

    return (
        <div className="hero">
            <NavBar />
            <div id="homeimg"></div>
            <div id="login">
                <h1>Cocktail</h1>
                <hr />
                <h3>Welcome!</h3><br />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse rerum dolor incidunt eos neque,
                     veniam ipsam quas odit praesentium ipsa sed accusamus tempora quis. Quo impedit repellat ea id esse!</p>
                <div id="loginnav">
                    <span><button onClick={handleLoginClick}>Login</button></span>
                    <span><button onClick={handleSignupClick}>Sign up</button></span>
                </div>
            </div>
            {showLogin && (
                <React.Suspense fallback={<div>Loading...</div>}>
                    <LazyForm type="login" />
                </React.Suspense>
            )}
            {showSignup && (
                <React.Suspense fallback={<div>Loading...</div>}>
                    <LazyForm type="signup" />
                </React.Suspense>
            )}
        </div>
    );
}

const LazyForm = React.lazy(() => import("./form"));

export default Homepage;
