import {useState} from 'react'
import { View,Text,TouchableOpacity, FlatList,ActivityIndicator, Image, Pressable } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'

type dataTypes={
  name:string,
  img:number,
  id:string,
}[]

const CategoriesCarousel = () => {

  const data:dataTypes=[
    {
    name:"لحوم",
    img:require('../../assets/icons/meat.png'),
    id:"1",
  },
    {
    name:"خضراوات",
    img:require('../../assets/icons/vegetables.png'),
    id:"2",
  },
    {
    name:"البان",
    img:require('../../assets/icons/milk.png'),
    id:"3",
  },
    {
    name:"لحوم",
    img:require('../../assets/icons/meat.png'),
    id:"4",
  },
    {
    name:"خضراوات",
    img:require('../../assets/icons/vegetables.png'),
    id:"5",
  },


]
  const isLoading=false;
  const error=false;
  const router=useRouter();
  const [selectedJob, setSelectedJob] = useState("");
  // const handleCardPress = (item:any) => {
  //   router.push(`/category-details/${item.id}`);
  //   setSelectedJob(item.id);
  // };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
    <Text style={styles.headerBtn}>المزيد</Text>
    <TouchableOpacity>
      <Text style={styles.headerTitle}>فئة الموردين</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
      {
        isLoading ? (
          <ActivityIndicator size={"large"}></ActivityIndicator>
        )
        : error ?
        (
          <Text>we have a problem</Text>
        )
        :
        <FlatList  
          data={data}
        renderItem={({item})=>(
          <View style={{display:'flex',gap:30,}}> 
          <Pressable style={styles.itemContainer}>
          <Image source={item.img}></Image>
          <Text style={styles.headerBtn}>{item.name}</Text>
          </Pressable>
        </View>
        )}
        contentContainerStyle={{columnGap:20}}
        horizontal
        showsHorizontalScrollIndicator={false}
        />
       
        
      }
      </View>
    </View>
  )
}

export default CategoriesCarousel