import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { appColors } from '../../styles/colors'
import Header from '../../components/layout/Header'
import InputWithHandleChange from '../../components/ui/InputWithHandleChange'
import GameCategories from '../../components/features/home/GameCategories'
import TournamentsList from '../../components/features/home/TournamentsList'


const Home = () => {
    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.screenContainer}>
                <Header title="Tournario" leftButtonAction={() => { }} leftButtonIcon='' rightButtonIcon='' rightButtonAction={() => { }} />

                <View style={styles.screenContent}>
                    <InputWithHandleChange />
                    <GameCategories/>
                    <TournamentsList/>
                </View>

            </View>

        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    safeContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: appColors.darkNavy
    },
    screenContainer: {
        padding: 0
    },
    screenContent:{
        padding:16
    }
})