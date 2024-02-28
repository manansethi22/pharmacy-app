import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../components/Homepage/Profile";
import MyPet from "../screens/ProfileScreens/MyPet";
import MyPetNav from "./MyPetNav";
import PetsScreen from "../screens/PetsScreen";

const Stack = createStackNavigator();

const ProfileNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyPetNav"
        component={MyPetNav}
        options={{ headerShown: false }}
      
      />
    </Stack.Navigator>
  );
};

export default ProfileNav;
