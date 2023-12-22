import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ButtonComponent = () => {
    return (
        <View>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Add to Cart</Text>
            </Pressable>
            <Pressable style={[styles.button, {backgroundColor: '#D0D0D0'}]}>
                <Text style={styles.buttonText}>Buy Now</Text>
            </Pressable>
        </View>
    )
}

export default ButtonComponent

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FFC72C',
        padding: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 10,

    },
    buttonText: {
        color: 'black'
    },

})