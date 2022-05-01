import React from "react";
import PlayerModal from "../player/PlayerModal";
import PlayerModalBig from "../player/PlayerModalBig";

const Modal = ({ closeModal, player }) => {
  if (window.innerWidth > 767 && window.innerHeight > 375) {
    return (
      <div className="overlay">
        <PlayerModalBig player={player} closeModal={closeModal} />
      </div>
    );
  } else {
    return (
      <div className="overlay">
        <PlayerModal player={player} closeModal={closeModal} />
      </div>
    );
  }
};

export default Modal;
