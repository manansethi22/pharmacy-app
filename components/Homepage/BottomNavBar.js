import React from "react";
import { View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Settings from "../../screens/Settings";
import History from "../../screens/History";
import Autoship from "../../screens/Autoship";
import HomePageNav from "../../Navigations/HomePageNav";
import Homepage from "../../screens/Homepage";

const HomeIcon = require("../../assets/bottomnavicons/home.png");
const HistoryIcon = require("../../assets/bottomnavicons/history.png");
const AutoshipIcon = require("../../assets/bottomnavicons/autoship.png");
const SettingsIcon = require("../../assets/bottomnavicons/settings.png");

const Tab = createBottomTabNavigator();

const BottomNavBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      
      screenOptions={{  
        
        tabBarShowLabel: true,
        headerShown:false,
        tabBarActiveTintColor: "#ffffff",
        tabBarStyle: {
          backgroundColor: '#121212',
          height: 70,
          borderTopWidth: 0, // Add this line to remove the default top border on iOS
          paddingTop: 10, // Adjust the padding values as needed
          paddingBottom: 10,
          paddingHorizontal: 20,
          position: 'absolute',
          bottom: 28,
          left: 20,
          right: 21,
          borderRadius:15
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '400',
          marginTop: 5, // Adjust the marginTop value to position the label properly
          textAlign: 'center',
          color: '#ffffff',
          },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Homepage}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Image source={HomeIcon} style={{ width: 20, height: 20 }} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: "History",
          tabBarIcon: ({ color, size }) => (
            <Image source={HistoryIcon} style={{ width: 20, height: 20 }} />
          ),
        }}
      />
      <Tab.Screen
        name="Autoship"
        component={Autoship}
        options={{
          tabBarLabel: "Autoship",
          tabBarIcon: ({ color, size }) => (
            <Image source={AutoshipIcon} style={{ width: 20, height: 20 }} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Image source={SettingsIcon} style={{ width: 20, height: 20 }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavBar;
