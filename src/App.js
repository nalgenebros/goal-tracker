import React, { Component } from 'react';
import Router from './Router';
import firebase from 'firebase';
import fireconfig from '../fireconfig';
import { Button } from './components/gridercommon';

class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp(fireconfig);

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    if(this.state.loggedIn) {
      return (
        <Button onPress={() => firebase.auth().signOut()}>
          Log Out
        </Button>
      )
    }
  }

  render() {
    return (
      <Router />
    );
  }
}

export default App;
