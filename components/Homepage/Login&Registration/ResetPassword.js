import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";

const ResetPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const handleLoginPage = () => {
    navigation.navigate('Login')
  };

  const handleSend = () => {
    console.log(' Send pressed')
  };

  return (
    <View style={styles.resetContainer}>
      <Text style={styles.headText}>Reset Password</Text>
      <Text style={styles.descText}>
        Lorem ipsum dolor sit amet consectetur. Mi feugiat ultrices lectus elit
        eget volutpat pulvinar.
      </Text>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image
            source={require("../../../assets/LoginForm/emailIcon.png")}
            style={styles.image}
          />
          <View style={styles.line} />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.textInput}
          />
        </View>
      </View>

      <Pressable
        style={styles.buttonContainer}
        onPress={handleSend}
      >
        <Text style={styles.buttonText}>Send</Text>
      </Pressable>

      <View style={styles.signupContainer}>
        <Text style={styles.lineText}>Just Remembered? </Text>
        <Pressable onPress={handleLoginPage}>

        <Text style={styles.signupText}>Click here to Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  resetContainer: {
    padding: 20,
    backgroundColor: "#ffffff",
    flex: 1,
  },
  headText: {
    fontStyle: "normal",
    // fontWeight: 600,
    color: "#121212",
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20,
  },
  descText: {
    fontSize: 12,
    // fontWeight: 400,
    fontStyle: "normal",
    color: "#121212",
    marginBottom: 25,
  },
  container: {
    borderWidth: 1.5,
    borderColor: "#E9E9E9",

    borderRadius: 12,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 21.5,
    height: 19.5,
    margin: 20,
    marginRight: 16.5,
  },
  image2: {
    width: 21.5,
    height: 19.5,
    marginLeft: 180,
    marginVertical: 20,
    marginRight: 20,
    right: 0,
  },
  line: {
    width: 1.5,
    height: 37.5,
    backgroundColor: "#E3E3E3",

    borderRadius: 8,
    marginRight: 13,
  },
  textInput: {
    fontSize: 12,
    fontStyle: "normal",
    color: "#121212",
  },
  buttonContainer: {
    backgroundColor: "#9F3770",
    borderRadius: 12,
    marginTop: 230,
    justifyContent: "center",
    alignItems: "center",
    height: 54,
  },
  buttonText: {
    fontSize: 14,
    // fontWeight: 500,
    fontStyle: "normal",
    color: "#FFFFFF",
  },
  buttonText2: {
    fontSize: 14,
    // fontWeight: 400,

    fontStyle: "normal",
    color: "#121212",
    marginLeft: 223,
    marginTop: 10,
  },
  signupContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 112,
  },
  lineText: {
    fontSize: 14,
    // fontWeight: 400,

    fontStyle: "normal",
    color: "#121212",
  },
  signupText: {
    fontSize: 14,
    // fontWeight: 400,

    fontStyle: "normal",
    color: "#9F3770",
  },
});
