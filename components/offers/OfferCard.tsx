import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'
type OfferData = {
    itemName: string;
    oldPrice: number;
    newPrice: number;
    vendorName: string;
    img: number; 
}
import styles from './offersview.style';
interface OfferCardProps {
    item: OfferData;
}
const OfferCard: React.FC<OfferCardProps> = ({ item }) =>{
    return (
      <View style={styles.offerCard}>
        <Image style={{width:140,height:190,borderRadius:20}} source={item.img}></Image>
        <Text  style={styles.oldPrice}>{item.oldPrice}ج.م </Text>
        <Text  style={styles.newPrice}>{item.newPrice} ج.م </Text>
        <Text style={styles.offerName}>{item.itemName}</Text>
        <View style={{display:"flex",flexDirection:"row",alignItems:"flex-end",marginLeft:30}}>
        <Text style={styles.offerName}>{item.vendorName}</Text>
        <Image source={require("../../assets/icons/Profile.png")}></Image>
        </View>
      </View>
    );
  };
export default OfferCard