import {Image, Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from 'react';
import { LogBox } from 'react-native';
import SupplierNavbar from "@/components/navbar/SupplierNavbar";
import styles from "./page.styles";
import { Link, router } from "expo-router";
import useCartStore from"@/utils/addToCartStore";
import PageNavbar from "@/components/pageNavbar/PageNavbar";
type offerDataType={
    
    product_name:string,
  price:number,
  newPrice: number,
  vendorName:string,
  img:number,
  product_id:string,
  descripition?:string,
  location?:string,
  timeleft?:string,
  quantity?:number
}[]
const Supplier=()=>{

useEffect(() => {
  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, [])
const [data, setData] = useState<offerDataType>([])
const GetList = async () => {
    try {
        const response = await fetch(`http://192.168.1.12:3000/products`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setData(data);
    } catch (err) {
        console.error(err);
    }
};
    useEffect(() => {
        GetList();
    }, []);
    const deleteProduct = async (product_id:string) => {
        try {
          const response = await fetch(`http://192.168.1.12:3000/products/${product_id}`, {
            method: 'DELETE',
          });
          GetList();
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          
        } catch (err) {
          console.error(err);
         
        }
      };
    return(
       
        <ScrollView>
          <PageNavbar title={"الدفع"}></PageNavbar>
          <>
          <View className="flex flex-row justify-between ">
                <View className="relative">
                <Image source={require("../../assets/icons/quantity_plus.png")} className="absolute top-7 left-2" />
            <Link href={"/supplierAdd/AddProduct"} className="mt-6 ml-7">
      <Text style={styles.newPrice} className="m-5 text-[11px]">اضافه منتج</Text>
                </Link>
                </View>
      <Text style={styles.headerTitle} className="m-5">السلع</Text>
      </View>
      <View className="flex flex-col mx-auto relative">
      {data.map((item) => (
        <View key={item.product_id} className="w-[350px] h-[140px] bg-[#F0F6EE] rounded-xl flex flex-row justify-start align-middle my-3 relative">
          <Text style={styles.priceTag} className="w-[60px] h-[70px] text-[16px] text-[#164261] bg-[#CAE9D9] p-2 pt-[15px] text-center rounded-2xl m-2 mt-3">
            {item?.price} ج.م
          </Text>
          <View className="flex flex-col">
            <Text style={styles.newPrice} className="ml-3 text-right absolute left-36 top-5">اسم المنتج: {item?.product_name}</Text>
            <Text style={styles.bold} className="text-[#164261] text-right"></Text>
          </View>
          <View className="flex flex-row absolute gap-4 top-[70%] left-[4%]">
            <Link href={`/supplierEdit/${item.product_id}`} className="w-[150px] h-[30px] bg-[#CAE9D9] rounded-3xl text-center">
              <Text style={styles.bold} className="text-[#164261]">تعديل</Text>
            </Link>
            <TouchableOpacity
              className="w-[150px] h-[30px] bg-[#ffb3a6] rounded-3xl"
              onPress={() => deleteProduct(item.product_id)}
            >
              <Text style={styles.bold} className="text-[#164261] text-center">مسح</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
      </View>
      </> 
        </ScrollView>
      
    )
}
export default Supplier;