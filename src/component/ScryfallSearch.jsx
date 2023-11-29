import React, { useState } from 'react';
import axios from 'axios';
import CardList from './CardList'; // Make sure to provide the correct path

const ScryfallSearch = () => {
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState('doom');
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.scryfall.com/cards/search?q=name:${query}`);
      setCards(response.data.data);
      setError(null); // Clear any previous errors
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // Handle 404 error (Not Found)
        setError('No cards found for the given query.');
      } else {
        console.error('Error fetching data:', error);
        setError('An error occurred while fetching data. Please try again.');
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">MTGA Card Search</h1>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Card Name:</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={handleSearch}
      >
        Search
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <CardList cards={cards} />
    </div>
  );
};

export default ScryfallSearch;
