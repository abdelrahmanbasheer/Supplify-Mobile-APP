import { Image, SafeAreaView, Text, TextInput, View, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard, Button } from "react-native";
import React, { useEffect, useState } from 'react';
import { LogBox } from 'react-native';
import { Link, Stack, useLocalSearchParams, useRouter} from "expo-router";
import styles from "../cart/page.styles";

type dataType ={
  category_id: string,
  product_name: string,
  price: string,
  image: string,
  description: string,
}
const EditProduct = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  const {id}=useLocalSearchParams()
  const [category_id, setcategory_id] = useState('');
  const [product_name, setproduct_name] = useState('');
  const [price, setprice] = useState('');
  const [image, setimage] = useState('');
  const [description, setdescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
  const [data, setData] = useState<dataType>();
  // category_id,
  //       product_name,
  //       price,
  //       image,
  //       description,
  const onSubmit = async () => {
    // Basic form validation
    if (!category_id || !product_name || !price || !image || !description) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    try {
      const response = await fetch(`http://192.168.1.12:3000/products/${id}`, {
        method: 'PUT',
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
      router.push('/SupplierProducts/SupplierProd');
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message || 'Failed to add product');
    }
  };
  const onLoad = async () => {
    try {
      const response = await fetch(`http://192.168.1.12:3000/products/${id}`); 
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    
    onLoad();
  }, [])
  console.log(id)
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
              
              <Text style={styles.offerName} className='mt-5'>رقم المجموعه الحالي {data?.category_id} : *</Text>
              <TextInput
                className='w-[350px] h-[50px] p-4 my-3 rounded-xl border-2 text-right border-[#c2c0c0]' 
                placeholder="رقم المجموعه"
                value={category_id}
                onChangeText={setcategory_id}
                keyboardType="numeric"
              />

              <Text style={styles.offerName} className='mt-5'>اسم المنتج  الحالي {data?.product_name}</Text>
              <TextInput
                className='w-[350px] h-[50px] p-4 my-3 rounded-xl border-2 text-right border-[#c2c0c0]' 
                placeholder="اسم المنتج"
                value={product_name}
                onChangeText={setproduct_name}
              />

              <Text style={styles.offerName} className='mt-5'>السعر الحالي {data?.price}</Text>
              <TextInput
                className='w-[350px] h-[50px] p-4 my-3 rounded-xl border-2 text-right border-[#c2c0c0]' 
                placeholder="السعر"
                value={price}
                onChangeText={setprice}
                keyboardType="numeric"
              />

              <Text style={styles.offerName} className='mt-5'>الصوره الحاليه {data?.image}</Text>
              <TextInput
                className='w-[350px] h-[50px] p-4 my-3 rounded-xl border-2 text-right border-[#c2c0c0]' 
                placeholder="الصوره"
                value={image}
                onChangeText={setimage}
              />

              <Text style={styles.offerName} className='mt-5'>الوصف الحالي {data?.description}</Text>
              <TextInput
                className='w-[350px] h-[50px] p-4 my-3 rounded-xl border-2 text-right border-[#c2c0c0]' 
                placeholder="الوصف"
                value={description}
                onChangeText={setdescription}
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

export default EditProduct;
