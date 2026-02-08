import React, { useState } from 'react';     // Importing Libraries
import { View, TextInput, Button, FlatList, Text, 
TouchableOpacity, StyleSheet } from 'react-native';//  Importing Components from React Native

export default function App() {      
  const [task, setTask] = useState('');     // for storing the current task input by the user
  const [tasks, setTasks] = useState([]);   // for storing the list of tasks added by the user

  const addTask = () => {     // function to add a new task to the list
    if (task.trim()) {        
      setTasks([...tasks, { id: Date.now().toString(), task: task }]);
      setTask(''); 
    }
  };

  const deleteTask = (
      id) => {  // function to delete a task from the list based on its id
      setTasks(tasks.filter(task => task.id !== id));  
    
  };

  return (  // The main UI of the app
    <View style={styles.container}>   
      <Text style={styles.header}>To-Do List</Text>   
      
      <TextInput
      style={styles.input} // Input for entering a new task
      value={task}  // The current value of the input 
      onChangeText={setTask}  // Update the task state when the text changes 'i don't understand this'
      placeholder="Enter a task"  // Placeholder text for input
      />
      
      <Button title="Add Task" onPress={addTask} />   //* Button to add the task to the list**/

      <FlatList  // List to display the tasks
      data={tasks}
      renderItem={({ item }) => (  // Render each task item
      <View style={styles.taskContainer}>  // *Container for each task item**/
      <Text style={styles.taskText}>{item.task}</Text> 
      <TouchableOpacity onPress={()=>deleteTask(item.id)}>    //* Button to delete the task**/
      <Text style={styles.deleteButton}>Delete</Text>
      </TouchableOpacity>
      </View>
      )}
      keyExtractor={(item)=>item.id}  // Unique key for each task item
      />
    </View>
  );
}

const styles = StyleSheet.create({  // Styles for the app components
  container: {
    flex: 1,  // Take up the entire screen
    padding: 40,  // Padding around the container
    justifyContent: 'center',  // Center the content vertically
    alignItems: 'center',  // Center the content horizontally
  },
  header: {  // Styles for the header text
    fontSize: 40, 
    marginBottom: 30, 
    fontWeight: 'bold', 
  },
  input: {  // Styles for the text input
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10,
  },
  taskContainer: {  // Styles for each task item container
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#53a2dfda',
    borderRadius: 5,
  },
  taskText: {
    fontSize: 18,
  },
  deleteButton: {
    color: 'red',
  },
});