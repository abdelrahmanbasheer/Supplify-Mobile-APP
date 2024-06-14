import React from 'react'
import { SafeAreaView, Text, Image, View, Pressable } from "react-native";
import { Link, Stack, useNavigation } from "expo-router";
import styles from "./navbar.style"

const Navbar = ({ title }: { title: string }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className='bg-[#CAE9D9] h-[50px] rounded-b-full' style={{ flex: 1,paddingBottom:30 }}>
      <Stack.Screen  options={{
        headerStyle: { backgroundColor: "#CAE9D9"},
        headerShadowVisible: false,
        headerLeft: () => (
          <View className='rounded-b-full' style={{ display: 'flex', flexDirection: "row", gap: 15, marginTop: 35 }}>
            <Pressable onPress={() => navigation.goBack()}>
              <Image source={require('../../assets/icons/backarrow.png')} />
            </Pressable>
          </View>
        ),
        headerRight: () => 
          (
          <View style={{ display: 'flex', flexDirection: "row", gap: 15, marginTop: 50 }}>
          <Link className='h-full pb-10' href={"/search/Search"} >
            <Image className='' source={require('../../assets/icons/Search.png')} />
          </Link>
        </View>
        )
        ,
        headerTitle: () => (
          <Text style={styles.headerTitle}>{title}</Text>
        ),
        headerTitleAlign: 'center',
        headerBackVisible: false,
      }} />
    </SafeAreaView>
  )
}

export default Navbar
