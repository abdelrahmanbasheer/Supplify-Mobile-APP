import { Image, SafeAreaView, Text, TextInput, View, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard, Button } from "react-native";
import React, { useEffect, useState } from 'react';
import { LogBox } from 'react-native';
import { Link, Stack, useRouter} from "expo-router";
import styles from "../page.styles";
import axios from "axios";

const Signup = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [national_id, setNationalId] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [commercial_id, setCommercialId] = useState('');
  const [location, setlocation] = useState('');
  const [business_name, setbusiness_name] = useState('');
  const [minimum_order_price, setminimum_order_price] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const onSubmit = async (
    email: string,
    password: string,
    national_id: string,
    first_name: string,
    last_name: string,
    telephone: string,
    commercial_id: string,
    location:string,
    business_name:string,
    minimum_order_price:string
  )=> {
    try {
      const response = await fetch("http://192.168.1.12:3000/api/auth/supplier/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password,location,first_name,last_name,telephone,business_name,commercial_id,national_id,minimum_order_price}),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      // Navigate to Home screen
      router.push('/login/supplierLogin/login');
    } catch (err) {
      console.error(err);
      setErrorMessage("Failed");
      
    }
  };
  return (
    <SafeAreaView className="flex-1">
      <KeyboardAvoidingView
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView className="mx-auto p-4">
              <Stack.Screen options={{ headerShown: false }} />

           
              <Image 
                source={require("@/assets/icons/login_logo.png")} 
                className="w-[282px] mt-[170px] mx-auto"
              />

       
              <Text style={styles.offerName} className='mt-16 text-xl'>تسجيل كتاجر</Text>
              
             
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
             
                className='w-[350px] h-[50px] p-4 my-3 rounded-xl border-2 text-right border-[#c2c0c0]' 
                placeholder=""
                value={password}
                onChangeText={setpassword}
              />
              <Text style={styles.offerName} className='mt-5'>الرقم القومي</Text>
              <TextInput
          
                className='w-[350px] h-[50px] p-4 my-3 rounded-xl border-2 text-right border-[#c2c0c0]' 
              
                value={national_id}
                onChangeText={setNationalId}
         
              />
              <Text style={styles.offerName} className='mt-5'>الاسم الاول</Text>
              <TextInput
          
                className='w-[350px] h-[50px] p-4 my-3 rounded-xl border-2 text-right border-[#c2c0c0]' 
                
                value={first_name}
                onChangeText={setFirstName}
         
              />
              <Text style={styles.offerName} className='mt-5'>الاسم الاخير</Text>
              <TextInput
             
                className='w-[350px] h-[50px] p-4 my-3 rounded-xl border-2 text-right border-[#c2c0c0]' 
                
                value={last_name}
                onChangeText={setLastName}
             
              />
              <Text style={styles.offerName} className='mt-5'>رقم التليفون</Text>
              <TextInput
              
                className='w-[350px] h-[50px] p-4 my-3 rounded-xl border-2 text-right border-[#c2c0c0]' 
                value={telephone}
                onChangeText={setTelephone}
                keyboardType="phone-pad"
              
              />
              <Text style={styles.offerName} className='mt-5'>الرقم التجاري</Text>
              <TextInput
                
                className='w-[350px] h-[50px] p-4 my-3 rounded-xl border-2 text-right border-[#c2c0c0]' 
               
                value={commercial_id}
                onChangeText={setCommercialId}
                
              />
              <Text style={styles.offerName} className='mt-5'>العنوان</Text>
              <TextInput
               
                className='w-[350px] h-[50px] p-4 my-3 rounded-xl border-2 text-right border-[#c2c0c0]' 
               
                value={location}
                onChangeText={setlocation}
                
              />
              <Text style={styles.offerName} className='mt-5'>اسم المكان</Text>
              <TextInput
             
                className='w-[350px] h-[50px] p-4 my-3 rounded-xl border-2 text-right border-[#c2c0c0]' 
               
                value={business_name}
                onChangeText={setbusiness_name}
                
              />
              <Text style={styles.offerName} className='mt-5'>الحد الادني للطلبات</Text>
              <TextInput
             
                className='w-[350px] h-[50px] p-4 my-3 rounded-xl border-2 text-right border-[#c2c0c0]' 
               
                value={minimum_order_price}
                onChangeText={setminimum_order_price}
                
              />
              <Text style={styles.offerName} className='mt-5 text-red-500'>{errorMessage}</Text>
               <Button color="#6CCE9B" title="sign up" onPress={() => onSubmit(email, password,national_id,first_name,last_name,telephone,commercial_id,location,business_name,minimum_order_price)} />
              {/* <Link href={"/Supplier"} className='p-3 bg-[#69B056] rounded-3xl text-center mt-4'>
                <Text className='text-white' style={styles.offerName}>تسجيل</Text>
              </Link> */}
            </ScrollView>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Signup;
