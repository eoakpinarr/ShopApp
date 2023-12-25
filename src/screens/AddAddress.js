import { StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'
import SearchBar from '../components/HomeComponents/SearchBar'
import AddAddressComponent from '../components/AddressComponents/AddAddressComponent'

const AddAddress = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}    >
      <SearchBar />
      <AddAddressComponent />
    </ScrollView>
  )
}

export default AddAddress

const styles = StyleSheet.create({})

