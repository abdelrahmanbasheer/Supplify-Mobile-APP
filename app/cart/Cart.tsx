import React from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import useCartStore from"@/utils/addToCartStore";
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
  import styles from "./page.styles"
  import PageNavbar from "@/components/pageNavbar/PageNavbar";
import { Link } from 'expo-router';
const Cart = () => {
    const removeItemById = useCartStore(state => state.removeItemById);
    const items:offerDataType[] = useCartStore(state => state.items);

    const total = items.reduce((acc, item) => acc + item.newPrice * (item.quantity ?? 0), 0);
  return (
    <ScrollView>
           <PageNavbar title={"عربة التسوق"}></PageNavbar>
          
            {
                items.length === 0 ? 
                <View className='mx-auto mt-16'>
                    <Image source={require("../../assets/images/Empty_Cart.png")} className='w-[300px] h-[300px]'></Image>
                    <Text className='text-[#69B056] font-bold text-[20px] text-center mt-5'>لا يوجد منتجات في العربة</Text>
                    <Link href="/RestrauntOwner" className='p-3 bg-[#CAE9D9] rounded-3xl text-center mt-4'>
                        <Text className='text-black' style={styles.offerName}>تصفح المنتجات</Text>
                        </Link>
                </View>
                :
                <ScrollView className='flex flex-col gap-[10px] mx-auto mt-4 h-[400px]'>
                    {
                        items.map((item,index)=>(
                            <View key={item.id} className='w-[350px] h-[104px] flex relative bg-[#EDEDED] p-4 rounded-3xl '>
                            <Image source={item?.img} className='w-[88px] absolute right-[10] top-[8] rounded-full h-[88px]'></Image>
                            <View className='flex flex-col absolute left-[55] top-[15]'>
                            <Text className='text-right ' style={styles.newPrice}>{item?.newPrice} ج.م {item.quantity}x </Text> 
                            <Text className='text-right text-[12px]' style={styles.offerName}>{item.itemName.length > 30 ? `${item.itemName.slice(0, 30)}...` : item.itemName}</Text>
                            <Pressable onTouchStart={()=>removeItemById(item.id)}>
                            <Text className='text-[12px] p-3 bg-[#CAE9D9] w-[100px] text-center rounded-full'>حذف</Text>
                            </Pressable>
                            </View>
                            </View>
                        ))
                    }
         </ScrollView>
            }
     
        {
            items.length === 0 ? 
            null 
            :

    <View className='mx-14 flex flex-col  mt-10'>
        <View className='flex flex-row my-2 justify-between'>
        <Text className='text-[#69B056] ' style={styles.newPrice}>{total} ج.م </Text>
        <Text className='text-right text-[15px]' style={styles.offerName}> مجموع المشتريات </Text>
        </View>
        <View className='flex flex-row justify-between'>
        <Text className='text-[#69B056]' style={styles.newPrice}>102 ج.م </Text>
        <Text className='text-right text-[15px]' style={styles.offerName}> رسوم الشحن</Text>
        </View>
        <Link href={"/checkout/CheckoutFirst"} className='p-3 bg-[#CAE9D9] rounded-3xl text-center mt-4'>
            <Text className='text-black' style={styles.offerName}>الدفع</Text>
            </Link>
    </View>
}
    </ScrollView>
  )
}

export default Cart