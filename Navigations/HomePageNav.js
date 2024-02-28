import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../components/Homepage/Profile";
import Homepage from "../screens/Homepage";
import PopularCategoriesScreen from "../screens/PopularCategoriesScreen";
import EarScreen from "../screens/popularcategoriesscreen/EarScreen";
import Product from "../components/Homepage/Product";
import BottomNavBar from '../components/Homepage/BottomNavBar'
import ProfileNav from "./ProfileNavigation";

const Stack = createStackNavigator();

function HomePageNav() {

  
 
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomTab" component={BottomNavBar} />
      <Stack.Screen name="ProfileNav" component={ProfileNav}  />
      <Stack.Screen name="PopularCategoriesScreen" component={PopularCategoriesScreen}/>
      <Stack.Screen name="EarScreen" component={EarScreen} />
      <Stack.Screen name="ProductScreen" component={Product} />
      
    </Stack.Navigator>
  );
}

export default HomePageNav;
