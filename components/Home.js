import React, { useState } from "react";
import Header from "./Header";
import ListItems from "./ListItems";
import InputModal from "./InputModal";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ todos, setTodos }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [todoInputValue, setTodoInputValue] = useState("");
  const [todoToBeEdited, setTodoToBeEdited] = useState(null);

  const handleClearTodos = () => {
    AsyncStorage.setItem("storedTodos", JSON.stringify([]))
      .then(() => {
        setTodos([]);
      })
      .catch((error) => console.log(error));
  };

  const handleAddTodo = (todo) => {
    AsyncStorage.setItem("storedTodos", JSON.stringify([...todos, todo]))
      .then(() => {
        setTodos([...todos, todo]);
        setModalVisible(false);
      })
      .catch((error) => console.log(error));
  };

  const handleTriggerEdit = (item) => {
    setTodoToBeEdited(item);
    setModalVisible(true);
    setTodoInputValue(item.title);
  };

  const handleEditTodo = (editedTodo) => {
    const updatedTodos = todos?.map((item) =>
      item?.key === editedTodo?.key ? editedTodo : item
    );

    AsyncStorage.setItem("storedTodos", JSON.stringify(updatedTodos))
      .then(() => {
        setTodos([...updatedTodos]);
        setModalVisible(false);
        setTodoToBeEdited(null);
      })
      .catch((error) => console.log(error));
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
