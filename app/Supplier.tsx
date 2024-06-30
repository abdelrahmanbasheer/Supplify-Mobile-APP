import {Image, Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import SupplierNavbar from "@/components/navbar/SupplierNavbar";
import styles from "./page.styles";
import { Link } from "expo-router";

const Supplier=()=>{
 
useEffect(() => {
  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, [])
    return(
       
        <ScrollView>
          <SupplierNavbar></SupplierNavbar>
          <>
      <Text style={styles.headerTitle} className="m-5">طلبات </Text>
      <View className="flex flex-col mx-auto relative">
      <View className="w-[350px] h-[140px] bg-[#F0F6EE] rounded-xl flex flex-row justify-start align-middle my-3">
    <Text style={styles.priceTag} className="w-[60px] h-[70px]  text-[16px] text-[#164261] bg-[#95b87c] p-2 pt-[15px] text-center rounded-2xl m-2 mt-3 " >200 {'\n'}ج م</Text>
        <View className="flex flex-col">
        <Text style={styles.newPrice} className=" ml-3 text-right mt-7">20 كيلو خس حالة ممتازة</Text>
        <Text  style={styles.bold} className="text-[#164261] text-right">عايز 20 كيلو خس </Text>
        </View>
        <Image source={require("@/assets/icons/milk.png")} className="rounded-full absolute left-[75%] mt-4"></Image>
      <View className="flex flex-row absolute gap-4 top-[70%] left-[4%]">
        <Link href={"/"} className="w-[150px] h-[30px] bg-[#CAE9D9] rounded-3xl text-center">
          <Text style={styles.bold} className="text-[#164261] ">تعديل</Text>
        </Link>
        <Pressable className="w-[150px] h-[30px] bg-[#CAE9D9] rounded-3xl">
          <Text style={styles.bold} className="text-[#164261] text-center">موافق</Text>
        </Pressable>
      </View>
      </View>
      </View>
      </> 
        </ScrollView>
      
    )
}
export default Supplier;