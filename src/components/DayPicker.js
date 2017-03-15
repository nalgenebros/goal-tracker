import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { taskUpdate } from '../actions';
import Day from './Day';

class DayPicker extends Component {
    componentDidMount() {
        console.log('PROPS.DAYS FROM MAPSTATETOPROPS', this.props.days);
    }

    renderDays() {
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        if (this.props.days) {
            return days.map((day) => {
            if (this.props.days[day]) {
                return (<Day style={styles.activeDay} day={day} key={day} />);
            } 
                return (<Day style={styles.inactiveDay} day={day} key={day} />);
            });
        } 
    }

    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                {this.renderDays()}
            </View>

        );
    }
}

const styles = {
    activeDay: {
        backgroundColor: '#FFF',
        height: 38,
        width: 38,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 5
    },
    inactiveDay: {
        backgroundColor: '#7D7C7A',
        height: 38,
        width: 38,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 5
    }
};

const mapStateToProps = (state) => {
    console.log('mapping state to props in DayPicker');
    const { days } = state.tasksForm;

    return { days };
};


export default connect(mapStateToProps, { taskUpdate })(DayPicker);

