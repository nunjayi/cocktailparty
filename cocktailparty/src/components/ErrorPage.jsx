import React from "react";
import { useNavigate } from "react-router-dom";
import { useRouteError } from "react-router-dom";
import "../styles/error.css"


function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);
  
  return (
    <>
      <main className="errorcontainer">
        <header className="error">ERROR!!!</header>
        <h1 className="errormessage">
        Oops! 🙈 It seems we've stumbled upon a recipe for disaster 🍹
        Our servers might be feeling a bit 'shaken, not stirred'. But fear not! Our tech team is on standby, working tirelessly to serve you the perfect page. While you wait, why not whip up your own error-fixing elixir? Remember, when life gives you 404s, make cocktails! 🍸✨
        </h1>
        <button className="returnbutton"onClick={() => navigate("/")}>Go back to Home</button>
      </main>
    </>
  );
}

export default ErrorPage;
