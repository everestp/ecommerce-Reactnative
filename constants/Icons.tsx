import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export const icon = {
  index: ({ color }: { color: string }) => (
    <Ionicons name="home-outline" size={22} color={color} />
  ),

  explore: ({ color }: { color: string }) => (
    <Ionicons name="search-outline" size={22} color={color} />
  ),

  notifications: ({ color }: { color: string }) => (
    <Ionicons name="notifications-outline" size={22} color={color} />
  ),

  cart: ({ color }: { color: string }) => (
    <Ionicons name="cart-outline" size={22} color={color} />
  ),

  profile: ({ color }: { color: string }) => (
    <Image
      source={{ uri: "https://xsgames.co/randomusers/avatar.php?g=male" }}
      style={[styles.avatar, { borderColor: color }]}
    />
  ),
};

const styles = StyleSheet.create({
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
  },
});
