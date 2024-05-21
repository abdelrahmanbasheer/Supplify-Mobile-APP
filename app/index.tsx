import {ScrollView,SafeAreaView,Text } from "react-native";
import { Stack,useRouter } from "expo-router";
import Navbar from "@/components/navbar/Navbar";
import CategoriesCarousel from "@/components/popular/CategoriesCarousel";
import OffersView from "@/components/offers/OffersView";


const Home=()=>{
    const router=useRouter();
    return(
       
        <ScrollView  showsVerticalScrollIndicator={false}>
          <Navbar></Navbar>
          <CategoriesCarousel></CategoriesCarousel>
          <OffersView></OffersView>
        </ScrollView>
      
    )
}
export default Home;