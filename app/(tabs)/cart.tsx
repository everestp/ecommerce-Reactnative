import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
const CartScreen = () => {
  return (

    <>
    
    <SafeAreaProvider>
  <Stack.Screen
        options={{
          headerTitle: "Cart",
          headerShown :true,
          headerLeft: () => (
            <TouchableOpacity >
              <Ionicons name="close" size={24} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />
     <View style={styles.container}>
      <Image 
        source={{ uri: 'https://offline-everest.s3.amazonaws.com/0b382c32-dae8-4ad0-b657-7cf1a55d8a64.jpeg' }} 
        style={styles.image} 
      />
      <View style={styles.details}>
        <Text style={styles.title}>Item Name</Text>
        <Text style={styles.price}>Rs: 99</Text>
        
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>

          <Text style={styles.quantityText}>3</Text>

          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://offline-everest.s3.amazonaws.com/0b382c32-dae8-4ad0-b657-7cf1a55d8a64.jpeg' }} 
        style={styles.image} 
      />
      <View style={styles.details}>
        <Text style={styles.title}>Item Name</Text>
        <Text style={styles.price}>Rs: 99</Text>
        
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>

          <Text style={styles.quantityText}>3</Text>

          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://offline-everest.s3.amazonaws.com/0b382c32-dae8-4ad0-b657-7cf1a55d8a64.jpeg' }} 
        style={styles.image} 
      />
      <View style={styles.details}>
        <Text style={styles.title}>Item Name</Text>
        <Text style={styles.price}>Rs: 99</Text>
        
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>

          <Text style={styles.quantityText}>3</Text>

          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://offline-everest.s3.amazonaws.com/0b382c32-dae8-4ad0-b657-7cf1a55d8a64.jpeg' }} 
        style={styles.image} 
      />
      <View style={styles.details}>
        <Text style={styles.title}>Item Name</Text>
        <Text style={styles.price}>Rs: 99</Text>
        
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>

          <Text style={styles.quantityText}>3</Text>

          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://offline-everest.s3.amazonaws.com/0b382c32-dae8-4ad0-b657-7cf1a55d8a64.jpeg' }} 
        style={styles.image} 
      />
      <View style={styles.details}>
        <Text style={styles.title}>Item Name</Text>
        <Text style={styles.price}>Rs: 99</Text>
        
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>

          <Text style={styles.quantityText}>3</Text>

          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </SafeAreaProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    padding: 10,
    alignItems: 'center'
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  details: {
    flex: 1,
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  }
});

export default CartScreen;