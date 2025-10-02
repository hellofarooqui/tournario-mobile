import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { appColors } from '../styles/colors'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const RootLayout = () => {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#091524' />
      <Stack screenOptions={{ contentStyle: {} }}>
        <Stack.Screen name='(tabs)' options={{ headerShown: false, }} />
      </Stack>
    </>
  )
}

export default RootLayout