import React from 'react'
import { Image, Text, View } from 'react-native'
type offerDataType={
    
    itemName:string,
    oldPrice:number,
    newPrice: number,
    vendorName:string,
    img:number,
    id:string,
  }
const ProductPage = ({curr}:{curr:offerDataType | undefined}) => {
  return (
    <View className='flex flex-col justify-center'>
            <Image source={curr?.img} ></Image>
          <Text>{curr?.itemName}</Text>
          <Text>{curr?.oldPrice}</Text>
    
    </View>
  )
}
export default ProductPage