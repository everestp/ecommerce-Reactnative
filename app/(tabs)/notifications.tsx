import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import NotificationItems from "@/components/NotificationItems";
const CartScreen = () => {
  return (

    <>
    
    <SafeAreaProvider>
  <Stack.Screen
        options={{
          headerTitle: "Notification",
          headerShown :true,
          headerLeft: () => (
            <TouchableOpacity >
              <Ionicons name="close" size={24} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />
   <NotificationItems
  title="Order Confirmed!"
  message="Your order #12345 has been confirmed and is being prepared."
  time="2 min ago"
  icon="https://cdn-icons-png.flaticon.com/512/190/190411.png"
/>

<NotificationItems
  title="Order Delivered!"
  message="Your order #12345 has been delivered. Enjoy!"
  time="1 hour ago"
  icon="https://cdn-icons-png.flaticon.com/512/190/190406.png"
/>
<NotificationItems
  title="Order Confirmed!"
  message="Your order #56789 has been successfully confirmed."
  time="Just now"
  icon="https://cdn-icons-png.flaticon.com/512/190/190411.png"
/>

<NotificationItems
  title="Payment Successful!"
  message="Your payment for order #56789 was successful. Thank you!"
  time="5 min ago"
  icon="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
/>

<NotificationItems
  title="Out for Delivery!"
  message="Your order #56789 is out for delivery. Get ready!"
  time="20 min ago"
  icon="https://cdn-icons-png.flaticon.com/512/679/679720.png"
/>

<NotificationItems
  title="Limited Time Offer!"
  message="Get 20% OFF on all electronics. Use code ELECTRO20."
  time="1 hour ago"
  icon="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
/>

<NotificationItems
  title="Order Delivered!"
  message="Your order #12345 has been delivered successfully."
  time="2 hours ago"
  icon="https://cdn-icons-png.flaticon.com/512/190/190406.png"
/>

<NotificationItems
  title="New Arrivals!"
  message="Check out the new fashion trends for summer 2025."
  time="5 hours ago"
  icon="https://cdn-icons-png.flaticon.com/512/3524/3524388.png"
/>

<NotificationItems
  title="Order Cancelled!"
  message="Your order #98765 was cancelled. Please try again."
  time="Yesterday"
  icon="https://cdn-icons-png.flaticon.com/512/463/463612.png"
/>

<NotificationItems
  title="Wallet Credited!"
  message="₹500 has been added to your wallet successfully."
  time="2 days ago"
  icon="https://cdn-icons-png.flaticon.com/512/992/992651.png"
/>




    </SafeAreaProvider>
    </>
  );
};


export default CartScreen;