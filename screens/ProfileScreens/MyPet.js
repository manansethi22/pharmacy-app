import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
} from "react-native";
import React from "react";

const MyPet = ({ navigation }) => {
    <SafeAreaView style={styles.container}>
    <View style={styles.headContent}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
        <Image
          source={require("../../assets/ProfileScreen/backbutton.png")}
          style={styles.backBtnImage}
          resizeode="contain"
        />
      </Pressable>

      <Text style={styles.profileText}>Profile</Text>
      <View style={styles.emptyBtn}></View>
    </View>

  </SafeAreaView>
  
};

export default MyPet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFFF",
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
  nameText: {
    fontWeight: 500,
    fontSize: 16,
    fontStyle: "normal",
    marginVertical: 35.5,
    letterSpacing: -0.01,
    color: "#121212",
  },
  logoutBtn: {
    position: "absolute",
    bottom: 35,
    left: 20,
    right: 20,
    backgroundColor: "#121212",
    borderRadius: 15,
    height: 60,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 17,
    alignItems: "center",
  },
  logoutImg: {
    width: 30,
    height: 30,
    marginRight: 13,
  },
  logoutText: {
    fontWeight: 500,
    fontSize: 12,
    fontStyle: "normal",
    color: "#ffffff",
  },
});
