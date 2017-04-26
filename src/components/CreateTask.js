import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Picker, Text } from 'react-native';
import { Button } from './common';
import { Input, Card, CardSection, } from './gridercommon';
import { taskUpdate, taskCreate } from '../actions';
import DayPicker from './DayPicker';

class CreateTask extends Component {
    onButtonPress() {
        const { title, status, days } = this.props;
        this.props.taskCreate({ 
            title,
            status: status || 'Incomplete',
            days });
    }
    render() {
      return (
        <View style={styles.container}>
          <Card>
              <CardSection>
                  <Input
                  placeholderTextColor={'#FFF'}
                  placeholder='Add a Task!' 
                  onChangeText={value => this.props.taskUpdate({ prop: 'title', value })}
                  label='Task Title'
                  />
              </CardSection>

              <CardSection >
                  <Text style={styles.pickerLabelStyle}>Status</Text>
                  <Picker 
                  selectedValue={this.props.status}
                  onValueChange={value => this.props.taskUpdate({ prop: 'status', value })}
                  style={{ flex: 1 }}
                  >
                      <Picker.Item label='Incomplete' value='Incomplete' />
                      <Picker.Item label='Complete' value='Complete' />
                  </Picker>
              </CardSection>
              <CardSection>
                  <DayPicker />
              </CardSection>
              <CardSection>
                  <Button onPress={this.onButtonPress.bind(this)}>
                      Add Task
                  </Button>
              </CardSection>
          </Card>
        </View>
          
      );
    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        color: '#FFF'
    },
    container: {
          flex: 1,
          backgroundColor: '#4CAF50'
    }
};


const mapStateToProps = (state) => {
    const { title, status, days } = state.tasksForm;
    return { title, status, days };
};

export default connect(mapStateToProps, { taskUpdate, taskCreate })(CreateTask);
