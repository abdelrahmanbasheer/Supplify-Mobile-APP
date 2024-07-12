import {Image, Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import SupplierNavbar from "@/components/navbar/SupplierNavbar";
import styles from "./page.styles";
import { Link } from "expo-router";
import useCartStore from"@/utils/addToCartStore";
type offerDataType={
    
  itemName:string,
  price:number,
  newPrice: number,
  vendorName:string,
  img:number,
  id:string,
  descripition?:string,
  location?:string,
  timeleft?:string,
  quantity?:number
}
const Supplier=()=>{
  const items:offerDataType[] = useCartStore(state => state.items);
useEffect(() => {
  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, [])
    return(
       
        <ScrollView>
          <SupplierNavbar></SupplierNavbar>
          <>
      <Text style={styles.headerTitle} className="m-5">طلبات </Text>
      <View className="flex flex-col mx-auto relative">
      {items.map((item) => (
        <View key={item.id} className="w-[350px] h-[140px] bg-[#F0F6EE] rounded-xl flex flex-row justify-start align-middle my-3">
          <Text style={styles.priceTag} className="w-[60px] h-[70px] text-[16px] text-[#164261] bg-[#95b87c] p-2 pt-[15px] text-center rounded-2xl m-2 mt-3">
            {item?.newPrice} ج.م
          </Text>
          <View className="flex flex-col">
            <Text style={styles.newPrice} className="ml-3 text-right mt-7">{item?.itemName}</Text>
            <Text style={styles.bold} className="text-[#164261] text-right">العدد : {item.quantity} </Text>
          </View>
          <View className="flex flex-row absolute gap-4 top-[70%] left-[4%]">
          </View>
        </View>
      ))}
      </View>
      </> 
        </ScrollView>
      
    )
}
export default Supplier;