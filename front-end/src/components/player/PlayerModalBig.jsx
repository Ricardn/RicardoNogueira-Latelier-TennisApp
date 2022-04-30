import React, { useState, useEffect } from "react";
import { VscChromeClose } from "react-icons/vsc";

import countryCodeToName from "../../utils/countryCodeToName";

const PlayerModalBig = ({ player, closeModal }) => {
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
    <div className="playerBigModal_overlay">
      <div className="playerBigModal_block">
        <button onClick={closeModal} className="close-button">
          <VscChromeClose />
        </button>
        <div className="playerBigModal_container">
          <div className="playerBigCard_card">
            <div className="playerBigCard_cardImage">
              <img src={player.picture} />
            </div>
            <div className="playerBigCard_cardInformations">
              <div className="playerBigCard_cardHeader">
                <div className="playerBigCard_cardName">
                  <h1>
                    <span>{player.firstname}</span> {player.lastname}
                  </h1>
                </div>
                <div className="playerBigCard_cardCountry">
                  <img src={player.country.picture} alt="" />
                  <h2>{player.country.code}</h2>
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
                <div className="playerCard_cardMiddle">
             
                </div>
                <div className="playerCard_cardRight">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerModalBig;
