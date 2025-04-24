import React, { useState,useEffect} from "react";
import { View, StyleSheet, Platform, LayoutChangeEvent } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Colors } from "@/constants/Colors";
import TabBarButton from "./TabBarButton";
import Animated, { useAnimatedKeyboard, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const [dimension,setDimension]=useState({height:20 ,width:100});

    const buttonWidth = dimension.width /state.routes.length
    const onTabBarlayout =(e:LayoutChangeEvent)=>{
setDimension({
    height :e.nativeEvent.layout.height,
    width :e.nativeEvent.layout.width
})
    }

    const tabPostionX = useSharedValue(0);
    const animatedStyle = useAnimatedStyle(()=>{
return {
    transform :[{translateX :tabPostionX.value}]
}
    })

    useEffect(()=>{
tabPostionX.value = withTiming(buttonWidth *state.index,{duration :200 })
    },[state.index])
  return (

    <View onLayout={onTabBarlayout}  style={styles.container}>
        <Animated.View style={[animatedStyle,{
            position:"absolute",
            backgroundColor :Colors.primary,
            top :0,
            left :20,
            height :2,
            width :buttonWidth/2

        }]}/>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel ??
          options.title ??
          route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabBarButton
            key={route.key}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            label={label}
            routeName={route.name}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: -3 },
    paddingHorizontal: 12,
    paddingBottom: Platform.OS === "android" ? 10 : 20,
    paddingTop: 8,
  },
});


