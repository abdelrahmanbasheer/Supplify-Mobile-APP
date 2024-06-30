import {SafeAreaView } from "react-native";
import Navbar from "@/components/navbar/Navbar";
import CategoriesCarousel from "@/components/popular/CategoriesCarousel";
import OffersView from "@/components/offers/OffersView";
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
import React, { useEffect } from 'react';
import { LogBox } from 'react-native';

const RestrauntOwner=()=>{
  const data:offerDataType[]=[
    {
        itemName:"20 كيلو لحمه حالة جيدة جدا - 20 كيلو",
        img:require("../assets/icons/meatOffer.png"),
        newPrice:5000,
        oldPrice:6000,
        vendorName:"محمد رامي",
        id:"1"
    },
    {
        itemName:"20 كيلو لحمه حالة جيدة جدا - 20 كيلو",
        img:require("../assets/icons/meatOffer.png"),
        newPrice:5000,
        oldPrice:6000,
        vendorName:"محمد رامي",
        id:"2"
    },
    {
        itemName:"20 كيلو لحمه حالة جيدة جدا - 20 كيلو",
        img:require("../assets/icons/meatOffer.png"),
        newPrice:5000,
        oldPrice:6000,
        vendorName:"محمد رامي",
        id:"3"
    },
    {
        itemName:"20 كيلو لحمه حالة جيدة جدا - 20 كيلو",
        img:require("../assets/icons/meatOffer.png"),
        newPrice:5000,
        oldPrice:6000,
        vendorName:"محمد رامي",
        id:"4"
    },
]
useEffect(() => {
  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, [])
    return(
       
        <SafeAreaView>
          <Navbar></Navbar>
          <CategoriesCarousel></CategoriesCarousel>
          <OffersView data={data} search={false}></OffersView>
        </SafeAreaView>
      
    )
}
export default RestrauntOwner;