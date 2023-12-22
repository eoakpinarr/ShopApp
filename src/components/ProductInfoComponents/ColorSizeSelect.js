import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const ColorSizeSelect = () => {

    const route = useRoute()
    const item = route?.params

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>Color: </Text>
                <Text style={styles.textColor}>{item?.color}</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Size: </Text>
                <Text style={styles.textColor}>{item?.size}</Text>
            </View>
            <Text style={styles.closeText} />
        </View>
    )
}

export default ColorSizeSelect

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    title: {
        color: 'black'
    },
    textColor: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black'
    },
    closeText: {
        height: 1,
        borderColor: '#D0D0D0',
        borderWidth: 1,
    }
})