import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";
import Notes from "../store/Notes";

const PetsScreen = ({ navigation }) => {
  const { navigate } = useNavigation();

  const isFocused = useIsFocused();
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const tempNotes = Notes.notes;
    console.log(tempNotes);
    setNotes(tempNotes);
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headContent}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Image
            source={require("../assets/ProfileScreen/backbutton.png")}
            style={styles.backBtnImage}
            resizeMode="contain"
          />
        </Pressable>

        <Text style={styles.MainText}>My Pets</Text>
        <View style={styles.emptyBtn}></View>
      </View>

      <FlatList
        data={notes}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.petNameCard}>
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.typeText}>{item.desc}</Text>
                <Text style={styles.nameText}>{item.title}</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Pressable
                  onPress={() => {
                    Notes.deleteNote(item.id);
                    setNotes(Notes.notes);
                    console.log("Delete Pressed");
                  }}
                >
                  <Image
                    source={require("../assets/ProfileScreen/MyPets/DeleteBtn.png")}
                    style={styles.AddPetImg}
                    resizeMode="contain"
                  />
                </Pressable>
                <Pressable>
                  <Image
                    source={require("../assets/ProfileScreen/MyPets/EditBtn1.png")}
                    style={styles.AddPetImg}
                    resizeMode="contain"
                  />
                </Pressable>
              </View>
            </View>
          );
        }}
      />

      <Pressable
        style={styles.createPetBtn}
        onPress={() => navigate("CreatePet")}
      >
        <Image
          source={require("../assets/ProfileScreen/MyPets/AddBtn.png")}
          style={styles.AddPetImg}
          resizeMode="contain"
        />
        <Text style={styles.createPetText}>Create pet</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default PetsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8F8F8",
  },

  headContent: {
    flexDirection: "row",

    marginTop: 40,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 34.5,
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
  MainText: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 18,
    color: "#0A0C11",
  },
  createPetBtn: {
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
    backgroundColor: "#EFE5EA",
    borderRadius: 15,
    height: 54,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 17,
    alignItems: "center",
    justifyContent: "center",
  },
  AddPetImg: {
    width: 30,
    height: 30,
    marginRight: 13,
  },
  createPetText: {
    fontWeight: 500,
    fontSize: 12,
    fontStyle: "normal",
    color: "#9F3770",
  },
  petNameCard: {
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 15,
    backgroundColor: "#ffffff",
    height: 80,
    marginBottom: 10,
  },
  typeText: {
    fontSize: 12,
    fontStyle: "normal",
    color: "#121212",
    opacity: 0.5,
  },
  nameText: {
    fontWeight: 500,
    fontSize: 14,
    fontStyle: "normal",
    color: "#9F3770",
  },
});
