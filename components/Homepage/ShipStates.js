import { View, Text, Dimensions, Image, StyleSheet } from "react-native";
import React from "react";

const WIDTH = Dimensions.get("window").width;
// const HEIGHT = Dimensions.get("window").height;
ImgWidth = WIDTH - 100;

const ShipStates = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.headText}>See all states</Text>
        <Text style={styles.headText}>we ship to</Text>
      </View>

      <Image
        source={require("../../assets/shipstatesmap/USmap.png")}
        resizeMode="cover"
        style={styles.img}
      />
    </View>
  );
};

export default ShipStates;

const styles = StyleSheet.create({
  container: {
    padding: 20,

    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#FFFFFF",
    width: WIDTH,
    height: 300,
  },
  textContainer: {
    flex: 1,
  },
  headText: {
    fontWeight: 600,
    fontSize: 24,
    color: "#0A0C11",
    fontStyle: "normal",
  },
  img: {
    flex: 1,

    width: ImgWidth,
    height: 175,
    marginHorizontal: 30,
  },
});
