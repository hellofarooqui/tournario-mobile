import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { appColors } from "../../../styles/colors";
import CarromImage from "../../../assets/images/home/TournamentImages/carrom-tournament.png";
import { readableDate } from "../../../utils/readableDate";

const TournamentCard = ({ tournament }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardTextContainer}>
        <Text
          style={{
            color: appColors.text_white_700,
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          {tournament.name}
        </Text>
        <Text
          style={{
            color: appColors.text_white_700,
            fontSize: 12,
            color: appColors.text_white_300,
          }}
        >
          {readableDate(tournament.startDate)}-{readableDate(tournament.endDate)}
        </Text>
        <Text
          style={{
            color: appColors.text_white_700,
            backgroundColor: appColors.bg_blue_200,
            alignSelf: "baseline",
            paddingHorizontal: 10,
            paddingVertical: 2,
            borderRadius: 12,
          }}
        >
          {tournament.status}
        </Text>
      </View>
      <Image style={styles.cardImage} source={CarromImage} />
    </View>
  );
};

export default TournamentCard;
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: appColors.text_white_100,
    flexDirection: "row",
    marginVertical: 8,
    padding: 8,
    borderRadius: 12,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  cardTextContainer: {
    flex: 1,
    padding: 6,
    rowGap: 8,
  },
});
