import React, { useState, useRef, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";

const Verification = ({  onClose }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [timerActive, setTimerActive] = useState(false);
  const inputRefs = useRef([]);

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    useEffect(() => {
      let interval;

      if (timerActive && timer > 0) {
        interval = setInterval(() => {
          setTimer((prevTimer) => prevTimer - 1);
        }, 1000);
      }

      if (timer === 0) {
        setTimerActive(false);
      }

      return () => {
        clearInterval(interval);
      };
    }, [timer, timerActive]);

    if (text !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join("");
    onClose();
  };

  const handleResend = () => {
    setTimer(60);
    setTimerActive(true);

    // Perform login logic with email and password
    console.log("Resend pressed");
  };

  return (
    <View style={styles.verifyContainer}>
      <Text style={styles.headText}>Verification</Text>
      <Text style={styles.descText}>
        Lorem ipsum dolor sit amet consectetur. Mi feugiat ultrices lectus elit
        eget volutpat pulvinar.
      </Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.input}
            onChangeText={(text) => handleOtpChange(text, index)}
            value={digit}
            placeholder=""
            placeholderTextColor="gray"
            keyboardType="numeric"
            maxLength={1}
            ref={(ref) => (inputRefs.current[index] = ref)}
            onSubmitEditing={handleSubmit}
          />
        ))}
      </View>
      <Pressable style={styles.buttonContainer} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>

      <View style={styles.buttonContainer2}>
        <Image
          source={require("../../../assets/LoginForm/Timer1.png")}
          style={styles.image}
          resizeMode="contain"
        />
        {timer === 0 ? (
          <Pressable onPress={handleResend}>
            <Text style={styles.buttonText2}>Resend</Text>
          </Pressable>
        ) : (
          <Text style={styles.buttonText2}>
            Resend <Text style={styles.timerText}>({timer}s) </Text>
          </Text>
        )}
      </View>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  verifyContainer:{
    padding:20,
    backgroundColor:'#ffffff',
    flex:1,
  },
  headText: {
    fontStyle: "normal",
    fontWeight: 600,
    color: "#121212",
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20,
  },
  descText: {
    fontSize: 12,
    fontWeight: 400,
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
  otpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  input: {
    width: 50,
    height: 59,
    borderColor: "#E9E9E9",
    borderWidth: 1.5,
    borderRadius: 12,
    marginRight: 8,
    paddingHorizontal: 10,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "500",
    color: "#9F3770",
  },
  image: {
    width: 21.5,
    height: 19.5,
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
    marginTop: 174,
    justifyContent: "center",
    alignItems: "center",
    height: 54,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 500,

    fontStyle: "normal",
    color: "#FFFFFF",
  },
  buttonContainer2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText2: {
    fontSize: 14,
    fontWeight: 400,

    fontStyle: "normal",
    color: "#9F3770",
    marginLeft: 9.25,
  },
  signupContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },

  timerText: {
    fontSize: 14,
    fontWeight: 400,

    fontStyle: "normal",
    color: "#121212",
  },
});
