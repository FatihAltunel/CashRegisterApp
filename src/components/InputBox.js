import React from 'react';
import {StyleSheet,View,Text, Button, TextInput, Vibration} from 'react-native';
import IconUser from 'react-native-vector-icons/FontAwesome';
import IconLock from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { users } from '../data/Users';

//const iconUser = <IconUser name="user" size={30} color="#900" />;
//const iconLock = <IconLock name="lock" size={30} color="#900" />;

const InputBox = () =>{
    const welcome = 'Welcome!';
    const message = "Please enter your usercode and password";
    const [usercode, setUsercode] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    setUserValue = async (value) => {
        try {
          await AsyncStorage.setItem('user1', JSON.stringify(users.user1))
          await AsyncStorage.setItem('user2', JSON.stringify(users.user2))
          await AsyncStorage.setItem('user3', JSON.stringify(users.user3))
          await AsyncStorage.setItem('userTemp', JSON.stringify(value))
          console.log("setUserValue'Daki userTemp:", JSON.stringify(value))

        } catch(e) {}
    }
    const isEqual = (obj1, obj2) => {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    };
   getUserValue = async () => {
          const userTemp = JSON.parse(await AsyncStorage.getItem('userTemp'))
          const user1 = JSON.parse(await AsyncStorage.getItem('user1'))
          const user2 = JSON.parse(await AsyncStorage.getItem('user2'))
          const user3 = JSON.parse(await AsyncStorage.getItem('user3'))
          console.log("getUserValue'daki userTemp:", userTemp)
          console.log("user1:", user1)
          console.log("user2:", user2)
          console.log("user3:", user3)

        if (isEqual(userTemp, user1) || isEqual(userTemp, user2) || isEqual(userTemp, user3)) {
            return true;
        } else {
            return false;
        }
    } 
    const ValidateForm = () => {
        const errors = {};

        if(!usercode){errors.usercode="Usercode is Required"; Vibration.vibrate()}
        if(!password){errors.password="Password is Required"; Vibration.vibrate()}

        setErrors(errors);

        return Object.keys(errors).length===0; //Fonksiyon, errors nesnesinin özelliklerini (yani hataları) alır, bunların sayısını kontrol eder. Eğer hiç hata yoksa (yani errors nesnesinin özellik sayısı 0 ise), true döndürülür. Aksi halde, yani hata varsa false döndürülür. Bu, fonksiyonun dışındaki koda formun geçerli olup olmadığını belirtmek için bir değer sağlar.
      };

    const handleSubmit = async  () => {
        if(ValidateForm()){
            console.log("Submitted", usercode, password);
            const tempUser = {
                usercode: usercode,
                password: password
            }
            await setUserValue(tempUser);
            if(await getUserValue() == true){
                console.log("başarıyla giriş yaptı")
            }else{
                console.log("there is no such a user as this, try again")
            }
            setUsercode("");
            setPassword("");
            setErrors({});
        }
    }

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
            <View style={styles.inputView}>
                <IconUser name="user" size={30} color="#900" />
            <TextInput
                placeholder='Usercode'
                style={styles.input}
                onChangeText={setUsercode}
                value={usercode}
                />
            {
            errors.usercode ? <Text style={styles.errorText}>{errors.usercode}</Text> : null
            }
            </View>
            <View style={styles.inputView}>
                <IconLock name="lock" size={30} color="#900"/>
                <TextInput
                    placeholder='Password'
                    secureTextEntry = {true}
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    />
                {
                errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null
                }
            </View>
            <View style={styles.button}>
                <Button 
                color="#900"
                title="Login"
                onPress={handleSubmit}
                />
            </View>
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
    inputView:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:'center',
        alignContent:'center'
      },
    textView:{
        alignItems:'center',
        flexDirection:'column',
        justifyContent:"center",
        padding:10
    },
    input: {
        height:40,
        width:400,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:15,
      },
    header: {
        fontSize: 24, // Metin boyutu 24
        fontWeight: 'bold', // Kalın font ailesi
    },
    message: {
        fontSize: 16, // Metin boyutu 16
    },
    button:{
        height:40,
        width:440,
    },
    errorText:{
        color:"#900",
        marginBottom:10,
      }
})

export default InputBox;