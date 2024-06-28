import { Image, SafeAreaView, Text, TextInput, View, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import React, { useEffect, useState } from 'react';
import { LogBox } from 'react-native';
import { Link, Stack } from "expo-router";
import styles from "./page.styles";

const Login = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <SafeAreaView className="flex-1">
      <KeyboardAvoidingView
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="mx-auto p-4">
              <Stack.Screen options={{ headerShown: false }} />

           
              <Image 
                source={require("@/assets/icons/login_logo.png")} 
                className="w-[282px] mt-[170px] mx-auto"
              />

       
              <Text style={styles.offerName} className='mt-16 text-xl'>تسجيل</Text>
              
             
              <Text style={styles.offerName} className='mt-5'>بريد الإلكتروني *</Text>
              <TextInput
                className='w-[350px] h-[50px] p-4 my-3 rounded-xl border-2 text-right border-[#c2c0c0]' 
                placeholder="example@gmail.com"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address" 
              />
              
             
              <Text style={styles.offerName} className='mt-5'>رقم هاتف المحمول *</Text>
              <TextInput
                className='w-[350px] h-[50px] p-4 my-3 rounded-xl border-2 text-right border-[#c2c0c0]' 
                placeholder="0123456789"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad" 
              />
              
              <Link href={"/Supplier"} className='p-3 bg-[#69B056] rounded-3xl text-center mt-4'>
                <Text className='text-white' style={styles.offerName}>تسجيل</Text>
              </Link>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Login;
