import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.pressableContainer}>
                <AntDesign
                    style={{ paddingLeft: 10 }}
                    name="search1"
                    size={22}
                    color="black"
                />
                <TextInput
                    placeholder='Search Amazon.in'
                />
            </Pressable>
            <Feather
                name="mic"
                size={22}
                color="black"
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00CED1',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    pressableContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 7,
        gap: 10,
        backgroundColor: 'white',
        borderRadius: 3,
        height: 38,
        flex: 1,
    }
})