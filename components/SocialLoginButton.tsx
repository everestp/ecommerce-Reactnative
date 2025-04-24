import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Ionicons } from "@expo/vector-icons";
import Google from "@/assets/images/google-logo.svg";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";
import { Href, Link } from 'expo-router';

type Props = {
  emailHref :Href<string | object>
};
const SocialLoginButton = (props :Props) => {
  const {emailHref} =props;
  return (
   <View style={styles.socialLoginWrapper}>
                    {/* emai button */}
                   <Animated.View entering={FadeInDown.delay(300).duration(500)}>
   
                   <Link href={emailHref} asChild>
                     <TouchableOpacity style={styles.button}>
                       <Ionicons
                         name="mail-outline"
                         size={20}
                         color={Colors.black}
                       />
                       <Text style={styles.btnTxt}>Continue with email</Text>
                     </TouchableOpacity>
                   </Link>
                   </Animated.View>
                  
   
                   {/* Google button */}
                   <Animated.View entering={FadeInDown.delay(300).duration(500)}>
   
                   <TouchableOpacity style={styles.button}>
                     <Google width={20} height={20} />
                     <Text style={styles.btnTxt}>Continue with Google</Text>
                   </TouchableOpacity>
                   </Animated.View>
   
                   {/* apple button */}
     <Animated.View entering={FadeInDown.delay(300).duration(500)}>
                     
                   <TouchableOpacity style={styles.button}>
                     <Ionicons name="logo-apple" size={20} color={Colors.black} />
                     <Text style={styles.btnTxt}>Continue with Apple</Text>
                   </TouchableOpacity>
                   </Animated.View>
                 </View>
  )
}

export default SocialLoginButton

const styles = StyleSheet.create({
     socialLoginWrapper: {
        alignSelf: "stretch",
      },
      button: {
        flexDirection: "row",
        padding: 10,
        borderColor: Colors.gray,
        borderRadius: 25,
        borderWidth: StyleSheet.hairlineWidth,
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        marginBottom: 15,
      },
      btnTxt: {
        fontSize: 14,
        fontWeight: "600",
        color: Colors.black,
      }
})