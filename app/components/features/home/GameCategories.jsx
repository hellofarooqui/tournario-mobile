import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { GameCategoriesBar } from "../../../assets/data/GameCategoriesData";
import { router } from "expo-router";
import { appColors } from "../../../styles/colors";

const GameCategories = () => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={()=>router.push(item.link)}>
        <View style={style.categoryItem}>
          <Image style={style.categoryIcon} source={item.icon} />
          <Text style={style.categoryText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={style.container}>
      <View style={style.listContainer}>
        <FlatList
          data={GameCategoriesBar}
          keyExtractor={(item, index) => index}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default GameCategories;

const style=StyleSheet.create({
    container:{

    },
    listContainer:{
        paddingVertical: 12
    },
    categoryItem:{
        alignItems:'center',
        marginRight: 16,
        rowGap: 4
    },
    categoryIcon:{
        width:48,
        height: 48,
        borderRadius: 24
    },
    categoryText:{
        color: appColors.lightGray
    }
})
