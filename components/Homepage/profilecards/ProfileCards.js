import { StyleSheet, Text, View,Image } from "react-native";
import React from "react";

const ProfileCards = ({ image, name }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.cardImg} resizeMode="cover" />

      <Text style={styles.cardText}>{name}</Text>
    </View>
  );
};

export default ProfileCards;

const styles = StyleSheet.create({

card:{

    backgroundColor:'#ffffff',
    borderRadius:15,
    height:60,
    flexDirection:'row',
    paddingHorizontal:20,
    paddingVertical:17,
    alignItems:'center',
    marginTop:10
    
},
cardImg:{
    width:24,
    height:24

},
cardText:{
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 12,
    color: "#121212",
    marginLeft:10
}
});
