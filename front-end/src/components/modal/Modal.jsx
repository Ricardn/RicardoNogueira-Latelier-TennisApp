import React from "react";
import PlayerModal from "../player/PlayerModal";

const Modal = ({ closeModal, player }) => {
  return (
    <>
      <div className="overlay"></div>
      <PlayerModal player={player} closeModal={closeModal} />
    </>
  );
};

export default Modal;
