import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRoute } from '@react-navigation/native'
import { addToCart } from '../../redux/reducers/CartReducer'

const ButtonComponent = () => {

    const [addedToCart, setAddedToCart] = useState(false)
    const route = useRoute()
    const product = route?.params
    const cart = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch();

    const addItemToCart = (item) => {
        setAddedToCart(true)
        dispatch(addToCart(item))
        setTimeout(() => {
            setAddedToCart(false)
        }, 1000)
    }

    console.log("Cart: ", cart)

    return (
        <View>
            <Pressable
                onPress={() => addItemToCart(product?.item)}
                style={styles.button}
            >
                {addedToCart ?
                    <View>
                        <Text>Added to Cart</Text>
                    </View>
                    : <Text style={styles.buttonText}>Add to Cart</Text>
                }

            </Pressable>
            <Pressable style={[styles.button, { backgroundColor: '#D0D0D0' }]}>
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

