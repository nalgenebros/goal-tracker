import React, { Component } from 'react';
import _ from 'lodash';
import { View, ScrollView, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Task from './Task';
import { AlertModal, Input, Button } from './common';
import { Card, CardSection } from './gridercommon';
import { tasksFetch } from '../actions';
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
  componentWillMount() {
      this.props.tasksFetch();
      this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
      //nextProps are the next set of props that this component will be rendered cloneWithRows
      //this.props is still the old set of props
      this.createDataSource(nextProps);
  }
  createDataSource({ tasks }) {
      const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.dataSource = ds.cloneWithRows(tasks);
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

navToCreateTask() {
  Actions.createTask();
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
/*
renderTasks() {
  return this.props.tasks.map(
      (task, index) => 
        (<Task 
          removeTask={this.removeTask.bind(this)} 
          key={index} 
          text={task.title} 
          status={task.status} 
          index={index}
        />)
    ); 
}*/

renderRow(task) {
    return <Task text={task.title} status={task.status} />;
}

    render() {
        return (
      <View style={styles.container}>
        <Card>

          <CardSection>
                <ListView 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
                style={{ width: 300, height: 420, backgroundColor: '#4CAF50' }} 
                />
          </CardSection>

          <CardSection>   
                {/*<View 
                style={{ width: 300, height: 50, marginBottom: 10, backgroundColor: '#4CAF50' }}
                >*/}
                  {/*<Input
                    onSubmitEditing={this.addTask.bind(this)}
                    placeholderTextColor={'#FFF'}
                    placeholder='Add a Task!' 
                    onChangeText={this.taskTextChange.bind(this)} 
                    value={this.state.taskToAdd} 
                  />*/}
                  <Button onPress={this.navToCreateTask.bind(this)}>
                    Add
                  </Button>
                {/*</View>*/}
          </CardSection>

                <AlertModal 
                  visible={this.state.alertModalVisible} 
                  modalText='Please add a task name!'
                  closeModal={this.closeModal.bind(this)}
                  closeText='OK'
                />
        </Card>
      </View>
        );
    }
}

const mapStateToProps = (state) => {
    const tasks = _.map(state.tasks, (val, uid) => {
        return { ...val, uid };
    });
    return { tasks };
};

export default connect(mapStateToProps, { tasksFetch })(TasksHome);
