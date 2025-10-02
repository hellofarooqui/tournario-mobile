import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import {TournamentList} from "./../../../assets/data/TournamentListData";
import TournamentCard from "./TournamentCard";
import { appColors } from "../../../styles/colors";
import { Ionicons } from "@expo/vector-icons";

const TournamentsList = () => {


  const renderItem = ({item}) => {
    console.log(item)
    return (<TournamentCard tournament={item} />);
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyle}>Tournaments</Text>
        <TouchableOpacity style={styles.titleButton}>
          <Text style={styles.titleButtonText}>Live</Text>
          <Ionicons name="chevron-down" size={16} color={appColors.text_white_600} />
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
       {TournamentList.map(tournament => <TournamentCard key={tournament._id} tournament={tournament}/>)}
      </View>
    </View>
  );
};

export default TournamentsList;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  titleContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom:8
  },
  titleStyle: {
    fontSize: 16,
    color: appColors.text_white_800,
    fontWeight: "bold",
  },
  titleButton: {
    backgroundColor: appColors.bg_gray_900,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
    flexDirection: "row",
    columnGap: 8,
    alignItems: "center",
  },
  titleButtonText: {
    color: appColors.text_white_600,
  },
  cardsContainer: {},
  cardStyle: {},
});
