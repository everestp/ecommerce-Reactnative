import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CategoryType } from '@/types/type'

type Props = {
    categories :CategoryType[]
}

const Cartegories = (props: Props) => {
  return (
    <View>
      <Text>Cartegories</Text>
    </View>
  )
}

export default Cartegories

const styles = StyleSheet.create({})