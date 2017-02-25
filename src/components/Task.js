import React, { Component } from 'react';
import { Animated, Text } from 'react-native';
import { Button } from './common';
import styles from '../styles/styles';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         status: this.props.status,
         fadeAnim: new Animated.Value(0) 
        };
    }
    componentDidMount() {
        Animated.timing(this.state.fadeAnim, { toValue: 1 }).start();                
    }
    removeTask() {
        this.props.removeTask(this.props.index);
    }
    completeTask() {
        this.setState({
            status: !this.state.status
        });
        console.log('STATE FROM COMPLETETASK CALL', this.state);
    }
    completeOrNah() {
        if (this.state.status) {
            return 'COMPLETE';
        } 
            return 'INCOMPLETE';
    }
    buttonTextConditional() {
        if (this.state.status) {
            return 'incomplete';
        } 
            return 'complete';
    }
    render() {
        return (
        <Animated.View style={{ padding: 5, opacity: this.state.fadeAnim }}>
            <Text style={styles.welcome}> {this.props.text} </Text>
            <Text style={styles.welcome}> COMPLETED: {this.completeOrNah()} </Text>
            <Button onPress={this.completeTask.bind(this)}>
                Tap to {this.buttonTextConditional()}
            </Button>
            <Button onPress={this.removeTask.bind(this)}>
                X
            </Button>
        </Animated.View>);
    }
}

export default Task;
