import * as React from "react";
import { AppRegistry, View, StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";
import { name as appName } from "./app.json";
import { Text } from "react-native";
import SplashScreen from "./screens/SplashScreen";
import Homepage from "./screens/Homepage";
import { StatusBar } from "expo-status-bar";
import { BottomNavigation } from "react-native-paper";
import BottomNavBar from "./components/Homepage/BottomNavBar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect } from "react";
import Bottomsheet from "./screens/Bottomsheet";
import Product from "./components/Homepage/Product";
import Profile from "./components/Homepage/Profile";
import PopularCategoriesScreen from "./screens/PopularCategoriesScreen";
import EarScreen from "./screens/popularcategoriesscreen/EarScreen";
import AppNavigator from "./AppNavigator";
import MyPet from "./screens/ProfileScreens/MyPet";
import PetsScreen from "./screens/PetsScreen";

export default function Main() {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  useEffect(() => {
    // Set the bottom sheet visibility to true when the component mounts
    setIsBottomSheetVisible(true);
  }, []);

  const closeBottomSheet = () => {
    setIsBottomSheetVisible(false);
  };

  return (
    <View style={styles.app}>
      <StatusBar hidden={false} />

      <PaperProvider>
        <AppNavigator/>
      </PaperProvider>
    </View>
  );
}

AppRegistry.registerComponent(appName, () => Main);

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#ffffff",

  },
});
