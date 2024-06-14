import React from 'react'
import { Text, View } from 'react-native'
import PageNavbar from "@/components/pageNavbar/PageNavbar";
import { Image } from 'react-native';
import styles from "./page.styles"
import { Link } from 'expo-router';
const CheckoutFirst = () => {
  return (
    <View>
     <PageNavbar title={"الدفع"}></PageNavbar>
     <Image className='mx-auto mt-10' source={require("@/assets/images/checkout-1.png")}></Image>
     <View className='flex flex-col items-center mt-[70px]'>
     <View  className='w-[350px] h-[74px] flex relative bg-[#EDEDED] p-4 rounded-3xl'>
      <Text style={styles.offerName}>توصيل عادي</Text>
      <Text style={styles.textstyle} className='mt-1'>يوصل في خلال 4 الى 7 ايام </Text>
      <Text style={styles.newPrice} className='absolute top-7 left-4'>30 ج.م</Text>
      </View>
     <View  className='w-[350px] my-6 h-[74px] flex relative bg-[#EDEDED] p-4 rounded-3xl'>
      <Text style={styles.offerName}>توصيل سريع</Text>
      <Text style={styles.textstyle} className='mt-1'>في خلال 3 الى 4 ايام</Text>
      <Text style={styles.newPrice} className='absolute top-7 left-4'>50 ج.م</Text>
      </View>
     <View  className='w-[350px] h-[74px] flex relative bg-[#EDEDED] p-4 rounded-3xl'>
      <Text style={styles.offerName}>توصيل سريع جدا </Text>
      <Text style={styles.textstyle} className='mt-1'>في خلال يوم</Text>
      <Text style={styles.newPrice} className='absolute top-7 left-4'>50 ج.م</Text>
      </View>
     </View>
     <Link href={"/checkout/CheckoutSecond"} className='p-3 bg-[#CAE9D9] rounded-3xl text-center mt-[45px] w-[312px] mx-auto'>
            <Text className='text-black' style={styles.offerName}>التالي</Text>
            </Link>
      </View>
  )
}

export default CheckoutFirst