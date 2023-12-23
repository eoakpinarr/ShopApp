import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import DropDownPicker from 'react-native-dropdown-picker'
import ProductItemComponent from './ProductItemComponent'

const ProductItem = () => {


    const [products, setProducts] = useState([])
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState("jewelery");
    const [items, setItems] = useState([
        { label: "Men's clothing", value: "men's clothing" },
        { label: "Jewelery", value: "jewelery" },
        { label: "Electronics", value: "electronics" },
        { label: "Women's Clothing", value: "women's clothing" },
    ]);

    const onGenderOpen = useCallback(() => {
        setCompanyOpen(false)
    }, [])

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
        <View>
            <View style={[
                styles.container2,
                { marginBottom: open ? 50 : 15 }
            ]}>
                <DropDownPicker
                    style={[
                        styles.dropdownContainer,
                        { marginBottom: open ? 120 : 15 }
                    ]}
                    open={open}
                    value={category}
                    items={items}
                    setOpen={setOpen}
                    setValue={setCategory}
                    setItems={setItems}
                    placeholder='choose category'
                    placeholderStyle={styles.placeholderStyle}
                    onOpen={onGenderOpen}
                    zIndex={3000}
                    zIndexInverse={1000}
                />
            </View>

            <View style={styles.container}>
                {products?.filter((item) => item.category === category).map((item, index) => (
                    <ScrollView key={index}>
                        <ProductItemComponent item= {item}/>
                    </ScrollView>

                ))}
            </View>
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