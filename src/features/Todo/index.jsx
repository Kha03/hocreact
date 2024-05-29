import React from "react";
import TodoList from "./components/TodoList";
import { useState } from "react";
import TodoInput from "./components/TodoInput";
import { useSnackbar } from "notistack";

function TodoFeature(props) {
  const initTodos = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Code",
      status: "new",
    },
    {
      id: 4,
      title: "Repeat",
      status: "new",
    },
  ];
  const [todoList, setTodoList] = useState(initTodos);
  const [filterStatus, setFilterStatus] = useState("all");
  const handleTodoClick = (todo, index) => {
    const newTodoList = [...todoList];

    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === "new" ? "completed" : "new",
    };
    setTodoList(newTodoList);
  };
  const clickAll = () => {
    setFilterStatus("all");
  };
  const clickComplete = () => {
    setFilterStatus("completed");
  };
  const clickNew = () => {
    setFilterStatus("new");
  };
  const filterTodoList = todoList.filter(
    (todo) => filterStatus === "all" || filterStatus === todo.status
  );
  const hanldeTodoSubmit = (values) => {
    console.log("Form submit: ", values);
  };
  const { enqueueSnackbar } = useSnackbar();
  const handleClickSuccess = () => {
    enqueueSnackbar("Success", { variant: "success" });
  };
  return (
    <div>
      <h3>input todo</h3>
      <TodoInput onSubmit={hanldeTodoSubmit} />
      <h1>List todo</h1>
      <TodoList todoList={filterTodoList} todoClick={handleTodoClick} />
      <button onClick={clickAll}>Show all</button>
      <button onClick={clickComplete}>Show complete</button>
      <button onClick={clickNew}>Show new</button>
      <button onClick={handleClickSuccess}>snack</button>
    </div>
  );
}

export default TodoFeature;
