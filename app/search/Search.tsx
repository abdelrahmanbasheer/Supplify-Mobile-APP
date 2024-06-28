import React, { useState } from 'react'
import { Button, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import PageNavbar from "@/components/pageNavbar/PageNavbar";
import styles from "./page.styles"
import OffersView from '@/components/offers/OffersView';
const Search = () => {
    type offerDataType={
    
        itemName:string,
        oldPrice:number,
        newPrice: number,
        vendorName:string,
        img:number,
        id:string,
        descripition?:string,
        location?:string,
        timeleft?:string,
        quantity?:number
      }
    const data:offerDataType[]=[
        {
            itemName:"20 كيلو لحمه حالة جيدة جدا - 20 كيلو",
            img:require("../../assets/icons/meatOffer.png"),
            newPrice:5000,
            oldPrice:6000,
            vendorName:"محمد رامي",
            id:"1",
            descripition:"العرض يشمل 20 كيلو لحمه حالة جيدة جدا",
            location:"ميامي - اسكندرية",
            timeleft:"3:00:00",
            quantity:20
        },
        {
            itemName:"20 كيلو لحمه حالة جيدة جدا - 20 كيلو",
            img:require("../../assets/icons/meatOffer.png"),
            newPrice:5000,
            oldPrice:6000,
            vendorName:"محمد رامي",
            id:"2",
            descripition:"العرض يشمل 20 كيلو لحمه حالة جيدة جدا",
            location:"ميامي - اسكندرية",
            timeleft:"3:00:00",
            quantity:20
        },
        {
            itemName:"20 كيلو لحمه حالة جيدة جدا - 20 كيلو",
            img:require("../../assets/icons/meatOffer.png"),
            newPrice:5000,
            oldPrice:6000,
            vendorName:"محمد رامي",
            id:"3",
            descripition:"العرض يشمل 20 كيلو لحمه حالة جيدة جدا",
            location:"ميامي - اسكندرية",
            timeleft:"3:00:00",
            quantity:20
        },
        {
            itemName:"20 كيلو لحمه حالة جيدة جدا - 20 كيلو",
            img:require("../../assets/icons/meatOffer.png"),
            newPrice:5000,
            oldPrice:6000,
            vendorName:"محمد رامي",
            id:"4",
            descripition:"العرض يشمل 20 كيلو لحمه حالة جيدة جدا",
            location:"ميامي - اسكندرية",
            timeleft:"3:00:00",
            quantity:20
        },
      ]
    const [query, setQuery] = useState("")
   const [curr, setCurr] = useState<offerDataType[]>([])
    const search = (query:string)=>{
      const items=data.filter((item)=>item.itemName.includes(query))
      setCurr(items)
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>  
    <PageNavbar title={"البحث"}></PageNavbar>
      <View className='flex flex-row'>

    <Pressable onPress={()=>search(query)} className='p-3  h-[50px] mt-3 bg-[#CAE9D9] rounded-full' >
    <Text style={styles.offerName} className='mx-5 mt-[3px]'>ابحث</Text>
    </Pressable>
    <TextInput
    className='w-[260px] h-[50px] flex relative  p-4 my-3 mx-auto rounded-xl border-2 text-right  border-[#c2c0c0] ' 
      placeholder="بحث "
      value={query}
      onChangeText={(text)=>{setQuery(text)}}
    />
      </View>
    { curr.length>0 ?
      <OffersView data={curr} search={true}></OffersView>
      
      :

        <Text style={styles.offerName} className='text-center mx-auto mt-10'>لا يوجد نتائج للبحث</Text>
    }
      </ScrollView> 
  )
}

export default Search