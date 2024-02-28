import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PopularCategoriesScreen from "../screens/PopularCategoriesScreen";
import EarScreen from "../screens/popularcategoriesscreen/EarScreen";


const Stack = createStackNavigator();

const PopularCategoriesNavigations = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PopularCategoriesScreen" component={PopularCategoriesScreen}/>
      <Stack.Screen name="EarScreen" component={EarScreen}/>
     
    </Stack.Navigator>
  );
};

export default PopularCategoriesNavigations;
