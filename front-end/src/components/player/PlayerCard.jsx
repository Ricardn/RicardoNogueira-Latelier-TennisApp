import React, { useState, useEffect } from "react";
import Modal from "../modal/Modal";

const PlayerCard = ({ player }) => {
  let imageAlt = `${player.firstname} ${player.lastname} picture`;

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  if (isOpen === true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <>
      {isOpen && (
        <>
          <Modal key={player.id} player={player} closeModal={closeModal} />
        </>
      )}
      <div className="playerCard_container" onClick={openModal}>
        <div className="playerCard_card">
          <div className="playerCard_cardImage">
            <img src={player.picture} alt={imageAlt} />
          </div>
          <div className="playerCard_cardInformations">
            <div className="playerCard_cardName">
              <h1>
                {player.firstname} {player.lastname}
              </h1>
            </div>
            <div className="playerCard_cardRank">
              <h2>rank</h2>
              <h3>#{player.data.rank}</h3>
            </div>
            <div className="playerCard_cardPoints">
              <h2>points</h2>
              <h3>{player.data.points}</h3>
            </div>
            <div className="playerCard_cardCountry">
              <h2>country</h2>
              <h3>{player.country.code}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerCard;
