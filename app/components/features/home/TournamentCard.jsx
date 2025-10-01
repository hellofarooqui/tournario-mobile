import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const TournamentCard = ({tournament}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.cardImage} source={tournament.bannerImage}/>
      <View style={styles.cardContent}>  
        <Text>Hello</Text>
      </View>
    </View>
  )
}

export default TournamentCard

const styles=StyleSheet.create({
    container:{

    },
    cardImage:{

    },
    cardContent:{

    }
})