import React from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskAddInput = (props) => {
  const { inputText, setInputText, taskList, setTaskList } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText) return;
    const uniqueId = uuidv4(); // ユニークIDを生成するライブラリ使用
    // add card
    const addTask = {
      id: uniqueId,
      draggableId: `task-${uniqueId}`,
      text: inputText,
    };
    setTaskList([...taskList, addTask]);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="task-add-input"
          type="text"
          placeholder="add a task"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};
