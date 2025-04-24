import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { ProductType } from "@/types/type";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
type Props = {
  item: ProductType;
};
const width = Dimensions.get("window").width - 40;
const ProductItem = ({ item }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.imageUrl }} style={styles.productImg} />
      <TouchableOpacity style={styles.bookmarkBtn}>
        <Ionicons name="heart-outline" size={22} color={Colors.black} />
      </TouchableOpacity>
      <View>
        <Text style={styles.price}>Rs :{item.price}</Text>
      </View>
      <Text style={{ color: "black" }}>{item.name}</Text>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 10,
    position :"relative"
  },

  productImg: {
    width: "100%",
    height: 200, // Set proper height
    borderRadius: 15,
    marginBottom: 10,
    // resizeMode: "cover",
  },

  bookmarkBtn: {
    position: "absolute",
    right: 20,
    top: 20,
    backgroundColor :'rgba(255,255,255,0.6)',
    padding: 5,
    borderRadius: 30,
  },
  title:{
    fontSize :14,
    fontWeight :'600',
    color :Colors.black,
    letterSpacing :1.1

  },
  price :{
    fontSize :16,
    fontWeight :'700',
    color :Colors.primary
  }
});
