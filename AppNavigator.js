import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./screens/SplashScreen";

import Parent from "./Navigations/Parent";

import HomePageNav from "./Navigations/HomePageNav";
import PopularCategoriesNavigations from "./Navigations/PopularCategoriesNavigations";
import ProfileNav from "./Navigations/ProfileNavigation";
import Bottomsheet from "./screens/Bottomsheet";

const Stack = createStackNavigator();



const AppNavigator = () => {
  const [showBottomSheet, setShowBottomSheet] = useState(false);

useEffect(() => {
 // Simulating a delay for the splash screen
  setTimeout(() => {
    setShowBottomSheet(true);
  }, 6000);
  
}, []);



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Parent"
          component={Parent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePageNav"
          component={HomePageNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileNav"
          component={ProfileNav}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="PopularCategoriesNavigations"
          component={PopularCategoriesNavigations}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      {/* <Bottomsheet
        isVisible={showBottomSheet}
        onClose={() => setShowBottomSheet(false)}
      /> */}
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
