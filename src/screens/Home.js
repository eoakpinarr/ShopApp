import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/HomeComponents/SearchBar'
import AddressBar from '../components/HomeComponents/AddressBar'
import CategoryBar from '../components/HomeComponents/CategoryBar'
import ImageSliderBox from '../components/HomeComponents/ImageSliderBox'
import TrendingDealsWeek from '../components/HomeComponents/TrendingDealsWeek'
import TodaysDeals from '../components/HomeComponents/TodaysDeals'
import ProductItem from '../components/HomeComponents/ProductItem'
import BottomModalComponent from '../components/HomeComponents/modal/BottomModalComponent'

const Home = () => {

  return (
    <View style={styles.container}>
      <ScrollView>
        <SearchBar />
        <AddressBar />
        <CategoryBar />
        <ImageSliderBox />
        <TrendingDealsWeek />
        <TodaysDeals />
        <ProductItem />
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
})
