import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { appColors } from '../../styles/colors'
import Header from '../../components/layout/Header'
import InputWithHandleChange from '../../components/ui/InputWithHandleChange'
import GameCategories from '../../components/features/home/GameCategories'
import TournamentsList from '../../components/features/home/TournamentsList'


const Home = () => {
    return (
        <View style={styles.safeContainer}>
            <ScrollView style={styles.screenContainer}>
                <Header title="Tournario" leftButtonAction={() => { }} leftButtonIcon='' rightButtonIcon='' rightButtonAction={() => { }} />

                <View style={styles.screenContent}>
                    <InputWithHandleChange />
                    <GameCategories/>
                    <TournamentsList/>
                </View>

            </ScrollView>

        </View>
    )
}

export default Home

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