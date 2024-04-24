import React from "react";
import InputBox from "../components/InputBox";
import {StyleSheet, View, Image } from "react-native";

const LoginScreen = () => {
    return(
    <View style = {styles.container}>
        <View style={styles.imageContainer}>
            <View >
                <Image
                style={styles.logo}
                source={require('../../assets/32bitLogo.png')}
                />
            </View>
            <InputBox/> 
        </View>
    </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding:'30%'
    },
    imageContainer:{
        height:700,
        width:700,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 350,
        height: 100,
        margin:50
      },
});


export default LoginScreen;