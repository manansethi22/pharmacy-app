import { StyleSheet, Text, View, Pressable } from "react-native";

import React from "react";
import PopularCategoriesCards from "./PopularCategories/PopularCategoriesCards";

const PopularCategories = ({ navigation }) => {
  return (
    <View style={{ paddingHorizontal: 20, marginBottom: 30 }}>
      <View style={styles.container}>
        <Text style={styles.popularText}>Popular Categories</Text>
        <Pressable
          onPress={() => navigation.navigate("PopularCategoriesScreen")}
        >
          <Text style={styles.viewText}>View All</Text>
        </Pressable>
      </View>

      <View style={styles.cardcontainer}>
        <View style={styles.cards}>
          <Pressable onPress={() => navigation.navigate("EarScreen")}>
            <PopularCategoriesCards name="Ear" />
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
    </View>
  );
};

export default PopularCategories;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingHorizontal: 20,
    marginBottom: 15,
  },
  popularText: {
    // fontFamily: 'Poppins',
    // height: 27,
    fontSize: 16,
    fontWeight: 600,
    fontStyle: "normal",
    color: "#0A0C11",
  },
  viewText: {
    fontSize: 14,
    color: "#7D2354",
    fontWeight: 400,
    fontSize: 16,
    fontStyle: "normal",
    textAlign: "right",
  },
  cardcontainer: {
    justifyContent: "space-between",
  },
  cards: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
