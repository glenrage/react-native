import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCzxAz8rS5s4sP1B5a5VCghBdlLq8W0UvQ',
      authDomain: 'manager-9f41a.firebaseapp.com',
      databaseURL: 'https://manager-9f41a.firebaseio.com',
      projectId: 'manager-9f41a',
      storageBucket: '',
      messagingSenderId: '54629543786'
    };
    firebase.initializeApp(config);
  }
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
