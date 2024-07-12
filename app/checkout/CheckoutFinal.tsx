import React from 'react'
import { Text, View } from 'react-native'
import PageNavbar from "@/components/pageNavbar/PageNavbar";
import { Image } from 'react-native';
import styles from "./page.styles"
import { Link } from 'expo-router';
const CheckoutFinal = () => {
  return (
    <View>
     <PageNavbar title={" تم الدفع"}></PageNavbar>
     <Image source={require("@/assets/images/payment_success.png")} className='w-[100px] h-[100px] mx-auto mt-40'></Image>
     <Text className='text-black mx-auto mt-10 w-[70%]' style={styles.offerName}>تم الدفع بنجاح يمكنك متابعه الطلب من خلال صفحه الطلبات</Text>
     <Link href={"/RestrauntOwner"} className='p-3 bg-[#CAE9D9] rounded-3xl text-center mt-3 w-[312px] mx-auto'>
            <Text className='text-black' style={styles.offerName}>العوده للصفحه الرئيسيه</Text>
            </Link>
      </View>
  )
}
export default CheckoutFinal