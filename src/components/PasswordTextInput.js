import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import { useState } from 'react';

const PasswordTextInput = () => {
  const [Text, onChangeText] = useState('');
  return (
      <TextInput
        placeholder='Password'
        style={styles.input}
        onChangeText={onChangeText}
        value={Text}
        />
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
});

export default PasswordTextInput;