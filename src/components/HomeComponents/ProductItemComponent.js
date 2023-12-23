import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/reducers/CartReducer'

const ProductItemComponent = ({item}) => {

    const cart = useSelector((state) => state.cart.cart)
    const navigation = useNavigation()
    const [addedToCart, setAddedToCart] = useState(false)
    const dispatch = useDispatch()

    const addItemToCart = (item) => {
        setAddedToCart(true)
        dispatch(addToCart(item))
        setTimeout(() => {
            setAddedToCart(false)
        }, 3000)
        console.log("Cart: ", cart)
    }

    return (
        <View>
            <Pressable
                style={styles.pressableContainer}
            >
                <Image
                    style={styles.image}
                    source={{ uri: item.image }}
                />
                <Text numberOfLines={1} style={styles.titleText}>{item?.title}</Text>

                <View style={styles.contentContainer}>
                    <Text style={styles.priceText}>${item?.price}</Text>
                    <Text style={styles.rateText}>{item?.rating?.rate} ratings</Text>
                </View>

                <Pressable
                    onPress={() => addItemToCart(item)}
                    style={styles.pressableButton}
                >
                    {addedToCart
                        ? (
                            <View>
                                <Text>Added to Cart</Text>
                            </View>
                        ) : (<Text style={styles.buttonText}>Add to Cart</Text>)
                    }
                </Pressable>
            </Pressable>
        </View>
    )
}

export default ProductItemComponent

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
    },
    contentContainer: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    priceText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    rateText: {
        color: '#FFC72C',
        fontWeight: 'bold'
    },
    pressableButton: {
        backgroundColor: '#FFC72C',
        padding: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 10
    },
    buttonText: {
        color: 'black'
    },
    container2: {
        marginHorizontal: 10,
        width: '45%',
        marginTop: 20,
    },
    dropdownContainer: {
        borderColor: '#B7B7B7',
        height: 30,
    },
})