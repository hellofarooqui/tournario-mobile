import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Dices, Ellipsis, House, MessageCircle } from "lucide-react-native";
import { appColors } from "../../styles/colors";
import { SafeAreaView } from "react-native-safe-area-context";

const TabsLayout = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#091524" />
      <SafeAreaView style={styles.container} edges={[]}>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: appColors.bg_navy_900 },
            tabBarInactiveTintColor: appColors.text_white_500,
            tabBarActiveTintColor: appColors.bg_blue_800,
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "Home",
              headerShadowVisible: false,
              tabBarIcon: ({ focused, color, size }) => (
                <House
                  color={
                    focused ? appColors.bg_blue_800 : appColors.text_white_500
                  }
                  size={20}
                />
              ),
            }}
             //below listener resets the stack when the tab is pressed again
            listeners={({ navigation }) => ({
              tabPress: (e) => {
                // Prevent default action            listeners={({navigation}) => ({

                const state = navigation.getState();
                if (state.routes[state.index].state?.index > 0) {
                  // If we are already on the 'index' screen, do nothing
                  e.preventDefault();
                  navigation.reset({ index: 0, routes: [{ name: "index" }] });
                  return;
                }
              },
            })}
          />
          <Tabs.Screen
            name="tournaments"
            options={{
              title: "Tournaments",
              headerShadowVisible: false,
              tabBarIcon: ({ focused, color, size }) => (
                <Dices
                  color={
                    focused ? appColors.bg_blue_800 : appColors.text_white_500
                  }
                  size={20}
                />
              ),
            }}
            //below listener resets the stack when the tab is pressed again
            listeners={({ navigation }) => ({
              tabPress: (e) => {
                // Prevent default action            listeners={({navigation}) => ({

                const state = navigation.getState();
                if (state.routes[state.index].state?.index > 0) {
                  // If we are already on the 'index' screen, do nothing
                  e.preventDefault();
                  navigation.reset({
                    index: 0,
                    routes: [{ name: "tournaments" }],
                  });
                  return;
                }
              },
            })}
          />
          <Tabs.Screen
            name="chat"
            options={{
              title: "Chat",
              headerShadowVisible: false,
              tabBarIcon: ({ focused, color, size }) => (
                <MessageCircle
                  color={
                    focused ? appColors.bg_blue_800 : appColors.text_white_500
                  }
                  size={20}
                />
              ),
            }}
                        //below listener resets the stack when the tab is pressed again
            listeners={({ navigation }) => ({
              tabPress: (e) => {
                // Prevent default action            listeners={({navigation}) => ({

                const state = navigation.getState();
                if (state.routes[state.index].state?.index > 0) {
                  // If we are already on the 'index' screen, do nothing
                  e.preventDefault();
                  navigation.reset({
                    index: 0,
                    routes: [{ name: "chat" }],
                  });
                  return;
                }
              },
            })}
          />
          <Tabs.Screen
            name="more"
            options={{
              title: "More",
              headerShadowVisible: false,
              tabBarIcon: ({ focused, color, size }) => (
                <Ellipsis
                  color={
                    focused ? appColors.bg_blue_800 : appColors.text_white_500
                  }
                  size={20}
                />
              ),
            }}
                        //below listener resets the stack when the tab is pressed again
            listeners={({ navigation }) => ({
              tabPress: (e) => {
                // Prevent default action            listeners={({navigation}) => ({

                const state = navigation.getState();
                if (state.routes[state.index].state?.index > 0) {
                  // If we are already on the 'index' , do nothing
                  e.preventDefault();
                  navigation.reset({
                    index: 0,
                    routes: [{ name: "more" }],
                  });
                  return;
                }
              },
            })}
          />
        </Tabs>
      </SafeAreaView>
    </>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#091524", // This will color the bottom safe area
  },
});
