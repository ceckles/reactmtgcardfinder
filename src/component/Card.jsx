import React from 'react';
import { ConvertMana } from '../util/ConvertManaFunc';
import '../util/mana-coast.css';

const Card = ({ card, onClose }) => {
  // Function for converting mana cost
  function ManaCost(cost) {
    if (!cost) {
      return [];
    }

    // Mana Format: "{3}{G}"
    let value = cost.replaceAll('{', ' ');
    value = value.replaceAll('}', '');
    value = value.substring(1);
    value = value.split(' ');
    return value;
  }

  if (!card) {
    // Handle the case where the card is not available
    return null;
  }

  const cost = ManaCost(card.mana_cost);

  // Function for replacing mana symbols with corresponding CSS classes
  function ReplaceMana(data) {
    const imgs = data.map((val, index) => {
      const img = ConvertMana(val);
      return <span key={index} className={`mana small ${img} shadow mr-1`} />;
    });
    return imgs;
  }

  const manaImg = ReplaceMana(cost);

  // Function to prevent closing when clicking inside the modal
  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 overflow-y-auto flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-black opacity-50 fixed inset-0"
        onClick={onClose}
      ></div>
      <div
        className="bg-white p-4 max-w-md mx-auto rounded-lg overflow-y-auto z-50 relative text-black"
        onClick={handleModalClick}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 bg-red-600 text-xs p-1 rounded"
          onClick={onClose}
        >
          X
        </button>
        <h2 className="text-2xl font-bold mb-4">{card.name}</h2>
        <img
          src={card.image_uris.large}
          alt={card.name}
          className="w-full h-auto mb-4"
        />
        <p className="text-sm mb-4">{card.type_line}</p>
        <div className="mb-4">
          <strong>Rarity:</strong> {card.rarity}
        </div>
        <div className="mb-4">
          <strong>Mana Cost:</strong> {manaImg}
        </div>
        <div className="mb-4">
          <strong>Oracle Text:</strong> {card.oracle_text || 'No additional text'}
        </div>

        {/* Buttons with gradient colors */}
        <div className="flex justify-between mt-4">
          {card.purchase_uris && card.purchase_uris.tcgplayer && (
            <button
              className="bg-gradient-to-r from-teal-500 via-teal-400 to-lime-500 text-white py-1 px-2 rounded"
              onClick={() => window.open(card.purchase_uris.tcgplayer)}
            >
              Buy from TCG Player {card.prices && '$' + card.prices.usd}
            </button>
          )}
          {card.purchase_uris && card.purchase_uris.cardhoarder && (
            <button
              className="bg-gradient-to-r from-orange-500 via-orange-400 to-red-500 text-white py-1 px-2 rounded"
              onClick={() => window.open(card.purchase_uris.cardhoarder)}
            >
              Buy from Card Hoarder
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
