import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import listData from "../../assets/list.json"

const CategoryBar = () => {

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {listData.map((item, index) => (
                <Pressable key={index} style={styles.container}>
                    <Image
                        style={styles.image}
                        source={{ uri: item?.image }} />

                    <Text style={styles.text}>{item?.name}</Text>
                </Pressable>
            ))}
        </ScrollView>
    )
}

export default CategoryBar

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginBottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    text: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '500',
        marginTop: 5,
    }
})