import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductType } from '@/types/type';
import { FlatList } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';
import Header from '@/components/Header';
import ProductItem from '@/components/ProductItem';
import { Colors } from '@/constants/Colors';
import { Image } from 'react-native';
import { StoreContextProvider } from '@/context/StoreContext';


type Props = {};

const HomeScreen = (props: Props) => {
  const [product, setProduct] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getProduct = async () => {
    const URL = 'https://foodapp-springboot-2.onrender.com/api/foods';
    const response = await axios.get(URL);
    setProduct(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <StoreContextProvider>

    <>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
      />
      <View style={styles.container}>
        {/* Section Title */}
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>For You</Text>
          <TouchableOpacity>
            <Text style={styles.titleBtn}>See All</Text>
          </TouchableOpacity>
         
        </View>

        {/* Product List */}
        <FlatList
          data={product}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ index, item }) => (
            <View style={styles.itemWrapper}>
              {/* Outer Wrapper */}
            

              {/* Product Item */}
              <ProductItem item={item} index={index} id={item.id}/>
            </View>
          )}
        />
      </View>
    </>
    </StoreContextProvider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.6,
    color: Colors.black,
  },
  titleBtn: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.6,
    color: Colors.black,
  },
  itemWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  extraView: {
    width: '100%',
    height: 40,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  extraText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
});