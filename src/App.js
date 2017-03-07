import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';
import fireconfig from '../fireconfig';
import reducers from './reducers';

class App extends Component {


  componentWillMount() {
    firebase.initializeApp(fireconfig);
  }

  /*renderContent() {
    if(this.state.loggedIn) {
      return (
        <Button onPress={() => firebase.auth().signOut()}>
          Log Out
        </Button>
      )
    }
  }*/

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
