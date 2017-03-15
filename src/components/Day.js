import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableHighlight } from 'react-native';
import { taskUpdate } from '../actions';

class Day extends Component {

    render() {
        return (
            <View key={this.props.day} style={this.props.style}>
             <TouchableHighlight
                onPress={() => {
                        const days = {
                        ...this.props.days, 
                        [this.props.day]: !this.props.days[this.props.day]
                        };

                        this.props.taskUpdate({ prop: 'days', value: days });
                        }}
             >
                 <View>
                     <Text>
                         {this.props.day.slice(0, 2)}
                     </Text>
                 </View>
             </TouchableHighlight>
            </View> 
        );
    }
}

const mapStateToProps = (state) => {
    const { days } = state.tasksForm;

    return { days };
};


export default connect(mapStateToProps, { taskUpdate })(Day);
