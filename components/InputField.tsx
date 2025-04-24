import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

type Props ={}
const InputField = (props:React.ComponentProps<typeof TextInput>) => {
  return (
    <TextInput placeholder="Enter Email Address" 
    placeholderTextColor={Colors.gray}
    {...props}
    style ={styles.inputField}
    />
  )
}

export default InputField

const styles = StyleSheet.create({
 inputField: {
    backgroundColor: Colors.white,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignSelf: "stretch",
    borderRadius: 5,
    fontSize: 16,
    color: Colors.black,
    marginBottom :20,
   
  },

})