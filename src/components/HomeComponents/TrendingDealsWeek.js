import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import dealsData from '../../assets/deals.json'

const TrendingDealsWeek = () => {
    return (
        <View>
            <Text style={styles.openText} />
            <Text style={styles.text}>Trending Deals of the week</Text>
            <View style={styles.container}>
                {dealsData.map((item, index) => (
                    <Pressable style={styles.pressableContainer} key={index}>
                        <Image
                            style={styles.image}
                            source={{ uri: item.image }}
                        />
                    </Pressable>
                ))
                }
            </View>
            <Text style={styles.closeText} />
        </View>
    )
}

export default TrendingDealsWeek

const styles = StyleSheet.create({
    text: {
        paddingBottom: 10,
        paddingHorizontal: 10,
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    pressableContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    closeText: {
        height: 1,
        borderColor: '#D0D0D0',
        borderWidth: 1,
        marginTop: 15,
    },
    openText: {
        height: 1,
        borderColor: '#D0D0D0',
        borderWidth: 1,
        marginBottom: 5,
    },
})