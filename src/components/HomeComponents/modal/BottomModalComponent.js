import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomModal, ModalContent, SlideAnimation } from 'react-native-modals'
import Entypo from "react-native-vector-icons/Entypo"
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from '@react-navigation/native'

const BottomModalComponent = ({ modalVisible, setModalVisible }) => {

    const navigation = useNavigation()

    return (
        <BottomModal
            onBackdropPress={() => setModalVisible(!modalVisible)}
            swipeDirection={["up", "down"]}
            swipeThreshold={200}
            modalAnimation={
                new SlideAnimation({
                    slideFrom: "bottom"
                })
            }
            onHardwareBackPress={() => setModalVisible(!modalVisible)}
            visible={modalVisible}
            onTouchOutside={() => setModalVisible(!modalVisible)}
        >
            <ModalContent style={styles.modalContainer}>
                <View style={styles.container}>
                    <Text style={styles.chooseLocationText}>Choose your Location</Text>
                    <Text style={styles.detailText}>Select a delvery location to see product availability and delivery options</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {/* Already added addresses */}

                    <Pressable style={styles.addressPress} onPress={() => {
                        setModalVisible(!modalVisible)
                        navigation.navigate("Address")
                        }}>
                        <Text style={styles.addressAddText}>Add an Address{'\n'}or{'\n'}Pick-Up Point</Text>
                    </Pressable>
                </ScrollView>

                <View style={styles.locationContainer}>
                    <View style={styles.locContainer}>
                        <Entypo
                            name="location-pin"
                            size={22}
                            color={"#0066B2"}
                        />
                        <Text style={styles.locText}>Enter a Turkey Pincode</Text>
                    </View>
                    <View style={styles.locContainer}>
                        <Ionicons
                            name="locate-sharp"
                            size={22}
                            color={"#0066B2"}
                        />
                        <Text style={styles.locText}>Use My Current Location</Text>
                    </View>
                    <View style={styles.locContainer}>
                        <AntDesign
                            name="earth"
                            size={22}
                            color={"#0066B2"}
                        />
                        <Text style={styles.locText}>Deliver Outside Turkey</Text>
                    </View>
                </View>
            </ModalContent>
        </BottomModal>
    )
}

export default BottomModalComponent

const styles = StyleSheet.create({
    container: {
        marginBottom: 8
    },
    modalContainer: {
        width: '100%',
        height: 400,
    },
    chooseLocationText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black'
    },
    detailText: {
        marginTop: 5,
        fontSize: 16,
        color: 'gray'
    },
    addressPress: {
        width: 140,
        height: 140,
        borderColor: '#D0D0D0',
        marginTop: 10,
        borderWidth: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addressAddText: {
        color: '#0066B2',
        textAlign: 'center',
        fontWeight: '500'
    },
    locationContainer: {
        flexDirection: 'column',
        gap: 7,
        marginBottom: 30
    },
    locContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    locText: {
        color: '#0066B2',
        fontWeight: '500'
    }
})
