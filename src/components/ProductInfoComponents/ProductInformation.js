import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const ProductInformation = () => {

  const route = useRoute()
  const item = route?.params

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.price}>${item?.price}</Text>
      </View>
      <Text style={styles.closeText} />
    </View>

  )
}

export default ProductInformation

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold'
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 6,
    color: 'black'
  },
  closeText: {
    height: 1,
    borderColor: '#D0D0D0',
    borderWidth: 1,
  }
})