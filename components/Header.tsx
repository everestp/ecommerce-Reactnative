import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {};

const Header = (props: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.logo}>Carten</Text>
      <Link href={"/explore"} asChild>
        <TouchableOpacity style={styles.searchBar}>
          <Ionicons name="search-outline" size={20} color={Colors.gray} style={{ marginRight: 6 }} />
          <Text style={styles.searchTxt}>Search products...</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingBottom: 10,
    gap: 15,
  },

  logo: {
    fontSize: 26,
    fontWeight: "600",
    color: Colors.primary,
    fontFamily: "DancingScript-Regular", // Ensure you load this font via `expo-font`
  },

  searchBar: {
    flex: 1,
    backgroundColor: Colors.background,
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  searchTxt: {
    color: Colors.gray,
    fontSize: 14,
  },
});
