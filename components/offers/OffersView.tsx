import React from 'react'
import { FlatList, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import styles from "./offersview.style"
import OfferCard from './OfferCard'
import {Link} from "expo-router"
type offerDataType={
    
    itemName:string,
    oldPrice:number,
    newPrice: number,
    vendorName:string,
    img:number,
    id:string,
}
const OffersView = ({data,search}:{data:offerDataType[],search:boolean} ) => {
   
    return (
    <ScrollView style={{marginTop:20}}>
    <View style={styles.header}>
        {
            !search &&
            <Text style={styles.headerBtn}>المزيد</Text>
        }
    <TouchableOpacity>
        {
            search?
            <Text style={styles.headerTitle} className='ml-[140px]'>النتائج</Text>
            :
            <Text style={styles.headerTitle}>افضل العروض</Text>
        }
      </TouchableOpacity>
      </View>
     
      <FlatList
      data={data}
    renderItem={({item})=>(
        <Link href={`/category-details/${item.id}`} style={{flex:1}}>
      <OfferCard item={item}></OfferCard>
      </Link>
      )}
numColumns={2}
contentContainerStyle={{gap:20}}
style={{marginTop:15,paddingLeft:15,paddingRight:5,marginBottom:300}}
/>

</ScrollView>
  )
}

export default OffersView