import { Image, SafeAreaView, Text, TextInput, View, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard, Button } from "react-native";
import React, { useEffect, useState } from 'react';
import { LogBox } from 'react-native';
import { Link, Stack, useRouter} from "expo-router";
import styles from "../cart/page.styles";


const AddProduct = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const [category_id, setcategory_id] = useState('');
  const [product_name, setproduct_name] = useState('');
  const [price, setprice] = useState('');
  const [image, setimage] = useState('');
  const [description, setdescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  // category_id,
  //       product_name,
  //       price,
  //       image,
  //       description,
  const onSubmit = async (
    category_id: string,
    product_name: string,
    price: string,
    image: string,
    description: string,
  ) => {
    try {
      const response = await fetch("http://localhost:3000/products", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({ 
          category_id, 
          product_name, 
          price, 
          image, 
          description 
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      // Navigate to Home screen
      router.push('/Supplier');
    } catch (err) {
      console.error(err);
      setErrorMessage("Failed");
      if (err instanceof Error && err.name === 'TypeError') {
        console.log('Fetch Error:', err.message);
      } else if (err instanceof Response) {
        const responseData = await err.json().catch(() => err.text());
        console.log('Response Error:', err.status, responseData);
      }
      
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

       
              <Text style={styles.offerName} className='mt-16 text-xl'>اضافه سلعه</Text>
              
             
              <Text style={styles.offerName} className='mt-5'>رقم المجموعه  *</Text>
              <TextInput
                className='w-[350px] h-[50px] p-4 my-3 rounded-xl border-2 text-right border-[#c2c0c0]' 
                placeholder=""
                value={category_id}
                onChangeText={setcategory_id}
                keyboardType="email-address" 
              />
              
             
              <Text style={styles.offerName} className='mt-5'>اسم المنتج</Text>
              <TextInput
                textContentType="password"
                className='w-[350px] h-[50px] p-4 my-3 rounded-xl border-2 text-right border-[#c2c0c0]' 
                placeholder=""
                value={product_name}
                onChangeText={setproduct_name}
              />
              <Text style={styles.offerName} className='mt-5'>السعر </Text>
              <TextInput
                textContentType="password"
                className='w-[350px] h-[50px] p-4 my-3 rounded-xl border-2 text-right border-[#c2c0c0]' 
              
                value={price}
                onChangeText={setprice}
         
              />
              <Text style={styles.offerName} className='mt-5'> الصوره</Text>
              <TextInput
                textContentType="password"
                className='w-[350px] h-[50px] p-4 my-3 rounded-xl border-2 text-right border-[#c2c0c0]' 
                
                value={image}
                onChangeText={setimage}
         
              />
              <Text style={styles.offerName} className='mt-5'>الوصف </Text>
              <TextInput
                textContentType="password"
                className='w-[350px] h-[50px] p-4 my-3 rounded-xl border-2 text-right border-[#c2c0c0]' 
                
                value={description}
                onChangeText={setdescription}
             
              />
              <Text style={styles.offerName} className='mt-5 text-red-500'>{errorMessage}</Text>
               <Button title="sign up" onPress={() => onSubmit(category_id, product_name,price,image,description )} />
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

export default AddProduct;
