import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import LoginForm from "../components/Homepage/Login&Registration/LoginForm";
import RegistrationForm from "../components/Homepage/Login&Registration/RegistrationForm";
import ResetPassword from "../components/Homepage/Login&Registration/ResetPassword";
import Verification from "../components/Homepage/Login&Registration/Verification";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const BottomSheetNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginForm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegistrationForm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Reset"
          component={ResetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Verify"
          component={Verification}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Bottomsheet = ({ isVisible, onClose }) => {
  
  return (
    <BottomSheet isVisible={isVisible} onClose={onClose} snapPoints={["78%"]}>
      <BottomSheetNavigator />
    </BottomSheet>
  );
};

export default Bottomsheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
