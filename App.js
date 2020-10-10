import React, { useState }from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddPosition from './components/addPosition';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'Buy cofee', key: '1' },
    { text: 'Create an native app', key: '2'},
    { text: 'Make a dinner', key: '3'},
  ])

  const setAsCompleted = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter( (item) => item.key != key )
    })
  }

  const submitHandler = (text) => {
    setTodos(( prevTodos ) => {
      return [
        {text: newPosition, key: Math.random().toString() },
        ...prevTodos
      ]
    })
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />
      <AddPosition submitHandler={submitHandler}/>
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
