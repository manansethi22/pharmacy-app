import React from "react";
import { Pressable, Image } from "react-native";


const CartButton = ({ onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Image
        source={require("../../assets/Homepageicons/cart.png")}
        style={styles.image}
      />
    </Pressable>
  );
};

const styles = {
  button: {
    
    height: 50,
    width: 50,
    // left: 0,
    // top: 0,
    borderRadius: 15,
    padding: 13,
    
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#ffffff',
    marginLeft: 8,
  },
  image: {
    height: 24,
width: 24,
// left: 13px;
// top: 13px;



  },
};

export default CartButton;
