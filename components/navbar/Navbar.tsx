import React, { useState } from 'react'
import {SafeAreaView,Text, Image, View,Pressable, Modal, FlatList } from "react-native";
import { Stack,useRouter } from "expo-router";
import styles from "./navbar.style"
const Navbar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentVendor, setCurrentVendor] = useState("مطعم حسني");
  const data=[" مطعم حسني"," 2مطعم حسني","مطعم حسني 3 "];
  return (
    
    <SafeAreaView style={{flex:1}}>
      <View >
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View>
          <View style={[styles.modalView]}>
            <FlatList
              data={data}
              renderItem={(item)=>(
                <Pressable onPress={()=>{setCurrentVendor(item.item);setModalVisible(false)}}>
                  <Text  style={[styles.headerText,styles.modalText]}>{item.item}</Text>
                  </Pressable>
              )}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
    <Stack.Screen options={{
        headerStyle:{backgroundColor:"#CAE9D9"},
        headerShadowVisible:false,
        headerLeft:()=>(
           <View style={{display:'flex',flexDirection:"row",gap:15, marginTop:20}}>
             <Image source={require('../../assets/icons/shopIcon.png')} style={{marginTop:20}}></Image>
            <View style={{display:'flex',flexDirection:"column",gap:5}}>
            <Pressable style={{display:'flex',flexDirection:"row",gap:10}}  onPress={(prev) => setModalVisible(prev=>!prev)}>
            <Text style={styles.headerText}>{currentVendor}</Text>
            <Image source={require('../../assets/icons/ArrowDown.png')}></Image>
            </Pressable>
            <View style={{display:'flex',flexDirection:"row",gap:10}}>
            <Text className='' style={styles.addressText}>العيسوي مع خليل حمادة , الأسكندرية</Text>
            </View>
            </View>
            </View> 
        ),
        headerRight:()=>(
          <View style={{display:'flex',flexDirection:"row",gap:15,marginRight:5,marginTop:20}}>
            <Image source={require('../../assets/icons/shoppingCart.png')}  resizeMode='contain' style={{marginTop:5}}></Image>
            <Image source={require('../../assets/icons/Search.png')} ></Image>
            </View>
        ),
        
      
        headerTitle:"",
    }}/>
    <View style={styles.colorcurve}/>
   
      </SafeAreaView>
  )
}

export default Navbar