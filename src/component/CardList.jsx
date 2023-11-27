import React, { useState } from 'react';
import Card from './Card'; // Make sure to provide the correct path

const CardList = ({ cards }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const openCardModal = (card) => {
    setSelectedCard(card);
  };

  const closeCardModal = () => {
    setSelectedCard(null);
  };

  if (cards.length === 0) {
    return <p className="text-red-500">No cards found.</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className="flex flex-col items-center mb-4 p-4 cursor-pointer"
          onClick={() => openCardModal(card)}
        >
          <h3 className="text-xl font-bold text-center">{card.name}</h3>
          {card.image_uris && card.image_uris.small ? (
            <img
              src={card.image_uris.small}
              alt={card.name}
              className="w-[300px] h-[400px] object-cover mt-2"
            />
          ) : (
            <p className="text-red-500 mt-2">Image not available</p>
          )}
        </div>
      ))}
      {selectedCard && (
        <Card card={selectedCard} onClose={closeCardModal} />
      )}
    </div>
  );
};

export default CardList;
