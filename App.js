import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAkAxBrFUdeyQFN1DrVzFlTnTAznYFqJUo",
  authDomain: "react-native-with-fireba-e9ee9.firebaseapp.com",
  databaseURL: "https://react-native-with-fireba-e9ee9.firebaseio.com",
  projectId: "react-native-with-fireba-e9ee9",
  storageBucket: "react-native-with-fireba-e9ee9.appspot.com",
  messagingSenderId: "55646646845",
  appId: "1:55646646845:web:401c80cb01738278253054",
  measurementId: "G-Q3RHWRKKT6"
};
firebase.initializeApp(firebaseConfig);

class App extends Component {

  constructor(props) {
    super(props)
    this.state = ({
      email: '',
      password: ''
    })
  }

  signupUser() {
    var Email = this.state.email
    var Password = this.state.password
    console.log(Email);
    try {
      firebase.auth().createUserWithEmailAndPassword(Email, Password)
    } catch (error) {
      console.log(error)
    }
  }

  loginUser() {
    var Email = this.state.email
    var Password = this.state.password
    try {
      firebase.auth().signInWithEmailAndPassword(Email, Password).then(function (user) {
        console.log(user)
      })
    } catch (error) {
      console.log(error.toString())
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <TextInput style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            onChangeText={(email) => this.setState({ email })} />

          <TextInput style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({ password })} />

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.signupUser.bind(this)}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.loginUser.bind(this)}>
          <Text>Log In</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#DCDCDC',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
})
