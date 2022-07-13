import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]); 

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      {/*Today's task*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>TODOs</Text>
        <View style={styles.items}>
          {/*This is where the tasks will go*/}
          {
            taskItems.map((items, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={items}></Task>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
      >

      <TextInput style={styles.input} placeholder={'Write a task'} placeholderTextColor={'#fff'} value={task} onChangeText={text => setTask(text)}></TextInput>
      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>

    </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#382827',
  },

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },

  items: {
    marginTop: 20,
  },

  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#543f3e',
    width: 250,
    borderRadius: 60,
    borderColor: '#543f3e',
    borderWidth: 1,
    color: '#fff'
  },

  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#543f3e',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#543f3e',
    borderWidth: 1,
  },

  addText: {
    fontWeight: 'bold', 
    color: '#fff',
    fontSize: 20
  },
});
