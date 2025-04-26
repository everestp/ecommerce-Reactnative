import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
const ProfileScreen = () => {
  return (
    <SafeAreaProvider>


    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <Stack.Screen
        options={{
          headerTitle: "Profile",
          headerShown :true,
          headerLeft: () => (
            <TouchableOpacity >
              <Ionicons name="close" size={24} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>

      {/* Options */}
      <View style={styles.options}>
        <ProfileOption title="My Orders" icon="🛒" />
        <ProfileOption title="My Addresses" icon="🏠" />
        <ProfileOption title="Wishlist" icon="❤️" />
        <ProfileOption title="Payment Methods" icon="💳" />
        <ProfileOption title="Settings" icon="⚙️" />
        <ProfileOption title="Help & Support" icon="📞" />
        <ProfileOption title="Logout" icon="🚪" />
      </View>
    </ScrollView>
    </SafeAreaProvider>
  );
};

// Option Item
const ProfileOption = ({ title, icon }) => {
  return (
    <TouchableOpacity style={styles.option}>
      <Text style={styles.optionIcon}>{icon}</Text>
      <Text style={styles.optionText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ProfileScreen;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#f5f5f5',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ddd',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  email: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  options: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  optionIcon: {
    fontSize: 20,
    marginRight: 15,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});
