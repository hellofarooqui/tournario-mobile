import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../../components/layout/Header'
import { appColors } from '../../styles/colors'

const More = () => {
  return (
    <View style={styles.safeContainer}>
            <ScrollView style={styles.screenContainer}>
                <Header title="Tournario" leftButtonAction={() => { }} leftButtonIcon='' rightButtonIcon='' rightButtonAction={() => { }} />

                <View style={styles.screenContent}>
                  <Text style={{color: appColors.bg_blue_500, fontSize: 24}}>This page will come soon</Text>
                </View>

            </ScrollView>

        </View>
  )
}

export default More

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
        padding:16
    }
})