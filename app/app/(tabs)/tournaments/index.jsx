import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../../components/layout/Header'
import { appColors } from '../../../styles/colors'
import useTournamnet from '../../../hooks/useTournamnet'
import TournamentCard from '../../../components/features/tournaments/TournamentCard'

const Tournaments = () => {

  const [tournaments,setTournaments] = useState([])
  const {getAllTournaments} = useTournamnet()

  const fetchTournaments = async () => {
    try{
      const data = await getAllTournaments() 

      if(data){
        setTournaments(data)
      }
    }
    catch(error){
      console.log("Error",error)
    }
  }

  useEffect(()=>{
    fetchTournaments()
  },[])
  return (
    <View style={styles.safeContainer}>
            <ScrollView style={styles.screenContainer}>
                <Header title="Tournaments" leftButtonAction={() => { }} leftButtonIcon='' rightButtonIcon='' rightButtonAction={() => { }} />

                <View style={styles.screenContent}>
                    {tournaments.map(tournament => <TournamentCard key={tournament._id} tournament={tournament} />)}
                </View>

            </ScrollView>

        </View>
  )
}

export default Tournaments

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