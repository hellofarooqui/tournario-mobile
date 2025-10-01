import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>LoadingScreen</Text>
    </View>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
    
})