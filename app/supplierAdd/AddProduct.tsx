import React, { useEffect, useState } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Alert,
} from "react-native";
import { LogBox } from 'react-native';
import { Stack, useRouter } from "expo-router";
import styles from "../cart/page.styles";

const AddProduct = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const [category_id, setCategoryId] = useState('');
  const [product_name, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const onSubmit = async () => {
    // Basic form validation
    if (!category_id || !product_name || !price || !image || !description) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    try {
      const response = await fetch("http://192.168.1.12:3000/products", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          category_id: parseInt(category_id, 10),
          product_name,
          price: parseFloat(price),
          image,
          description,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log("Product created successfully:", data);

      // Navigate to Home screen
      router.push('/Supplier');
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message || 'Failed to add product');
    }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
            <Stack.Screen options={{ headerShown: false }} />

            <View className="mx-auto p-4">
              <Image 
                source={require("@/assets/icons/login_logo.png")} 
                className="w-[282px] mt-[170px] mx-auto"
              />

              <Text style={styles.offerName} className='mt-16 text-xl'>اضافه سلعه</Text>
              
              <Text style={styles.offerName} className='mt-5'>رقم المجموعه *</Text>
              <TextInput
                className='w-[350px] h-[50px] p-4 my-3 rounded-xl border-2 text-right border-[#c2c0c0]' 
                placeholder="رقم المجموعه"
                value={category_id}
                onChangeText={setCategoryId}
                keyboardType="numeric"
              />

              <Text style={styles.offerName} className='mt-5'>اسم المنتج</Text>
              <TextInput
                className='w-[350px] h-[50px] p-4 my-3 rounded-xl border-2 text-right border-[#c2c0c0]' 
                placeholder="اسم المنتج"
                value={product_name}
                onChangeText={setProductName}
              />

              <Text style={styles.offerName} className='mt-5'>السعر</Text>
              <TextInput
                className='w-[350px] h-[50px] p-4 my-3 rounded-xl border-2 text-right border-[#c2c0c0]' 
                placeholder="السعر"
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
              />

              <Text style={styles.offerName} className='mt-5'>الصوره</Text>
              <TextInput
                className='w-[350px] h-[50px] p-4 my-3 rounded-xl border-2 text-right border-[#c2c0c0]' 
                placeholder="الصوره"
                value={image}
                onChangeText={setImage}
              />

              <Text style={styles.offerName} className='mt-5'>الوصف</Text>
              <TextInput
                className='w-[350px] h-[50px] p-4 my-3 rounded-xl border-2 text-right border-[#c2c0c0]' 
                placeholder="الوصف"
                value={description}
                onChangeText={setDescription}
              />

              {errorMessage && (
                <Text style={styles.offerName} className='mt-5 text-red-500'>{errorMessage}</Text>
              )}
              <Button title="Add product" onPress={onSubmit} />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default AddProduct;
