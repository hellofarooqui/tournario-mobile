import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import Header from "../../../components/layout/Header";
import { appColors } from "../../../styles/colors";
import useTournamnet from "../../../hooks/useTournamnet";
import TournamentCard from "../../../components/features/tournaments/TournamentCard";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const Tournaments = () => {
  const [tournaments, setTournaments] = useState([]);
  const { getAllTournaments } = useTournamnet();

  const fetchTournaments = async () => {
    try {
      const data = await getAllTournaments();

      if (data) {
        setTournaments(data);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchTournaments();
    }, [])
  );

  return (
    <View style={styles.safeContainer}>
      <ScrollView style={styles.screenContainer}>
        <Header
          title="Tournaments"
          leftButtonAction={() => {}}
          leftButtonIcon=""
          rightButtonIcon=""
          rightButtonAction={() => {}}
        />

        <View style={styles.screenContent}>
          {tournaments.map((tournament) => (
            <TouchableOpacity key={tournament._id} onPress={()=>router.push(`/tournaments/${tournament._id}`)}><TournamentCard  tournament={tournament} /></TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity onPress={()=>router.push('/tournaments/newTournament')} style={styles.floatingButton}>
        <Ionicons name="add" size={24} color={appColors.text_white_700} />
      </TouchableOpacity>
    </View>
  );
};

export default Tournaments;

const styles = StyleSheet.create({
  safeContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: appColors.bg_navy_900,
  },
  screenContainer: {
    padding: 0,
  },
  screenContent: {
    padding: 16,
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: appColors.electricBlue,
    width: 52,
    height: 52,
    borderRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
