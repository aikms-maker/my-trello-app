import React from "react";
import { v4 as uuidv4 } from "uuid";

export const AddTaskCardButton = (props) => {
  const { cardList, setCardList } = props;

  const addCard = () => {
    const cardId = uuidv4();
    const newCard = { id: cardId, draggableId: `card-${cardId}` };
    setCardList([...cardList, newCard]);
  };
  return (
    <div className="add-card-area">
      <button className="add-card-btn" onClick={addCard}>
        +
      </button>
    </div>
  );
};
