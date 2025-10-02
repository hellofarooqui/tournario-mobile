import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { appColors } from '../../styles/colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/layout/Header'
import { Ionicons } from '@expo/vector-icons'

const Chat = () => {
  return (
    <View style={styles.safeContainer}>
            <ScrollView style={styles.screenContainer}>
                <Header title="Chats" leftButtonAction={() => { }} leftButtonIcon='' rightButtonIcon='' rightButtonAction={() => { }} />

                <View style={styles.screenContent}>
                    <Text style={styles.tempMessage}>Tournament Chat</Text>
                    <Ionicons name='chatbubble-outline' size={48} color={appColors.bg_blue_600} />
                    <Text style={styles.tempMessage}>Coming Soon...</Text>
                </View>

            </ScrollView>

        </View>
  )
}

export default Chat
const styles = StyleSheet.create({
    safeContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: appColors.bg_navy_900
    },
    screenContainer: {
        padding: 0
    },
    screenContent:{
        padding:16,
        alignItems:'center',
        rowGap:12,
        justifyContent:'center'
    },
    tempMessage:{
      fontSize: 28,
      color: appColors.text_white_300,
      textAlign:'center'
    }
})