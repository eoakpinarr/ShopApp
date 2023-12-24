import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomModal, ModalContent, SlideAnimation } from 'react-native-modals'

const BottomModalComponent = ({ modalVisible, setModalVisible }) => {

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

                    <Pressable style={styles.addressPress}>
                        <Text style={styles.addressAddText}>Add an Address or pick-up point</Text>
                    </Pressable>
                </ScrollView>
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
    }
})
