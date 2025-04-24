import React from "react";
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { icon } from "@/constants/Icons";
import { Colors } from "@/constants/Colors";

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  onLongPress: (event: GestureResponderEvent) => void;
  isFocused: boolean;
  label: string;
  routeName: string;
};

const TabBarButton: React.FC<Props> = ({
  onPress,
  onLongPress,
  isFocused,
  routeName,
  label,
}) => {
  const color = isFocused ? Colors.primary : Colors.gray;

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabbarBtn}
    >
        {/* Cart Badge */}
        {
            routeName =='cart' &&(
        <View style={styles.badgeWrapper}>
            <Text style={styles.badgeText}>3</Text>
        </View>

            )
        }
      <View style={styles.iconContainer}>
        {icon[routeName.toLowerCase()]?.({ color })}
      </View>
      <Text style={[styles.label, { color }]}>{label}</Text>
    </Pressable>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  tabbarBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  iconContainer: {
    marginBottom: 2,
  },
  label: {
    fontSize: 12,
    fontWeight: "500",
  },
  badgeWrapper :{
    position :'absolute',
    backgroundColor :Colors.highlight,
    top :-5,
    right :20,
    paddingVertical :2,
    paddingHorizontal :6,
    borderRadius :10,
    zIndex:10
  },
  badgeText:{
color :Colors.black,
fontSize :12
  }
});
