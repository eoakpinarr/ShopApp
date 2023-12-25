import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { useNavigation } from '@react-navigation/native'

const AddAddressComponent = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Your Addresses</Text>
            <Pressable
                onPress={() => navigation.navigate("Add")}
                style={styles.addAddress}
            >
                <Text>Add a new Address</Text>
                <MaterialIcons
                    name="keyboard-arrow-right"
                    size={24}
                    color={"black"}
                />
            </Pressable>

            <Pressable>
                {/* All the added address */}
            </Pressable>
        </View>
    )
}

export default AddAddressComponent

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    addAddress: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        borderColor: '#D0D0D0',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        paddingVertical: 7,
        paddingHorizontal: 5,
    }
})