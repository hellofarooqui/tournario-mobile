import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack screenOptions={{headerShadowVisible:false}}/>
  )
}

export default RootLayout