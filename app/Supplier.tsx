import {SafeAreaView } from "react-native";
import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import SupplierNavbar from "@/components/navbar/SupplierNavbar";

const Supplier=()=>{
 
useEffect(() => {
  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, [])
    return(
       
        <SafeAreaView >
          <SupplierNavbar></SupplierNavbar>
            
        </SafeAreaView>
      
    )
}
export default Supplier;