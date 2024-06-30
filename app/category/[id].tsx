import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import styles from "./offersview.style"
import ProductCard from './ProductCard'
import {Link, useLocalSearchParams} from "expo-router"
type offerDataType={
    
    itemName:string,
    oldPrice:number,
    newPrice: number,
    vendorName:string,
    img:number,
    id:string,
}

import PageNavbar from "@/components/pageNavbar/PageNavbar";
const OffersView = () => {
    const {id}=useLocalSearchParams()
    const [data, setData] = useState([])
    useEffect(() => {
        const GetList = async () => {
            try {
                const response = await fetch(`http://192.168.1.12:3000/products/category/${id}`, {
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
        GetList();
    }, []);
console.log(data)
    return (
    <SafeAreaView>
    <PageNavbar title=''></PageNavbar>
    <ScrollView style={{marginTop:20}}>
    <View style={styles.header}> 
            <Text style={styles.headerTitle} className='ml-[140px]'>النتائج</Text>
      </View>
     
      <FlatList
      data={data}
    renderItem={({item})=>(
        <Link href={`/category-details/${item.id}`} style={{flex:1}}>
      <ProductCard item={item}></ProductCard>
      </Link>
      )}
numColumns={2}
contentContainerStyle={{gap:20}}
style={{marginTop:15,paddingLeft:15,paddingRight:5,marginBottom:300}}
/>

</ScrollView>
</SafeAreaView>
  )
}

export default OffersView