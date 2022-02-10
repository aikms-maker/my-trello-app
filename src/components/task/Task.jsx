import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Draggable } from "react-beautiful-dnd";

export const Task = (props) => {
  const { index, task, taskList, setTaskList } = props;
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  return (
    <Draggable draggableId={task.draggableId} index={index}>
      {(provided) => (
        <div
          className="task-box"
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="task-text">{task.text}</p>
          <button
            className="task-trash-btn"
            onClick={() => handleDelete(task.id)}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      )}
    </Draggable>
  );
};
