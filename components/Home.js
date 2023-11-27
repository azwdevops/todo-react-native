import React, { useState } from "react";
import Header from "./Header";
import ListItems from "./ListItems";
import InputModal from "./InputModal";

const Home = () => {
  // initial todos
  const initialTodos = [
    { title: "jog", date: "Fri, 08 Jan 2021 16:32:00 GMT", key: "1" },
    { title: "code", date: "Fri, 08 Jan 2021 17:32:00 GMT", key: "2" },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const [modalVisible, setModalVisible] = useState(false);
  const [todoInputValue, setTodoInputValue] = useState("");
  const [todoToBeEdited, setTodoToBeEdited] = useState(null);

  const handleClearTodos = () => {
    setTodos([]);
  };

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
    setModalVisible(false);
  };

  const handleTriggerEdit = (item) => {
    setTodoToBeEdited(item);
    setModalVisible(true);
    setTodoInputValue(item.title);
  };

  const handleEditTodo = (editedTodo) => {
    setTodos(
      todos?.map((item) => (item?.key === editedTodo?.key ? editedTodo : item))
    );
    setTodoToBeEdited(null);
    setModalVisible(false);
  };

  return (
    <>
      <Header handleClearTodos={handleClearTodos} />
      <ListItems
        todos={todos}
        setTodos={setTodos}
        handleTriggerEdit={handleTriggerEdit}
      />
      <InputModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        todoInputValue={todoInputValue}
        setTodoInputValue={setTodoInputValue}
        handleAddTodo={handleAddTodo}
        todos={todos}
        todoToBeEdited={todoToBeEdited}
        setTodoToBeEdited={setTodoToBeEdited}
        handleEditTodo={handleEditTodo}
      />
    </>
  );
};

export default Home;
