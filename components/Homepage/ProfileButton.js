import React from "react";
import { Pressable, Image } from "react-native";

const ProfileButton = ({ navigation }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate("ProfileNav")}
      style={styles.button}
    >
      <Image
        source={require("../../assets/Homepageicons/profile.png")}
        style={styles.image}
      />
    </Pressable>
  );
};

const styles = {
  button: {
    height: 50,
    width: 50,
    borderRadius: 15,
    padding: 13,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginLeft: 7,
    marginRight: 20,
  },
  image: {
    height: 24,
    width: 24,
    
  },
};

export default ProfileButton;
