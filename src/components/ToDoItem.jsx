import React, { useState } from 'react';

const ToDoItem = (props) => {
  const [done, setDone] = useState(false);

  function lineThrough() {
    setDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <li
      style={{
        textDecoration: done ? 'line-through' : 'none',
        cursor: 'pointer',
      }}
      onClick={lineThrough}
    >
      {props.text}
    </li>
  );
};

export default ToDoItem;
