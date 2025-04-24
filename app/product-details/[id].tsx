import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import axios from "axios";
import { useState } from "react";
import { ProductType } from "@/types/type";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
type Props = {};

const ProductDetailsPage = (props: Props) => {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<ProductType>();
  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    const URL = `https://foodapp-springboot-2.onrender.com/api/foods/${id}`;
    const response = await axios.get(URL);
    setProduct(response.data);
    console.log(response.data);
  };
  return (
    <View>
      {product && (
        <Image source={{ uri: product.imageUrl }} style={styles.productImg} />
      )}
      {product && (
        <View style={styles.container}>
          <View style={styles.ratingWrapper}>
            <View style={styles.ratingWrapper}>
              <Ionicons name="star" size={20} color={"#D4AF37"} />
              <Text style={styles.rating}>4.7</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="heart-outline" size={20} color={Colors.black} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default ProductDetailsPage;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  ratingWrappeer: {},
});
