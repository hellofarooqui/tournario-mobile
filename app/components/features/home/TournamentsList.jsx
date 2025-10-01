import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import TournamentList from "./../../../assets/data/TournamentListData";
import TournamentCard from "./TournamentCard";
import { appColors } from "../../../styles/colors";
import { Ionicons } from "@expo/vector-icons";

const TournamentsList = () => {


  const renderItem = (item) => {
    return (<TournamentCard tournament={item} />);
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyle}>Tournaments</Text>
        <TouchableOpacity style={styles.titleButton}>
          <Text style={styles.titButtonText}>Live</Text>
          <Ionicons name="chevron-down" size={16} color={appColors.lightGray} />
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        <FlatList
          data={TournamentList}
          keyExtractor={(item) =>( item._id)}
          renderItem={renderItem}
        />
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
  },
  titleStyle: {
    fontSize: 16,
    color: appColors.white,
    fontWeight: "bold",
  },
  titleButton: {
    backgroundColor: appColors.lightNavy2,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
    flexDirection: "row",
    columnGap: 8,
    alignItems: "center",
  },
  titButtonText: {
    color: appColors.white,
  },
  cardsContainer: {},
  cardStyle: {},
});
