import React from 'react';
import { useRecipeStore } from '../components/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes by title or description..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        width: '100%',
        padding: '0.5rem',
        marginBottom: '1rem',
        fontSize: '1rem'
      }}
    />
  );
};

export default SearchBar;
