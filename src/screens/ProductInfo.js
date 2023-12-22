import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import SearchBar from '../components/HomeComponents/SearchBar'
import ImageBackgroundComponent from '../components/ProductInfoComponents/ImageBackgroundComponent'
import ProductInformation from '../components/ProductInfoComponents/ProductInformation'
import ColorSizeSelect from '../components/ProductInfoComponents/ColorSizeSelect'
import TotalPrice from '../components/ProductInfoComponents/TotalPrice'
import ButtonComponent from '../components/ProductInfoComponents/ButtonComponent'

const ProductInfo = () => {

  return (
    <ScrollView style={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
      <SearchBar />
      <ImageBackgroundComponent />
      <ProductInformation />
      <ColorSizeSelect />
      <TotalPrice />
      <ButtonComponent />
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: 'white',
    flex: 1
  },

})

export default ProductInfo

