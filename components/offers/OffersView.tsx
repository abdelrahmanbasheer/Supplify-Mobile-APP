import React from 'react'
import { FlatList, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import styles from "./offersview.style"
import OfferCard from './OfferCard'
type offerDataType={
    
    itemName:string,
    oldPrice:number,
    newPrice: number,
    vendorName:string,
    img:number
}
const OffersView = () => {
    const data:offerDataType[]=[
        {
            itemName:"20 كيلو لحمه حالة جيدة جدا - 20 كيلو",
            img:require("../../assets/icons/meatOffer.png"),
            newPrice:5000,
            oldPrice:6000,
            vendorName:"محمد رامي"
        },
        {
            itemName:"20 كيلو لحمه حالة جيدة جدا - 20 كيلو",
            img:require("../../assets/icons/meatOffer.png"),
            newPrice:5000,
            oldPrice:6000,
            vendorName:"محمد رامي"
        },
        {
            itemName:"20 كيلو لحمه حالة جيدة جدا - 20 كيلو",
            img:require("../../assets/icons/meatOffer.png"),
            newPrice:5000,
            oldPrice:6000,
            vendorName:"محمد رامي"
        },
        {
            itemName:"20 كيلو لحمه حالة جيدة جدا - 20 كيلو",
            img:require("../../assets/icons/meatOffer.png"),
            newPrice:5000,
            oldPrice:6000,
            vendorName:"محمد رامي"
        },
]
    return (
    <View style={{marginTop:20}}>
    <View style={styles.header}>
    <Text style={styles.headerBtn}>المزيد</Text>
    <TouchableOpacity>
      <Text style={styles.headerTitle}>افضل العروض</Text>
      </TouchableOpacity>
      </View>
      <FlatList
      data={data}
    renderItem={({item})=>(
      <OfferCard item={item}></OfferCard>
      )}
numColumns={2}
contentContainerStyle={{gap:20}}
style={{marginTop:15,paddingLeft:4,paddingRight:5}}
/></View>
  )
}

export default OffersView