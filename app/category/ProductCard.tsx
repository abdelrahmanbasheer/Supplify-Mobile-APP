import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'
type OfferData = {
  category: 
    {
      category_name: string;
    }
  
  
  product_name: string;
  product_id: string;
    price: number;
    category_name: string;
    img: number;
    id:string;
}
import styles from './offersview.style';
import { Link } from 'expo-router';
interface OfferCardProps {
    item: OfferData;
}
const ProductCard: React.FC<OfferCardProps> = ({ item }) =>{
    return (
    
      <View style={styles.offerCard}>
        <Image style={{width:140,height:190,borderRadius:20}} source={require("../../assets/icons/meatOffer.png")}></Image>
        <Text  style={styles.newPrice}>{item.price} ج.م </Text>
        <Link href={`/category-details/${item?.product_id}`}>
        <Text style={styles.offerName}>الاسم: {item?.product_name}</Text>
        </Link>
        <Text style={styles.offerName}>النوع :{item?.category?.category_name}</Text>
      </View>
     
    );
  };
export default ProductCard