import { Image, ImageBackground, SafeAreaView, Text, View} from "react-native";
import React, { useEffect, useState } from 'react';
import { LogBox } from 'react-native';
import { Link, Stack } from "expo-router";
import styles from "./page.styles";

const Home = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <SafeAreaView className="">
      <ImageBackground
      className=" w-[100%] h-[100%] "
      source={require("@/assets/images/splash_fourth.png")}
      resizeMode="cover"
      >
        <View className="mt-[270px]">
                <Image 
                source={require("@/assets/icons/login_logo.png")} 
                className="w-[282px]  mx-auto"
              />
              <Text className=" text-white text-3xl mx-2 text-center mt-9 mb-3" style={styles.font}>اجعل إدارة مطعمك أو تجارتك أمرًا ممتعًا وبسيطًا</Text>
              <Text className=" text-white text-xl mx-6 text-center mb-3" style={styles.location}>سجل الان  :</Text>
              
              <View className="flex flex-row mx-auto">
                <Link href={"/signup/rosignup/Signup"} className='p-3 mr-5 bg-transparent border-2 border-[#69B056] w-[88px] rounded-xl text-center mt-4'>
                <Text className='text-white' style={styles.offerName}>مطعم</Text>
              </Link>
              <Link href={"/signup/suppliersignup/Signup"} className='p-3 bg-[#69B056] w-[88px] rounded-xl text-center mt-4'>
                <Text className='text-white' style={styles.offerName}> تاجر</Text>
              </Link>
              </View>
              <Text className=" text-white text-xl mx-6 text-center mb-3 mt-5" style={styles.location}>عندك حساب ؟</Text>
              
              <View className="flex flex-row mx-auto">
                <Link href={"/RestrauntOwner"} className='p-3 mr-5 bg-transparent border-2 border-[#69B056] w-[88px] rounded-xl text-center mt-4'>
                <Text className='text-white' style={styles.offerName}>مطعم</Text>
              </Link>
              <Link href={"/login/supplierLogin/login"} className='p-3 bg-[#69B056] w-[88px] rounded-xl text-center mt-4'>
                <Text className='text-white' style={styles.offerName}> تاجر</Text>
              </Link>
              </View>
              <Stack.Screen options={{ headerShown: false }} />
              </View>
              </ImageBackground>
    </SafeAreaView>
  );
}

export default Home;
