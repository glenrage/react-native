import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Button } from 'react-native';
import { Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null
  };
  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: 'AIzaSyBjV3MEgs0srcvKV5W8oKg7hVYRoNiTLjw',
      authDomain: 'auth-8bfe6.firebaseapp.com',
      databaseURL: 'https://auth-8bfe6.firebaseio.com',
      projectId: 'auth-8bfe6',
      storageBucket: 'auth-8bfe6.appspot.com',
      messagingSenderId: '449870515066'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button title="Logout" onPress={() => firebase.auth().signOut()} />;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
