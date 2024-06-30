import {useEffect, useState} from 'react'
import { View,Text,TouchableOpacity, FlatList,ActivityIndicator, Image, Pressable } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'

type dataTypes={
  category_name:string,
  img:number,
  category_id:string,
}[]

const CategoriesCarousel = () => {
const [data, setData] = useState<dataTypes>([])
 useEffect(() => {
   
 const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/categories'); 
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }
  fetchData();
   
 }, [])
 
//   const data:dataTypes=[
//     {
//     name:"لحوم",
//     img:require('../../assets/icons/meat.png'),
//     id:"1",
//   },
//     {
//     name:"خضراوات",
//     img:require('../../assets/icons/vegetables.png'),
//     id:"2",
//   },
//     {
//     name:"البان",
//     img:require('../../assets/icons/milk.png'),
//     id:"3",
//   },
//     {
//     name:"لحوم",
//     img:require('../../assets/icons/meat.png'),
//     id:"4",
//   },
//     {
//     name:"خضراوات",
//     img:require('../../assets/icons/vegetables.png'),
//     id:"5",
//   },


// ]
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
          <Pressable style={styles.itemContainer} key={item.category_id}>
            {
            <Image source={require('../../assets/icons/vegetables.png')}></Image>  
              
            }
          <Image source={item.img}></Image>
          <Text style={styles.headerBtn}>{item.category_name}</Text>
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