import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../components/HomeComponents/SearchBar'
import { useRoute } from '@react-navigation/native'

const ProductInfo = ({ }) => {

  const route = useRoute()

  return (
    <ScrollView
      style={styles.scrollViewContainer}
      showsVerticalScrollIndicator={false}
    >
      <SearchBar />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {route.params.carouselImages.map((item, index) => (
          <ImageBackground
            key={index}
            source={{}}
            
          >
            <View>

            </View>
          </ImageBackground>
        ))}
      </ScrollView>
    </ScrollView>
  )
}

export default ProductInfo

const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: 'white',
    flex: 1
  }
})