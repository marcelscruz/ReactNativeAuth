import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC9j6apeRJt97xxr60xu0XZ2hAwOD7RwXs',
      authDomain: 'auth-fc961.firebaseapp.com',
      databaseURL: 'https://auth-fc961.firebaseio.com',
      projectId: 'auth-fc961',
      storageBucket: 'auth-fc961.appspot.com',
      messagingSenderId: '122981550719'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
        {console.log('test')}
      </View>
    );
  }
}

export default App;
