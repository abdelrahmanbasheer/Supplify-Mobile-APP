import React, { useEffect, useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import styles from "./page.styles";
import PageNavbar from "@/components/pageNavbar/PageNavbar";
import { useRouter } from 'expo-router';
// Define the type for the product within a wishlist item
type ProductType = {
    product_id: number;
    category_id: number;
    product_name: string;
    price: number;
    image: string;
    description: string;
};

// Define the type for the wishlist item
type WishListItemType = {
    wishlist_id: number;
    branch_id: number;
    product_id: number;
    date_added: string;
    product: ProductType;
};

// Type for the wishlist array
type WishListType = WishListItemType[];

const Cart = () => {
    return (
        <ScrollView>
            <PageNavbar title={"الطلبات"} />
            <ScrollView className='mt-10 '>
            <View className='flex flex-row justify-end gap-5 mr-5'>
            <View className='flex flex-col'>
                <Text className='text-[15px] text-[#164261]'  style={styles.font}>رقم الطلب : 1548515</Text>
                <Text  className='text-[11px] text-[#164261]' style={styles.loaction}> الاستلام يوم :6/7/2024</Text>
                <Text  className='text-[11px] text-[#164261]' style={styles.loaction}>عدد الاغراض : 1</Text>
                <Text  className='text-[11px] text-[#164261]' style={styles.loaction}>ثمن الاغراض : 5102 ج . م</Text>
            </View>
            <Image source={require("../../assets/images/order-image.png")} ></Image>
            </View>
            <View className='flex flex-row justify-between'>
            <View className='flex flex-col justify-between ml-7 mt-5 '>
                <Text className='text-[15px] text-[#164261] my-2' style={styles.font}>2/7/2024</Text>
                <Text className='text-[10px] text-[#164261] my-2' style={styles.textstyle}>قيد الانتظار</Text>
                <Text className='text-[10px] text-[#164261] my-2' style={styles.textstyle}>قيد الانتظار</Text>
                <Text className='text-[10px] text-[#164261] my-2' style={styles.textstyle}>قيد الانتظار</Text>
            </View>
            <View className='flex flex-col justify-between mr-7 mt-5 '>
            <Text className='text-[15px] text-[#164261] my-2' style={styles.font}>تم الطلب</Text>
                <Text className='text-[10px] text-[#164261] my-2' style={styles.textstyle}>تم تاكيد الطلب</Text>
                <Text className='text-[10px] text-[#164261] my-2' style={styles.textstyle}>تم شحن الطلب</Text>
                <Text className='text-[10px] text-[#164261] my-2' style={styles.textstyle}>خارج للتوصيل</Text>
            </View>
            </View>
            </ScrollView>
        </ScrollView>
    );
};

export default Cart;
