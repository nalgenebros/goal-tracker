import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Calendar from './components/Calendar';
import TasksHome from './components/TasksHome';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  const { transparentBorder, navBarStyle, textStyle } = styles;
  return (
    <Router
      navigationBarStyle={transparentBorder} 
      sceneStyle={{ borderWidth: 0, paddingTop: 65 }}
      barButtonIconStyle={{ tintColor: '#FFF' }}
    >
      <Scene key="auth">
        <Scene 
        navigationBarStyle={navBarStyle} 
        titleStyle={textStyle}
        key="login" 
        component={LoginForm} 
        title="GoalTracker" 
        />
      </Scene>

      <Scene key='main' navigationBarStyle={navBarStyle} titleStyle={textStyle}>
        <Scene navigationBarStyle={navBarStyle} key="tasks" component={TasksHome} title="Tasks" />
        <Scene navigationBarStyle={navBarStyle} key="cal" component={Calendar} title="Calendar" />
      </Scene>

    </Router>
  );
};

const styles = {
  transparentBorder: {  
      borderBottomColor: 'transparent', 
      borderBottomWidth: 65
  },
  navBarStyle: {
    backgroundColor: '#4CAF50'
  },
  textStyle: { 
    backgroundColor: '#4CAF50', 
    color: '#FFF' 
  }
};

export default RouterComponent;
