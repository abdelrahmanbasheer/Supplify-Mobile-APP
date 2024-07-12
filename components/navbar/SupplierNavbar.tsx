import React, { useState } from 'react'
import {SafeAreaView,Text, Image, View,Pressable, Modal, FlatList } from "react-native";
import { Link, Stack,useRouter } from "expo-router";
import styles from "./navbar.style"
const SupplierNavbar = () => {


  return (
    
    <SafeAreaView className='bg-[#CAE9D9] h-[50px] rounded-br-full rounded-bl-full' >
      <View>
    </View>
    <Stack.Screen options={{
        headerStyle:{backgroundColor:"#CAE9D9"},
        headerShadowVisible:false,
        headerLeft:()=>(
           <View style={{display:'flex',flexDirection:"row",gap:15, marginTop:20}}>
           
             <Image source={require('../../assets/icons/supplier_navbar_icon.png')} style={{marginTop:20}}></Image>
            <View style={{display:'flex',flexDirection:"column",gap:5,"alignItems":"flex-start",marginTop:20}}>
            <Text style={styles.headerText}>يوسف المنير</Text>
            <Text className='' style={styles.addressText}>الأسكندرية</Text>
            </View>
            </View> 
        ),
        headerRight:()=>(
          <View style={{display:'flex',flexDirection:"row",gap:15,marginRight:5,paddingTop:30}} className='h-[100px] items-baseline'>
             <Link className='h-full' href={`/supplierEdit/EditProduct`}>
            <Image  source={require('../../assets/icons/File Document.png')} ></Image>
            </Link>
             <Link className='h-full' href={`/SupplierProducts/SupplierProd`}>
            <Image  source={require('../../assets/icons/restowner_shop.png')} ></Image>
            </Link>
            </View>
        ),
        
      
        headerTitle:"",
    }}/>
    {/* <View style={styles.colorcurve}/> */}
   
      </SafeAreaView>
  )
}

export default SupplierNavbar