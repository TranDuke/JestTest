import React, { Component } from 'react';
import { Text, TouchableOpacity, View, TextInput, Alert } from 'react-native';
class Jest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
      hide: true,
    };
  }
  onPressHandler = () => {
    const { user, pass } = this.state;
    const reg = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        reg.test(user)
          ? {
            text: 'true',
            onPress: () => console.log('Ask me later pressed'),
          }
          : {
            text: 'false',
            onPress: () => console.log('Ask me later pressed'),
          },
      ],
      { cancelable: false },
    );
  };

  onChangeUser = user => {
    this.setState({ user });
    console.log(this.state.user);
  };

  onChangePass = pass => {
    this.setState({ pass });
  };

  onHide = () => {
    this.setState({ hide: !this.state.hide });
  };

  render() {
    const { user, pass, hide } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          className="username"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          autoCorrect={false}
          numberOfLines={1}
          multiline={false}
          style={styles.textInput}
          value={user}
          maxLength={25}
          onChangeText={this.onChangeUser}
          placeholder="Enter your email or phone number"
        />
        <TextInput
          className="pass"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          autoCorrect={false}
          numberOfLines={1}
          multiline={false}
          secureTextEntry={hide}
          style={styles.textInput}
          value={pass}
          maxLength={25}
          onChangeText={this.onChangePass}
          placeholder="Enter your pass"
        />
        <TouchableOpacity
          style={[
            styles.hide,
            { backgroundColor: hide ? 'rgb(4, 219, 36)' : 'tomato' },
          ]}
          onPress={this.onHide}>
          <Text style={styles.textStyle}>Hide/Show</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.onPressHandler}
          style={styles.buttonStyle}>
          <Text style={styles.textStyle}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgb(212, 204, 201)',
  },
  textInput: {
    backgroundColor: 'white',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 25,
    marginVertical: 16,
    paddingHorizontal: 16,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonStyle: {
    height: 45,
    width: '90%',
    justifyContent: 'center',
    backgroundColor: '#38ba7d',
    borderBottomColor: '#1e6343',
    borderRadius: 16,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignSelf: 'center',
    marginVertical: 32,
  },
  hide: {
    height: 50,
    width: '40%',
    paddingHorizontal: 16,
    borderRadius: 25,
    justifyContent: 'center',
    alignSelf: 'center',
  },
};

export default Jest;
