import { StatusBar } from 'expo-status-bar';
import React, { useState }from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem'

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'Buy cofee', key: 1 },
    { text: 'Create an native app', key: 2},
    { text: 'Make a dinner', key: 3},
  ])

  const setAsCompleted = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter( (item) => item.key != key )
    })
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />
      <View style={styles.content} >
        {/* to do form */}
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={ ( {item} ) => (
              <TodoItem position={item} setAsCompleted={setAsCompleted} />
            )}
          />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    
  },
});
