import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Task } from "./Task";

export const Tasks = (props) => {
  const { taskList, setTaskList } = props;

  const reorder = (list, startIndex, endIndex) => {
    const remove = list.splice(startIndex, 1); // 移動前の要素削除
    list.splice(endIndex, 0, remove[0]); // 移動先に追加
  };

  const handleDragEnd = (result) => {
    reorder(taskList, result.source.index, result.destination.index);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    index={index}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
