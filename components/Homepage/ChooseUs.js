import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import ChooseCard from "./chooseus/ChooseCard";

const ChooseUs = () => {
  return (
    <View style={styles.chooseContainer}>
      {/* <View > */}
        <Text style={styles.chooseText}>Why Choose Us</Text>
      {/* </View> */}
      <View>
        <View style={styles.cardContainer}>
          <ChooseCard
            image={require("../../assets/chooseUS/Frame168.png")}
            name="FAST & FREE DELIVERY"
            desc="Free Shipping on orders $49 & Fast shipping for less."
          />
        </View>
        <View style={styles.cardContainer}>
          <ChooseCard
            image={require("../../assets/chooseUS/Frame169.png")}
            name="THE HIGHEST PRODUCT QUALITY"
            desc="U.S FDA/EPA approved products. Regularly inspected for quality"
          />
        </View>
        <View style={styles.cardContainer}>
          <ChooseCard
            image={require("../../assets/chooseUS/Frame169_2.png")}
            name="SATISFACTION GAURANTEE"
            desc="Low Price Products & Shipping. 30 Day Returns. No Restocking Fee"
          />
        </View>
      </View>
    </View>
  );
};

export default ChooseUs;

const styles = StyleSheet.create({
  chooseContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  chooseText: {
    fontSize: 16,
    fontWeight: 600,
    fontStyle: "normal",
    color: "#0A0C11",
    marginBottom: 15,
  },
  cardContainer: {
    paddingLeft:14,
    paddingRight:15,
    paddingVertical: 18,
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
  },
  card: {
    // flexDirection: "row",
    // justifyContent: "space-between",
  },
});