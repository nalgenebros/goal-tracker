import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Task from './Task';
import { AlertModal, Input, Button } from './common';
import { Card, CardSection } from './gridercommon';
import styles from '../styles/styles';

class TasksHome extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      taskToAdd: null,
      tasks: [],
      alertModalVisible: false
     };
  }

addTask() {
  console.log(this.props);
  if (this.state.taskToAdd) {
    const tasks = this.state.tasks.slice();
    const task = {
      title: this.state.taskToAdd,
      completed: false
    };
    tasks.push(task);
    this.setState({
      tasks,
      taskToAdd: null
    });
  } else {
    this.setState({ alertModalVisible: true });
  }
}

removeTask(index) {
  const tasks = this.state.tasks;
  tasks.splice(index, 1);
  this.setState({
    tasks
  });
}

closeModal() {
    this.setState({ alertModalVisible: false });
}

taskTextChange(taskToAdd) {
  this.setState({ taskToAdd });
}
navToCalendar() {
  Actions.cal();
}

renderTasks() {
  return this.state.tasks.map(
      (task, index) => 
        (<Task 
          removeTask={this.removeTask.bind(this)} 
          key={index} 
          text={task.title} 
          status={task.completed} 
          index={index}
        />)
    ); 
}

    render() {
        return (
      <View style={styles.container}>
        <ScrollView style={{ width: 300, height: 300, backgroundColor: '#4CAF50' }}>
          {this.renderTasks()}
        </ScrollView>

        <View style={{ paddingTop: 5 }}>
            <Button onPress={this.navToCalendar.bind(this)}>Calendar</Button>
        </View>
        
        <View style={{ width: 300, height: 120, marginBottom: 10, backgroundColor: '#4CAF50' }}>
          <Input
            onSubmitEditing={this.addTask.bind(this)}
            placeholderTextColor={'#FFF'}
            placeholder='Add a Task!' 
            onChangeText={this.taskTextChange.bind(this)} 
            value={this.state.taskToAdd} 
          />
          <Button onPress={this.addTask.bind(this)}>
            Add
          </Button>
        </View>
        <AlertModal 
          visible={this.state.alertModalVisible} 
          modalText='Please add a task name!'
          closeModal={this.closeModal.bind(this)}
          closeText='OK'
        />

      </View>
        );
    }
}

export default TasksHome;
