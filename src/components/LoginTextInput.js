import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import { useState } from 'react';
const LoginTextInput = () => {

  const [Text, onChangeText] = useState('');
  return (
    <View style={styles.inputView}>
      <TextInput
        placeholder='Username'
        style={styles.input}
        onChangeText={onChangeText}
        value={Text}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height:40,
    width:400,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:15,
  },
  inputView:{
    flexDirection:"column"
  }
});

export default LoginTextInput;