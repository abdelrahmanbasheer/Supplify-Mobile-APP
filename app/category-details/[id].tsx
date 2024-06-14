import PageNavbar from '@/components/pageNavbar/PageNavbar'
import ProductPage from '@/components/productPage/ProductPage';
import { useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
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
import useCartStore from"@/utils/addToCartStore";
import styles from "./page.styles"
const CategoryPage = () => {
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
  const { id } = useLocalSearchParams();
const curr:offerDataType | undefined =data.find((item)=>item.id===id)
const addItem = useCartStore((state) => state.addItem);
const [quantity, setQuantity] = useState(1)
const items = useCartStore(state => state.items);
  return (
    <ScrollView  showsVerticalScrollIndicator={false} >
          <PageNavbar title={"التفاصيل"}></PageNavbar>
          <View className='flex flex-col gap-4 '>
            <Image source={curr?.img} className='w-screen h-[337px]'></Image>
          <View className='mx-4'>
          <Text  style={styles.offerName}>{curr?.itemName}</Text>
          <Text className='text-right' style={styles.oldPrice}>{curr?.oldPrice} ج.م</Text>
          <Text className='text-right' style={styles.newPrice}>{curr?.newPrice} ج.م</Text>
          <Text className='text-right'style={styles.textstyle} >{curr?.quantity} كيلو</Text>
          <Text className='text-right text-[#8F8F8F] text-[11px] my-2' style={styles.font}>{curr?.descripition}</Text>
          
          <View className='flex flex-row gap-3 justify-end'>
          <Text className='text-right text-[#323333] my-2' style={styles.font}>{curr?.location}</Text>
          <Image source={ require("../../assets/icons/supplier_location.png")}></Image>
          </View>
          <View className='flex flex-row gap-3 justify-end'>
          <Text className='text-right text-[#323333] my-2' style={styles.font}>الوقت المتبقي: {curr?.timeleft}</Text>
          <Image  source={ require("../../assets/icons/restowner_time.png")}></Image>
          </View>
          <View className='flex flex-row gap-3 justify-end'>
          <Text className='text-right text-[#323333] my-2' style={styles.font}>نفاذ الكمية: {curr?.quantity} كيلو</Text>
          <Image   source={ require("../../assets/icons/restowner_time.png")}></Image>
          </View>
          <View className='flex flex-row gap-3 justify-end'>
          <Text className='text-right text-[#164261] my-2' style={styles.font}>{curr?.vendorName}</Text>
          <Image source={ require("../../assets/icons/Profile.png")}></Image>
          </View>
          <View className='bg-white w-[350px] h-[50px] mx-4 my-2 rounded-2xl flex flex-row justify-between shadow-xl items-center shadow-black mb-3'>
            <View className='flex flex-row items-center gap-8 ml-[5px]'>
            <Pressable onPress={() => setQuantity(prev => Math.max(prev - 1, 0))}>
            <Image source={require("../../assets/icons/quantity_minus.png")} />
          </Pressable>
          <Text style={{ textAlign: 'right', fontSize: 20, paddingTop: 1, ...styles.font }}>{quantity}</Text>
          <Pressable onPress={() => setQuantity(prev => prev + 1)}>
            <Image source={require("../../assets/icons/quantity_plus.png")} />
          </Pressable>
            </View>
            <Text className='text-right text-[#164261] p-2 mr-[50px]' style={styles.font}>الكمية</Text>
          </View>
          <Pressable className='bg-[#CAE9D9] w-[350px] h-[50px] mx-4 my-2 rounded-2xl flex flex-row justify-center shadow-xl items-center shadow-black mb-3'
           onTouchStart={()=>addItem(curr, quantity)}>
          <Image source={ require("../../assets/icons/restowner_addtocart.png")}></Image>
            <Text className='text-right text-[#164261] p-2'  style={styles.font}>اضافة الى السلة</Text>
            </Pressable>
          </View>
    
    </View>
        </ScrollView>
  )
}

export default CategoryPage