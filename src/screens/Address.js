import { StyleSheet, Text, ScrollView, View, TextInput, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { UserType } from '../context/UserContext'
import { jwtDecode } from 'jwt-decode'

const Address = () => {

    const [name, setName] = useState("")
    const [mobileNo, setMobileNo] = useState("")
    const [houseNo, setHouseNo] = useState("")
    const [street, setStreet] = useState("")
    const [landmark, setLandmark] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const { userId, setUserId } = useContext(UserType)

    useEffect(() => {
        const fetchUser = async () => {
            const token = await AsyncStorage.getItem("authToken")
            const decodedToken = jwtDecode(token)
            const userId = decodedToken.userId
            setUserId(userId)
        }
        fetchUser();
    }, []);
    console.log("User ID: ", userId)

    //Empty user ıd error!

    const handleAddAddress = () => {

    }

    return (
        <ScrollView>
            <View style={styles.closeView} />
            <View style={styles.container}>
                <Text style={styles.title}>Add a new Address</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Address Name'
                    placeholderTextColor={'black'}
                />

                <View style={styles.nContainer}>
                    <Text style={styles.text}>Full name (First and last name)</Text>
                    <TextInput
                        value={name}
                        onChangeText={text => setName(text)}
                        style={styles.textInput}
                        placeholder='Enter Your Name'
                        placeholderTextColor={'black'}
                    />
                </View>

                <View style={styles.nContainer}>
                    <Text style={styles.text}>Mobile number</Text>
                    <TextInput
                        value={mobileNo}
                        onChangeText={text => setMobileNo(text)}
                        style={styles.textInput}
                        placeholder='Enter Your Mobile Phone Number'
                        placeholderTextColor={'black'}
                    />
                </View>

                <View style={styles.nContainer}>
                    <Text style={styles.text}>Flat, House No, Building, Company</Text>
                    <TextInput
                        value={houseNo}
                        onChangeText={text => setHouseNo(text)}
                        style={styles.textInput}
                        placeholder=''
                        placeholderTextColor={'black'}
                    />
                </View>

                <View style={styles.nContainer}>
                    <Text style={styles.text}>Area, Street, Sector, Village</Text>
                    <TextInput
                        value={street}
                        onChangeText={text => setStreet(text)}
                        style={styles.textInput}
                        placeholder=''
                        placeholderTextColor={'black'}
                    />
                </View>

                <View style={styles.nContainer}>
                    <Text style={styles.text}>Landmark</Text>
                    <TextInput
                        value={landmark}
                        onChangeText={text => setLandmark(text)}
                        style={styles.textInput}
                        placeholder='Eg Near Apollo Hospital'
                        placeholderTextColor={'black'}
                    />
                </View>

                <View style={styles.nContainer}>
                    <Text style={styles.text}>Pin Code</Text>
                    <TextInput
                        value={postalCode}
                        onChangeText={text => setPostalCode(text)}
                        style={styles.textInput}
                        placeholder='Enter Pin Code'
                        placeholderTextColor={'black'}
                    />
                </View>

                <Pressable onPress={handleAddAddress} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Add Address</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default Address

const styles = StyleSheet.create({
    closeView: {
        height: 50,
        backgroundColor: '#FFC727'
    },
    container: {
        padding: 10
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'
    },
    textInput: {
        padding: 10,
        borderColor: '#D0D0D0',
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 5
    },
    nContainer: {
        marginVertical: 10
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black'
    },
    buttonContainer: {
        backgroundColor: '#FFC727',
        padding: 10,
        borderRadius: 6,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'black'
    }
})
