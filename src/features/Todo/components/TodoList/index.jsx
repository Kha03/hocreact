import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import classNames from "classnames";
TodoList.propTypes = {
  todoList: PropTypes.array,
  todoClick: PropTypes.func,
};
TodoList.defaultProps = {
  todoList: [],
  todoClick: null,
};
function TodoList({ todoList, todoClick }) {
  return (
    <ul className="todoList">
      {todoList.map((todo, index) => (
        <li
          className={classNames({
            completed: todo.status === "completed",
          })}
          key={todo.id}
          onClick={() => todoClick(todo, index)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
