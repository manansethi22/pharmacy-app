import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import Notes, { notesStore } from "../store/Notes";

const WIDTH = Dimensions.get("window").width;

const AddNewPet = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleCancelBtn = () => {
    navigation.goBack();
  };

  const handleAddBtn = () => {
    Notes.addNote({ title, desc });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <ScrollView>
        <View style={styles.AddPetContainer}>
          <Text style={styles.headText}>Add New Pet</Text>

          <View style={styles.container}>
            <Text style={styles.headInputText}>Pet Name*</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Ex: Cooper"
                value={title}
                onChangeText={setTitle}
                style={styles.textInput}
              />
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.headInputText}>Owner Name</Text>
            <View style={styles.inputContainer}>
              <TextInput placeholder="Ex: John Doe" style={styles.textInput} />
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.headInputText}>Pet Type*</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Select"
                value={desc}
                onChangeText={setDesc}
                style={styles.textInput}
              />
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.headInputText}>Pet Breed</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Ex: Siberian Husky"
                style={styles.textInput}
              />
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.headInputText}>Pet DOB*(mm/dd/yyyy)</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Ex: 06/12/2022"
                style={styles.textInput}
              />
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.headInputText}>Pet Weight</Text>
            <View style={styles.inputContainer}>
              <TextInput placeholder="Ex: 54 lbs" style={styles.textInput} />
            </View>
          </View>

          {/* <View>
            <Text>Gender</Text>
            <Text>Male</Text>
            <Text>Female</Text>
          </View> */}

          <View style={{ height: 160 }}></View>
        </View>
      </ScrollView>

      <View style={styles.buttonsContainer}>
        <Pressable style={styles.cancelBtn} onPress={handleCancelBtn}>
          <Text style={styles.cancelBtnText}>Cancel</Text>
        </Pressable>
        <Pressable style={styles.addBtn} onPress={handleAddBtn}>
          <Text style={styles.addBtnText}>Add</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default AddNewPet;

const styles = StyleSheet.create({
  AddPetContainer: {
    padding: 20,
    backgroundColor: "#ffffff",
    flex: 1,
  },
  headText: {
    fontStyle: "normal",
    fontWeight: 600,
    color: "#121212",
    fontSize: 20,
    marginBottom: 25,
  },
  container: {
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 12,
    marginBottom: 10,
    padding: 16,
  },
  headInputText: {
    fontSize: 14,
    fontStyle: "normal",
    color: "#121212",
    fontWeight: 500,
  },

  textInput: {
    fontSize: 14,
    fontStyle: "normal",
    color: "#121212",
    opacity: 0.45,
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cancelBtn: {
    Padding: 17,
    borderRadius: 12,
    borderColor: "#000000",
    borderWidth: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    width: (WIDTH - 46) / 2,
    backgroundColor: "#ffffff",
  },

  addBtn: {
    Padding: 17,
    borderRadius: 12,

    height: 50,
    justifyContent: "center",
    alignItems: "center",
    width: (WIDTH - 46) / 2,
    backgroundColor: "#9F3770",
  },

  cancelBtnText: {
    fontSize: 14,
    fontStyle: "normal",
    color: "#121212",
  },
  addBtnText: {
    fontSize: 14,
    fontStyle: "normal",
    color: "#FFFFFF",
  },
});
