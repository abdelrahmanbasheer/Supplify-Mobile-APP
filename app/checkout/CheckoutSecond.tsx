import React from 'react'
import { Button, ScrollView, Text, TextInput, View } from 'react-native'
import PageNavbar from "@/components/pageNavbar/PageNavbar";
import { Image } from 'react-native';
import styles from "./page.styles"
import { Link } from 'expo-router';
const CheckoutSecond = () => {
  return (
    <ScrollView>    
    <PageNavbar title={"الدفع"}></PageNavbar>
    <Image className='mx-auto mt-10' source={require("@/assets/images/checkout-2.png")}></Image>
    <View className='mx-auto flex flex-col'>
       
   <Text style={styles.offerName} className='mt-5'>الاسم *</Text>
    <TextInput
    className='w-[350px] h-[50px] flex relative  p-4 my-3 rounded-xl border-2 text-right  border-[#c2c0c0] ' 
      placeholder="محمد رامي"
      value={""}
      onChangeText={()=>{}}
    />
   <Text style={styles.offerName} className='mt-5'>رقم الهاتف *</Text>
    <TextInput
    className='w-[350px] h-[50px] flex relative  p-4 my-3 rounded-xl border-2 text-right  border-[#c2c0c0] ' 
      placeholder="0122740067906"
      value={""}
      onChangeText={()=>{}}
    />
   <Text style={styles.offerName} className='mt-5'>المدينة *</Text>
    <TextInput
    className='w-[350px] h-[50px] flex relative  p-4 my-3 rounded-xl border-2 text-right  border-[#c2c0c0] ' 
      placeholder="الاسكندرية"
      value={""}
      onChangeText={()=>{}}
    />
   <Text style={styles.offerName} className='mt-5'>العنوان *</Text>
    <TextInput
    className='w-[350px] h-[50px] flex relative  p-4 my-3 rounded-xl border-2 text-right  border-[#c2c0c0] ' 
      placeholder="العيسوي مع خليل حمادة"
      value={""}
      onChangeText={()=>{}}
    />


<Link href={"/checkout/CheckoutFinal"} className='p-3 bg-[#CAE9D9] rounded-3xl text-center  w-[312px] mx-auto'>
            <Text className='text-black' style={styles.offerName}>الدفع كاش</Text>
            </Link>
<Link href={"/checkout/CheckoutThird"} className='p-3 bg-[#CAE9D9] rounded-3xl text-center mt-3 mb-5 w-[312px] mx-auto'>
            <Text className='text-black' style={styles.offerName}>بطاقة ذكية</Text>
            </Link>
  </View>
  </ScrollView>
  )
}

export default CheckoutSecond