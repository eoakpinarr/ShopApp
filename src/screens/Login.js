import { Alert, Image, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const token = await AsyncStorage.getItem("authToken")
                if (token) navigation.replace("Main");

            } catch (error) {
                console.log("Error ", error)
            }
        };
        checkLoginStatus();
    })

    const handleLogin = () => {
        const user = {
            email: email,
            password: password,
        };

        //send a post request to the backend API
        //android emulator can't run localhost. Use "10.0.2.2"
        axios
            .post("http://10.0.2.2:8000/login", user)
            .then((response) => {
                console.log(response);

                const token = response.data.token;
                AsyncStorage.setItem("authToken", token);

                navigation.replace("Main");
            })
            .catch((error) => {
                Alert.alert(
                    "Login Error",
                    "Invalid Email"
                );
                console.log("Error Login ", error);
            })
    }

    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png'
                    }}
                />
            </View>

            <KeyboardAvoidingView>

                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.text}>Login to your Account</Text>
                </View>

                <View style={styles.contentContainer}>
                    <View style={styles.textInputContainer}>
                        <Ionicons
                            name="mail"
                            size={24}
                            color={"gray"}
                            style={styles.icon}
                        />
                        <TextInput
                            value={email}
                            onChangeText={text => setEmail(text)}
                            style={styles.textInput}
                            placeholder='enter your Email'
                        />
                    </View>
                </View>



                <View style={{ marginTop: 10 }}>
                    <View style={styles.textInputContainer}>
                        <Ionicons
                            name="lock-closed-outline"
                            size={24}
                            color={"gray"}
                            style={styles.icon}
                        />
                        <TextInput
                            value={password} secureTextEntry
                            onChangeText={text => setPassword(text)}
                            style={styles.textInput}
                            placeholder='enter your Password'
                        />
                    </View>
                </View>

                <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text>Keep me logged in</Text>
                    <Text style={{ color: '#007FFF' }}>Forgot Password</Text>
                </View>

                <View style={{ marginTop: 80 }} />

                <Pressable onPress={handleLogin} style={styles.buttonContainer}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Login</Text>
                </Pressable>

                <Pressable
                    style={{ marginTop: 15 }}
                    onPress={() => {
                        navigation.navigate('Register')
                    }}
                >
                    <Text style={{
                        textAlign: 'center',
                        color: 'gray',
                        fontSize: 16,
                    }}>
                        Don't have an account? Sign Up
                    </Text>
                </Pressable>


            </KeyboardAvoidingView>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    contentContainer: {
        marginTop: 50,
    },
    image: {
        width: 150,
        height: 100,
    },
    text: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 12,
        color: '#041e42'
    },
    textInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#D0D0D0',
        borderRadius: 5,
        marginTop: 30,
        gap: 2,
    },
    textInput: {
        color: 'gray',
        width: 300,
        fontSize: 16
    },
    icon: {
        marginLeft: 8
    },
    buttonContainer: {
        backgroundColor: '#FEBE10',
        borderRadius: 6,
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        padding: 10,
    }
})