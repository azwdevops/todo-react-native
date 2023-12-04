import React, { useState } from "react";
import { SwipeListView } from "react-native-swipe-list-view";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  HiddenButton,
  ListView,
  ListViewHidden,
  TodoDate,
  TodoText,
  SwipedTodoText,
  colors,
} from "../styles/appStyles";
import { Entypo } from "@expo/vector-icons";

const ListItems = ({ todos, setTodos, handleTriggerEdit }) => {
  const [swipedRow, setSwipedRow] = useState(null);

  const handleDeleteTodo = (rowMap, rowKey) => {
    const updatedTodos = todos?.filter((item) => item.key !== rowKey);
    AsyncStorage.setItem("storedTodos", JSON.stringify(updatedTodos))
      .then(() => {
        setTodos(updatedTodos);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {todos?.length === 0 && <TodoText>No todos today </TodoText>}
      {todos?.length > 0 && (
        <SwipeListView
          data={todos}
          renderItem={(data) => {
            const RowText =
              data.item.key === swipedRow ? SwipedTodoText : TodoText;
            return (
              <ListView
                underlayColor={colors.primary}
                onPress={() => handleTriggerEdit(data.item)}
              >
                <>
                  <RowText>
                    {data.item.title} {data.item.key}
                  </RowText>
                  <TodoDate>{data.item.date}</TodoDate>
                </>
              </ListView>
            );
          }}
          renderHiddenItem={(data, rowMap) => (
            <ListViewHidden>
              <HiddenButton
                onPress={() => handleDeleteTodo(rowMap, data.item.key)}
              >
                <Entypo name="trash" size={25} color={colors.secondary} />
              </HiddenButton>
            </ListViewHidden>
          )}
          leftOpenValue={80}
          previewRowKey={"1"}
          previewOpenValue={80}
          previewOpenDelay={3000}
          disableLeftSwipe={true}
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1,
            paddingBottom: 30,
            marginBottom: 40,
          }}
          onRowOpen={(rowKey) => {
            setSwipedRow(rowKey);
          }}
          onRowClose={() => setSwipedRow(null)}
        />
      )}
    </>
  );
};

export default ListItems;
