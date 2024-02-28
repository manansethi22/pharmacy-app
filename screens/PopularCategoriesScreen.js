import { StyleSheet, Text, View, Image, SafeAreaView, Pressable } from "react-native";
import React from "react";
import PopularCategoriesCards from "../components/Homepage/PopularCategories/PopularCategoriesCards";

const PopularCategoriesScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headContent}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Image
            source={require("../assets/ProfileScreen/backbutton.png")}
            style={styles.backBtnImage}
            resizeMode="contain"
          />
        </Pressable>

        <Text style={styles.profileText}>Popular Categories</Text>
        <View style={styles.emptyBtn}></View>
      </View>
      <View style={styles.cardcontainer}>
        
        <View style={styles.cards}>
        <Pressable onPress={() => navigation.navigate("EarScreen")}>
          <PopularCategoriesCards name="Ear"  />
          </Pressable>
          <PopularCategoriesCards name="Eyes" />
          <PopularCategoriesCards name="Flea/Tick" />
        </View>
        <View style={styles.cards}>
          <PopularCategoriesCards name="Heartworm" />
          <PopularCategoriesCards name="Pain" />
          <PopularCategoriesCards name="Skin & Coat" />
        </View>
        <View style={styles.cards}>
          <PopularCategoriesCards name="Medication" />
          <PopularCategoriesCards name="Vitamins" />
          <PopularCategoriesCards name="OTC" />
        </View>
        <View>
          <PopularCategoriesCards name="Treats" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PopularCategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8'
  },

  headContent: {
    flexDirection: "row",

    marginTop: 40,
    justifyContent: "space-between",
    alignItems: "center",
  },
  backBtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    width: 45,
    height: 45,
    borderRadius: 33,
  },
  backBtnImage: {
    width: 13,
    height: 19,
    marginRight: 3,
  },
  emptyBtn: {
    backgroundColor: "#F8F8F8",
    width: 45,
    height: 45,
    borderRadius: 33,
  },
  profileText: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 18,
    color: "#0A0C11",
  },
  cardcontainer: {
    
    justifyContent: "space-between",
    marginTop:35.5
  },
  cards: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
