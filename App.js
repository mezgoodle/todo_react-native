import React, {useState} from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Navbar } from "./src/Navbar";
import { AddTodo } from "./src/AddTodo";
import { Todo } from "./src/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addtodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title
    }

    setTodos((prev) => [...prev, {
      id: Date.now().toString(),
      title
    }]);
  }

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter(todo => todo.id !== id));
  };

  return (
    <View>
      <Navbar title="QuickTask!" />
      <View style={styles.container}>
        <AddTodo onSubmit={addtodo}/>

        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={todos}
          renderItem={({item}) => (
            <Todo todo={item} onRemove={removeTodo} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  }
});
