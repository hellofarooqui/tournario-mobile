import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import {Dices, Ellipsis, House, MessageCircle} from 'lucide-react-native'
import { appColors } from '../../styles/colors'

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{headerShown:false, tabBarStyle:{backgroundColor:appColors.darkNavy}, tabBarInactiveTintColor:appColors.lightGray, tabBarActiveTintColor:appColors.electricBlue}}>
        <Tabs.Screen name='index' options={{headerShadowVisible:false , tabBarIcon: ({focused, color,size})=><House color={ focused ? appColors.electricBlue : appColors.lightGray}/>}} />
        <Tabs.Screen name='tournaments' options={{headerShadowVisible:false , tabBarIcon: ({focused,color,size})=><Dices color={ focused ? appColors.electricBlue : appColors.lightGray}/>}} />
        <Tabs.Screen name='chat' options={{headerShadowVisible:false , tabBarIcon: ({focused,color,size})=><MessageCircle color={ focused ? appColors.electricBlue : appColors.lightGray} />}} />
        <Tabs.Screen name='more' options={{headerShadowVisible:false , tabBarIcon: ({focused,color,size})=><Ellipsis color={ focused ? appColors.electricBlue : appColors.lightGray} />}} />

    </Tabs>
  )
}

export default TabsLayout

