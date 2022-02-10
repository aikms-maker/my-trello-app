import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import { AddTaskCardButton } from "./button/AddTaskCardButton";
import { TaskCard } from "./TaskCard";

export const TaskCards = () => {
  const initialCardList = [
    {
      id: 0,
      draggableId: "card-0",
    },
  ];
  const [cardList, setCardList] = useState(initialCardList);

  const reorder = (list, startIndex, endIndex) => {
    const remove = list.splice(startIndex, 1); // 移動前の要素削除
    list.splice(endIndex, 0, remove[0]); // 移動先に追加
  };

  const handleDragEnd = (result) => {
    reorder(cardList, result.source.index, result.destination.index);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div
            className="task-cards-area"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {cardList.map((card, index) => (
              <TaskCard
                key={card.id}
                cardList={cardList}
                setCardList={setCardList}
                card={card}
                index={index}
              />
            ))}
            {provided.placeholder}
            <AddTaskCardButton cardList={cardList} setCardList={setCardList} />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
