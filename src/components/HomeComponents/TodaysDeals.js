import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import offersData from '../../assets/offers.json'
import { useNavigation } from '@react-navigation/native'

const TodaysDeals = () => {

    const navigation = useNavigation()

    return (
        <View>
            <Text style={styles.text}>Today's Deals</Text>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal>
                {offersData.map((item, index) => (
                    <Pressable
                        onPress={() => navigation.navigate("Info", {
                            id: item?.id,
                            title: item?.title,
                            price: item?.price,
                            carouselImages: item?.carouselImages,
                            color: item?.color,
                            size: item?.size,
                            oldPrice: item?.oldPrice,
                            item: item,
                        })}
                        style={styles.pressableContainer}
                        key={index}
                    >
                        <Image
                            style={styles.image}
                            source={{ uri: item.image }}
                        />
                        <View style={styles.container}>
                            <Text style={styles.textOffer}>Upto {item?.offer} off</Text>
                        </View>
                    </Pressable>
                ))}
            </ScrollView>
            <Text style={styles.closeText} />

        </View>
    )
}

export default TodaysDeals

const styles = StyleSheet.create({
    pressableContainer: {
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        padding: 10,
        fontSize: 18,
        fontWeight: "bold",
        color: 'black'
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    container: {
        backgroundColor: '#E31837',
        paddingVertical: 5,
        width: 130,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 4
    },
    textOffer: {
        textAlign: 'center',
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold',
    },
    closeText: {
        height: 1,
        borderColor: '#D0D0D0',
        borderWidth: 1,
        marginTop: 15,
    },
})