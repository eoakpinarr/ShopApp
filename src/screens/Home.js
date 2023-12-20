import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../components/HomeComponents/SearchBar'
import AddressBar from '../components/HomeComponents/AddressBar'
import CategoryBar from '../components/HomeComponents/CategoryBar'
import ImageSliderBox from '../components/HomeComponents/ImageSliderBox'
import TrendingDealsWeek from '../components/HomeComponents/TrendingDealsWeek'
import TodaysDeals from '../components/HomeComponents/TodaysDeals'

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
