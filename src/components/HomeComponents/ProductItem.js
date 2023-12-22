import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ProductItem = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products")
                setProducts(response.data);
            } catch (error) {
                console.log("Error: ", error)
            }
        }
        fetchData();

    }, [products])

    return (
        <View style={styles.container}>
            {products?.map((item, index) => (
                <Pressable key={index} style={styles.pressableContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: item.image }}
                    />
                    <Text numberOfLines={1} style={styles.titleText}>{item?.title}</Text>
                </Pressable>
            ))}
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    pressableContainer: {
        marginHorizontal: 20,
        marginVertical: 25
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    titleText: {
        width: 150,
        marginTop: 10
    }
})