import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { appColors } from '../../../styles/colors'

const TournamentCard = ({tournament}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.cardImage} source={tournament.bannerImage}/>
      <View style={styles.cardContent}>  
        <Text style={{...styles.cardText, color:appColors.text_white_700, fontSize:12, fontWeight:'bold'}}>{tournament.title}</Text>
        <Text style={{...styles.cardText, color: appColors.text_white_400, fontSize: 10}}>{tournament.date}</Text>
        <Text style={{...styles.cardText, color: appColors.text_white_400, fontSize: 10}}>{tournament.participants.length} Participants</Text>

      </View>
    </View>
  )
}

export default TournamentCard

const styles=StyleSheet.create({
    container:{
      backgroundColor:appColors.bg_gray_600,
      padding:4,
      borderRadius: 16,
      marginVertical: 8
    },
    cardImage:{
      width:'100%',
      height:100,
      borderRadius:12,
      objectFit:'cover'
    },
    cardContent:{
      rowGap:4,
      color: appColors.whiteText,
      paddingVertical:12,
      paddingHorizontal: 12
    },
    cardText:{
      color: appColors.whiteText
    }
})