import React, { useState, useEffect } from "react";
import { VscChromeClose } from "react-icons/vsc";

import countryCodeToName from "../../utils/countryCodeToName";

const PlayerModal = ({ player, closeModal }) => {
  const [playerCountry, setPlayerCountry] = useState("");

  const weight = player.data.weight.toString().slice(0, 2);

  const dataLast = player.data.last ? player.data.last.toString() : "";

  useEffect(() => {
    countryCodeToName.forEach((country) => {
      if (country.code === player.country.code) {
        setPlayerCountry(country.name);
      }
    });
  }, []);

  return (
    <div className="playerModal_overlay">
      <button onClick={closeModal} className="close-button">
        <VscChromeClose />
      </button>
      <div className="playerModal_container">
        <div className="playerCard_card">
          <div className="playerCard_cardImage">
            <div className="playerCard_cardCountry">
              <img src={player.country.picture} alt="" />
              <h3>{player.country.code}</h3>
            </div>
            <img src={player.picture} />
          </div>

          <div className="playerCard_cardInformations">
            <div className="playerCard_cardHeader">
              <div className="playerCard_cardName">
                <h1>
                  <span>{player.firstname}</span> {player.lastname}
                </h1>
              </div>
            </div>
            <div className="playerCard_cardContent">
              <div className="playerCard_cardLeft">
                <h2>rank</h2>
                <h3>#{player.data.rank}</h3>
              </div>
              <div className="playerCard_cardMiddle">
                <h2>points</h2>
                <h3>{player.data.points}</h3>
              </div>
              <div className="playerCard_cardRight">
                <h2>country</h2>
                <h3>{playerCountry}</h3>
              </div>
            </div>
            <div className="playerCard_cardContent">
              <div className="playerCard_cardLeft">
                <h2>weight</h2>
                <h3>
                  {weight} <span className="lowerCase">kg</span>{" "}
                </h3>
              </div>
              <div className="playerCard_cardMiddle">
                <h2>height</h2>
                <h3>
                  {player.data.height.toFixed(0)}{" "}
                  <span className="lowerCase">cm</span>
                </h3>
              </div>
              <div className="playerCard_cardRight">
                <h2>age</h2>
                <h3>{player.data.age}</h3>
              </div>
            </div>
            <div className="playerCard_cardContent">
              <div className="playerCard_cardLeft">
                <h2>last games</h2>
                <h3 id="last">{dataLast}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerModal;
