import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const TournamentsLayout = () => {
  return (
   <Stack>
    <Stack.Screen name='index' />
    <Stack.Screen name='[category]'/>
   </Stack>
  )
}

export default TournamentsLayout