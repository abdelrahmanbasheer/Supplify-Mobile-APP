import React from 'react'
import { Button, ScrollView, Text, TextInput, View } from 'react-native'
import PageNavbar from "@/components/pageNavbar/PageNavbar";
import { Image } from 'react-native';
import styles from "./page.styles"
import { Link } from 'expo-router';
const CheckoutThird = () => {
  return (
    <ScrollView>    
    <PageNavbar title={"الدفع"}></PageNavbar>
    <Image className='mx-auto mt-10' source={require("@/assets/images/checkout-3.png")}></Image>
    <Image className='mx-auto mt-10' source={require("@/assets/images/forms_paymentmethods.png")}></Image>
    <View className='mx-auto flex flex-col'>
       
   <Text style={styles.offerName} className='mt-8'>الاسم على البطاقة  *</Text>
    <TextInput
    className='w-[350px] h-[50px] flex relative  p-4 my-3 rounded-xl border-2 text-right  border-[#c2c0c0] ' 
      placeholder="محمد رامي"
      value={""}
      onChangeText={()=>{}}
    />
   <Text style={styles.offerName} className='mt-5'>رقم البطاقة *</Text>
    <TextInput
    className='w-[350px] h-[50px] flex relative  p-4 my-3 rounded-xl border-2 text-right  border-[#c2c0c0] ' 
      placeholder="0122740067906"
      value={""}
      onChangeText={()=>{}}
    />
   <Text style={styles.offerName} className='mt-5'>تاريخ البطاقة *</Text>
    <TextInput
    className='w-[350px] h-[50px] flex relative  p-4 my-3 rounded-xl border-2 text-right  border-[#c2c0c0] ' 
      placeholder="09/26"
      value={""}
      onChangeText={()=>{}}
    />
   <Text style={styles.offerName} className='mt-5'>CVV *</Text>
    <TextInput
    className='w-[350px] h-[50px] flex relative  p-4 my-3 rounded-xl border-2 text-right  border-[#c2c0c0] ' 
      placeholder=" 123  "
      value={""}
      onChangeText={()=>{}}
    />


<Link href={"/checkout/CheckoutFinal"} className='p-3 bg-[#CAE9D9] rounded-3xl text-center my-5  w-[312px] mx-auto'>
            <Text className='text-black' style={styles.offerName}>الدفع </Text>
            </Link>
  </View>
  </ScrollView>
  )
}

export default CheckoutThird