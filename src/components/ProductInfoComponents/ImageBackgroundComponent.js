import { ScrollView, StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import AntDesign from "react-native-vector-icons/AntDesign"


const ImageBackgroundComponent = () => {

    const route = useRoute()
    const { width } = Dimensions.get("window")
    const navigation = useNavigation()
    const height = (width * 100) / 100;

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {route.params.carouselImages.map((item, index) => (
                <ImageBackground
                    key={index}
                    source={{ uri: item }}
                    style={[
                        styles.imageBG,
                        { width, height }
                    ]}
                >
                    <View style={styles.scrollContentContainer}>

                        <View style={styles.scrollImageContainer}>
                            <Text style={styles.offText}>20% off</Text>
                        </View>

                        <View style={[
                            styles.scrollImageContainer,
                            { backgroundColor: '#E0E0E0' }
                        ]}>
                            <MaterialCommunityIcons
                                name="share-variant"
                                size={24}
                                color={"black"}
                            />
                        </View>
                    </View>

                    <View style={[
                        styles.scrollImageContainer,
                        {
                            backgroundColor: '#E0E0E0',
                            marginTop: "auto",
                            marginLeft: 20,
                            marginBottom: 20
                        }
                    ]}>
                        <AntDesign name="hearto" size={24} color= {"black"}/>
                    </View> 
                </ImageBackground>
            ))}
        </ScrollView>
    )
}

export default ImageBackgroundComponent

const styles = StyleSheet.create({
    imageBG: {
        marginTop: 25,
        resizeMode: 'contain'
    },
    scrollContentContainer: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    scrollImageContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#C60C30',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    offText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 12,
    }
})