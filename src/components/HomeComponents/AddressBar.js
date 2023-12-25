import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import BottomModalComponent from './modal/BottomModalComponent'

const AddressBar = () => {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
            <Pressable onPress={() => setModalVisible(!modalVisible)} style={styles.container}>
                <Ionicons
                    name="location-outline"
                    size={24}
                    color="black"
                />
                <Text style={styles.addressText}>Deliver to EOA - Erzincan 24050</Text>
                <MaterialIcons
                    name="keyboard-arrow-down"
                    size={24}
                    color="black"
                />
            </Pressable>
            <BottomModalComponent
                setModalVisible={setModalVisible}
                modalVisible={modalVisible}
            />
        </>

    )
}

export default AddressBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        padding: 10,
        backgroundColor: '#AFEEEE'
    },
    addressText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 13,
        fontWeight: '500'
    }
})