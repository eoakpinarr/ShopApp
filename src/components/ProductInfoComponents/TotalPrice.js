import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import Ionicons from "react-native-vector-icons/Ionicons"

const TotalPrice = () => {

    const route = useRoute();
    const item = route?.params;

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.totalStock}>
                    <Text style={styles.price}>Total: ${item?.price} </Text>
                    <Text style={styles.stockText}>in Stock</Text>
                </View>
                <Text style={styles.desc}>FREE delivery Tomorrow by 3 PM. Order within 10 hours 30 mins</Text>
                <View style={styles.addressContainer}>
                    <Ionicons name="location" size={24} color={"black"} />
                    <Text style={styles.addressText}>Deliver To EOA - Erzincan 24050</Text>
                </View>
            </View>

        </View>

    )
}

export default TotalPrice

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    price: {
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 5,
        color: 'black'
    },
    desc: {
        color: '#00CED1'
    },
    addressContainer: {
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: 'center',
        gap: 5
    },
    addressText: {
        color: 'black',
        fontSize: 15,
        fontWeight: '500'
    },
    stockText: {
        color: 'green',
        marginHorizontal: 10,
        fontWeight: "500"
    },
    totalStock: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})