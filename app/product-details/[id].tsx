import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import axios from "axios";
import { ProductType } from "@/types/type";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import { addTocartService } from "@/service/cartService";
type Props = {};

const ProductDetailsPage = (props: Props) => {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<ProductType>();
  const headerHeight = useSafeAreaInsets()
  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    const URL = `https://foodapp-springboot-2.onrender.com/api/foods/${id}`;
    const response = await axios.get(URL);
    setProduct(response.data);
    console.log(response.data);
  };
 const cartAdd =  async (foodId,token)=>{
const response = await addTocartService(foodId,token)
 }
  return (
        <SafeAreaView>
        <Stack.Screen options={{title : product?.name ,headerTransparent:true}} />
      <ScrollView contentContainerStyle={styles.container}>
      {product && (
        <>
          {/* Product Image */}
          <Image source={{ uri: product.imageUrl }} style={styles.productImg} resizeMode="contain" />
          
          {/* Rating and Actions */}
          <View style={styles.header}>
            <View style={styles.ratingWrapper}>
              <Ionicons name="star" size={20} color={"#D4AF37"} />
              <Text style={styles.rating}>
                4.7 <Text style={styles.reviews}>(5,134 reviews)</Text>
              </Text>
            </View>
            <TouchableOpacity style={styles.bookmarkBtn}>
              <Ionicons name="heart-outline" size={24} color={Colors.black} />
            </TouchableOpacity>
          </View>
          
          {/* Product Details */}
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.description}>{product.description}</Text>
          
          {/* Price and Discounts */}
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>Rs: {product.price}</Text>
            <View style={styles.discountWrapper}>
              <Text style={styles.discountText}>12% Off</Text>
              <Text style={styles.oldPrice}>Rs: {(product.price * 1.1).toFixed(2)}</Text>
            </View>
          </View>
          
          {/* Category */}
          <View style={styles.categoryWrapper}>
            <Text style={styles.categoryTitle}>Category: </Text>
            <Text style={styles.categoryValue}>{product.category}</Text>
          </View>
          
          {/* Buttons */}
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.addToCartBtn} onPress={()=>cartAdd(product.id ,token)}>
              <Ionicons name="cart-outline" size={20} color="#fff" />
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buyNowBtn}>
              <Ionicons name="flash-outline" size={20} color="#fff" />
              <Text style={styles.buttonText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailsPage;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  productImg: {
    width: "100%",
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.gray,
    marginLeft: 5,
  },
  reviews: {
    fontSize: 14,
    color: Colors.lightGray,
  },
  bookmarkBtn: {
    height: 34,
    width: 34,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 17,
    elevation: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.black,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: Colors.gray,
    marginBottom: 20,
  },
  priceWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.primary,
    marginRight: 10,
  },
  discountWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  discountText: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.primary,
    marginRight: 5,
  },
  oldPrice: {
    fontSize: 16,
    color: Colors.gray,
    textDecorationLine: "line-through",
  },
  categoryWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.gray,
  },
  categoryValue: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.black,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  addToCartBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    borderRadius: 8,
    width: "48%",
  },
  buyNowBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFA500", // Orange color for emphasis
    paddingVertical: 12,
    borderRadius: 8,
    width: "48%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
});