import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ProductType } from '@/types/type'
import { FlatList } from 'react-native-gesture-handler'
import { Stack } from 'expo-router'
import Header from '@/components/Header'
import { Image } from 'react-native'
import ProductItem from '@/components/ProductItem'
type Props = {}

const HomeScreen = (props: Props) => {
 const [product ,setProduct] =useState<ProductType[]>([])

 const [isLoading ,setIsLoading]=useState<boolean>(true)
  const getProduct =  async () => {
  const URL ='https://foodapp-springboot-2.onrender.com/api/foods';
  const response = await axios.get(URL)
  setProduct(response.data)
  console.log(response.data)
  }
  useEffect(()=>{
getProduct()
  },[])
  return (
    <>
    <Stack.Screen options={{
      headerShown :true,
      header : ()=><Header/>
    }}/>
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <FlatList
       data={product} 
       numColumns={2}
       columnWrapperStyle={{justifyContent :'space-between', marginBottom :20}}
       keyExtractor={(item)=> item.id.toString()}
        renderItem={({index,item})=>(
       
<ProductItem item={item} />
      )}/> 
    </View>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
   
  marginHorizontal :20
  },

   
  
})