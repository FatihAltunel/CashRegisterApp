import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import LoginTextInput from "../components/LoginTextInput";
import PasswordTextInput from "../components/PasswordTextInput";

const InputBox = () =>{
    const welcome = 'Welcome!';
    const message = "Please enter your usercode and password";
    return(
        <View style={styles.container}>
            <View style={styles.textView}>
                <Text style={styles.header}>
                    {welcome}
                </Text>
                <Text style={styles.message}>
                    {message}
                </Text>
            </View>
            <LoginTextInput/>
            <PasswordTextInput />
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderRadius:15,
        alignItems:'center',
        flexDirection:'column',
        justifyContent:"center",
        padding:72,
    },
    textView:{
        alignItems:'center',
        flexDirection:'column',
        justifyContent:"center",
        padding:10
    },
    header: {
        fontSize: 24, // Metin boyutu 24
        fontWeight: 'bold', // Kalın font ailesi
    },
    message: {
        fontSize: 16, // Metin boyutu 16
    },
})

export default InputBox;