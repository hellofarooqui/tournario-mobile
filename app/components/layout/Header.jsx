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
      backgroundColor:appColors.electricBlue,
        padding:'8px',
        height:64,
        borderBottomWidth:1,
        borderColor: appColors.lightNavy,
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
        color: 'white',
        fontSize:24,
        fontWeight:'bold'
    }
})