// Search.js
import React, { useState } from 'react';
import './Search.css';

const Search = () => {
  const [cocktailSearchQuery, setCocktailSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Call an API or dispatch an action to handle the search query
    fetch(`/api/search-cocktails?q=${cocktailSearchQuery}`)
     .then((response) => response.json())
     .then((data) => console.log(data));
  };

  return (
    <form className="search-form">
      <input
        type="search"
        name="cocktail-search"
        value={cocktailSearchQuery}
        onChange={(e) => setCocktailSearchQuery(e.target.value)}
        placeholder="Search cocktails..."
        required
      />
      <button type="submit" onClick={handleSearch}>
        Search
      </button>
    </form>
  );
};

export default Search;
