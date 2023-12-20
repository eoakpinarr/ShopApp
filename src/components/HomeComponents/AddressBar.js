import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const AddressBar = () => {
    return (
        <View style={styles.container}>
            <Ionicons
                name="location-outline"
                size={24}
                color="black"
            />
            <Pressable>
                <Text style={styles.addressText}>Deliver to EOA - Erzincan 24050</Text>
            </Pressable>

            <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color="black"
            />
        </View>
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