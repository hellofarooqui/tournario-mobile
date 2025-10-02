import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { appColors } from '../../styles/colors'

const InputWithHandleChange = ({placeHolderText}) => {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput style={styles.searchInput} placeholderTextColor={appColors.text_white_300} placeholder={placeHolderText || 'Search'} />
    </View>
  )
}

export default InputWithHandleChange

const styles = StyleSheet.create({
    searchBarContainer:{
        width:'100%',
        backgroundColor: appColors.bg_blue_200 ,
        borderRadius: 8,
        paddingHorizontal:4,
        paddingVertical:0,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    },
    searchInput:{
        color: appColors.text_white_100,
        fontSize: 14
    }
})