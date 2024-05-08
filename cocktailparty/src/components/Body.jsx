import React from 'react';
import Home from './Home';
import CocktailList from './CocktailList';
import './body.css'; 

function Body() {
  return (
    <>
      <div className="body-container">
        <Home />
        <CocktailList />
      </div>
    </>
  );
}

export default Body;
