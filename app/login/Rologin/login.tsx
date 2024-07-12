import { Image, SafeAreaView, Text, TextInput, View, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard, Button } from "react-native";
import React, { useEffect, useState } from 'react';
import { LogBox } from 'react-native';
import { Link, Stack, useRouter} from "expo-router";
import styles from "./../page.styles";
import axios from "axios";

const Login = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreLogs(['Network response was not ok']);
  }, []);

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const onSubmit = async (email:string, password:string) => {
    try {
      const response = await fetch("http://192.168.1.12:3000/api/auth/owner/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const token = data.token;

  

      // Navigate to Home screen
      router.push('/RestrauntOwner');
    } catch (err) {
      console.error(err);
      setErrorMessage("Invalid Email or Password");
      
    }
  };
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

       
              <Text style={styles.offerName} className='mt-16 text-xl'> تسجيل كمطعم</Text>
              
             
              <Text style={styles.offerName} className='mt-5'>بريد الإلكتروني *</Text>
              <TextInput
                className='w-[350px] h-[50px] p-4 my-3 rounded-xl border-2 text-right border-[#c2c0c0]' 
                placeholder=""
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address" 
              />
              
             
              <Text style={styles.offerName} className='mt-5'>كلمه السر</Text>
              <TextInput
                textContentType="password"
                className='w-[350px] h-[50px] p-4 my-3 rounded-xl border-2 text-right border-[#c2c0c0]' 
                placeholder=""
                value={password}
                onChangeText={setpassword}
              />
              <Text style={styles.offerName} className='mt-5 text-red-500'>{errorMessage}</Text>
               <Button title="Login" color={"#69B056"} onPress={() => onSubmit(email, password)} />
              {/* <Link href={"/Supplier"} className='p-3 bg-[#69B056] rounded-3xl text-center mt-4'>
                <Text className='text-white' style={styles.offerName}>تسجيل</Text>
              </Link> */}
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Login;
