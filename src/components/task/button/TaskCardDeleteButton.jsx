import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const TaskCardDeleteButton = (props) => {
  const { card, cardList, setCardList } = props;
  const handleCardDelete = (id) => {
    setCardList(cardList.filter((card) => card.id !== id));
  };

  return (
    <div>
      <button
        className="card-delete-btn"
        onClick={() => handleCardDelete(card.id)}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
};
