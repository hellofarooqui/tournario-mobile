import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import { appColors } from '../../styles/colors'

const Header = ({title, leftButtonAction, leftButtonIcon, rightButtonAction, rightButtonIcon}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <TouchableOpacity onPress={leftButtonAction}><Ionicons name={leftButtonIcon} color={styles.headerIcon.color} /></TouchableOpacity>
        {title && <Text style={styles.headerText}>{title}</Text>}
        <TouchableOpacity onPress={rightButtonAction}><Ionicons name={rightButtonIcon} color={styles.headerIcon.color} /></TouchableOpacity>

      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
      backgroundColor:appColors.bg_blue_100,
        padding:0,
        height:56,
        borderBottomWidth:1,
        borderColor: appColors.bg_gray_600,
        display: 'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    headerContent:{
        width: '100%',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    headerIcon : {
        color:'white'
    },
    headerText:{
        color: appColors.text_white_700,
        fontSize:20,
        fontWeight:'bold'
    }
})