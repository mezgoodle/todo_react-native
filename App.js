import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from "./src/Navbar";
import { AddTodo } from './src/AddTodo';
import { Todo } from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([])

  const addtodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title
    }

    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title: title
    }])
  }

  return (
    <View>
      <Navbar title="UNOScore!" />
      <View style={styles.container}>
        <AddTodo onSubmit={addtodo}/>

        <View>
          { todos.map(todo => <Todo todo={todo} key={todo.id} />) }
        </View>
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
