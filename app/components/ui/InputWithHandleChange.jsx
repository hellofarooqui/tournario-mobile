import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { appColors } from '../../styles/colors'

const InputWithHandleChange = ({placeHolderText}) => {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput style={styles.searchInput} placeholderTextColor={appColors.lightGray} placeholder={placeHolderText || 'Search'} />
    </View>
  )
}

export default InputWithHandleChange

const styles = StyleSheet.create({
    searchBarContainer:{
        width:'100%',
     
        backgroundColor: appColors.lightNavy2,
        borderRadius: 8,
        paddingHorizontal:4,
        paddingVertical:2,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    },
    searchInput:{
        color: appColors.white,
        fontSize: 16
    }
})