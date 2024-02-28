import { StyleSheet, Text, View,Image, Dimensions } from "react-native";
import React from "react";

// const WIDTH = Dimensions.get("window").width;
// const HEIGHT = Dimensions.get("window").height;

const PetFavCards = ({ logo, image, category, medname, price, oldprice }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imgContainer}>
        <Image source={logo} style={styles.logoImg} resizeMode="contain" />
        <Image source={image} style={styles.medImg} resizeMode="contain" />
      </View>
      <Text style={styles.categoryText}>{category}</Text>
      <Text style={styles.nameText}>{medname}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>{price}</Text>
        <Text style={styles.cutPrice}>{oldprice}</Text>
      </View>
    </View>
  );
};

export default PetFavCards;

const styles = StyleSheet.create({
    card:{
        width:175,
        height: 210,
        backgroundColor:'#FFFFFF',
        marginRight: 10,
        marginTop:10,
        padding: 12,
        borderRadius: 20,
        flex:1,
        flexDirection:'column',
        alignItems: 'flex-start'

    },
  imgContainer: {
    flexDirection: "row",
    marginBottom:20
  },
  priceContainer: {
    flexDirection: "row",
    
  },
  logoImg: {
    width: 14,
    height: 17,
    marginLeft:4.16
  },
  medImg: {
    width: 114,
    height: 81,
  },
  categoryText: {
    fontWeight: 400,
    fontSize: 10,
    color: "#888888",
    fontStyle: "normal",
  },
  nameText: {
    flex:1,
    fontWeight: 500,
    fontSize: 12,
    color: "#262626",
    fontStyle: "normal",
    marginBottom:5
  },
  priceText: {
    fontWeight: 500,
    fontSize: 14,
    color: "#7D2354",
    fontStyle: "normal",
    marginRight: 5,
  },
  cutPrice: {
    fontWeight: 400,
    fontSize: 10,
    color: "#BFBFBF",
    fontStyle: "normal",
    textDecorationLine: "line-through",
  },
});
