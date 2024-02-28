import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// import MyPet from "../screens/ProfileScreens/MyPet";
import PetsScreen from "../screens/PetsScreen";
import AddNewPet from "../screens/AddNewPet";

const Stack = createStackNavigator();

const MyPetNav = () => {
  return (
    <Stack.Navigator>
      
      <Stack.Screen
        name="MyPet"
        component={PetsScreen} 
        options={{ headerShown: false }} 
          
      />
      <Stack.Screen
        name="CreatePet"
        component={AddNewPet}   
        options={{presentation: 'modal',headerShown: false}}   
      />


    </Stack.Navigator>
  );
};

export default MyPetNav;
