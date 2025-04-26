import { Dimensions, StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useContext, useState } from "react";
import { ProductType } from "@/types/type";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { StoreContext } from "@/context/StoreContext";

type Props = {
  item: ProductType;
  index: number;
  id:String
  
};

const width = Dimensions.get("window").width - 40;

const ProductItem = ({ item, index ,id}: Props) => {
  const [liked, setLiked] = useState(false);
 
  const toggleLike = () => {
    setLiked(!liked);
    // Optionally handle backend update or local state
  };

  return (
    <SafeAreaView>

    <Link href={`/product-details/${item.id}`} asChild>
        <TouchableOpacity>

    <Animated.View
      style={styles.card}
      entering={FadeInDown.delay(300 + index * 100).duration(300)}
      >
      <View style={styles.imageWrapper}>
        <Image source={{ uri: item.imageUrl }} style={styles.productImg} />

        <Pressable style={styles.bookmarkBtn} onPress={toggleLike}>
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={20}
            color={liked ? Colors.primary : Colors.black}
            />
        </Pressable>
      </View>

      <Text style={styles.title} numberOfLines={1}>
        {item.name}
      </Text>
      <Text style={styles.price}>Rs: {item.price}</Text>
    </Animated.View>
        </TouchableOpacity>
    </Link>
            </SafeAreaView>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  card: {
    width: width / 2 - 10,
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 1,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },

  imageWrapper: {
    position: "relative",
    borderRadius: 12,
    overflow: "hidden",
  },

  productImg: {
    width: "100%",
    height: 160,
    borderRadius: 12,
  },

  bookmarkBtn: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#fff",
    height: 32,
    width: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },

  title: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.black,
    marginTop: 8,
  },

  price: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.primary,
    marginTop: 4,
  },
});
