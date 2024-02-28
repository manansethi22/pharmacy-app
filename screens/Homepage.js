import {
 
  SafeAreaView,
  ScrollView,
  StyleSheet,
  
  View,
} from "react-native";
import Search from "../components/Homepage/Search";
import React from "react";
import CartButton from "../components/Homepage/CartButton";
import ProfileButton from "../components/Homepage/ProfileButton";
import ImageSlider from "../components/Homepage/ImageSlider";
import PopularCategories from "../components/Homepage/PopularCategories";
import ShopByPet from "../components/Homepage/ShopByPet";
import ChooseUs from "../components/Homepage/ChooseUs";
import ShipStates from "../components/Homepage/ShipStates";
import PetFavourites from "../components/Homepage/PetFavourites";


const Homepage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.homecontainer}>
      <ScrollView  showsVerticalScrollIndicator={false} style={styles.scroll}>
        
        <View style={styles.Appheader}>
          <Search />
          <CartButton />
          <ProfileButton navigation={navigation}  />
        </View>
        <ImageSlider />
        <PopularCategories navigation={navigation} />
        <PetFavourites navigation={navigation} />
        <ShopByPet />
        <ChooseUs />
        <ShipStates />
        <View style={styles.lastComponent}></View>
      </ScrollView>
      
    </SafeAreaView>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  homecontainer: {
    
    marginTop: 60,
   
  },
  Appheader: {
    marginTop: 10,
    
    flexDirection: "row",
  },
  lastComponent: {
    height: 200,
  },
  scroll:{
    backgroundColor:'#F8F8F8'
  }
});
