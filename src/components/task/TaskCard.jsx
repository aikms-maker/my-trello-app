import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import { TaskAddInput } from "./input/TaskAddInput";
import { TaskCardTitle } from "./TaskCardTitle";
import { Tasks } from "./Tasks";

export const TaskCard = (props) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <Draggable draggableId={props.card.draggableId} index={props.index}>
      {(provided) => (
        <div
          className="task-card"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className="title-delete-area" {...provided.dragHandleProps}>
            <TaskCardTitle />
            <TaskCardDeleteButton
              card={props.card}
              cardList={props.cardList}
              setCardList={props.setCardList}
            />
          </div>
          <TaskAddInput
            inputText={inputText}
            setInputText={setInputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
          <Tasks taskList={taskList} setTaskList={setTaskList} />
        </div>
      )}
    </Draggable>
  );
};
