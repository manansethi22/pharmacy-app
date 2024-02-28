import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Dimensions,
} from "react-native";

import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

const WIDTH = Dimensions.get("window").width;

const Product = ({navigation}) => {
  const [selectedDrugType, setSelectedDrugType] = useState(null);

  const handleDrugTypePress = (type) => {
    setSelectedDrugType(type);
  };

  const [selectedStrengthType, setSelectedStrengthType] = useState(null);

  const handleStrengthTypePress = (type) => {
    setSelectedStrengthType(type);
  };

  const [selectedSupplyType, setSelectedSupplyType] = useState(null);

  const handleSupplyTypePress = (type) => {
    setSelectedSupplyType(type);
  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar hidden={false} />
        <View style={styles.imgContainer}>
          <View style={styles.btnContainer}>
          <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
            
              <Image
                source={require("../../assets/productscreen/backbtn.png")}
                style={styles.backBtnImage}
                resizeMode="contain"
              />
            </Pressable>
            <View style={styles.cartBtn}>
              <Image
                source={require("../../assets/productscreen/cart.png")}
                style={styles.cartImage}
                resizeMode="cover"
              />
            </View>
          </View>

          <View style={styles.itemImgContainer}>
            <Image
              source={require("../../assets/productscreen/item1.png")}
              style={styles.itemImg}
            />
          </View>

          <View style={styles.sliderContainer}>
            <Image
              source={require("../../assets/productscreen/slider.png")}
              style={styles.sliderImg}
            />
          </View>
        </View>

        <View style={styles.headTextContainer}>
          <Text style={{ fontWeight: 400, fontSize: 14, color: "#888888" }}>
            Flea-Tick
          </Text>
          <Text style={{ fontWeight: 500, fontSize: 18, color: "#262626" }}>
            NexGard® (afoxolaner) Chewables
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 28,
            }}
          >
            <Image
              source={require("../../assets/productscreen/logo.png")}
              style={{ width: 25, height: 21 }}
              resizeMode="contain"
            />
            <Text style={{ fontWeight: 400, fontSize: 14, color: "#888888" }}>
              Prescription Item
            </Text>
          </View>
        </View>

        <View style={styles.drugContainer}>
          <Text style={styles.typeCardHeadtxt}>Choose Drug Type</Text>
          <View style={styles.typeCardContainer}>
            <Pressable
              style={[
                styles.drugTypeCard,
                selectedDrugType === "Option1" && styles.selectedCard,
              ]}
              onPress={() => handleDrugTypePress("Option1")}
            >
              <Text
                style={[
                  styles.chooseCardText,
                  selectedDrugType === "Option1" && styles.selectedCardText,
                ]}
              >
                Chewable Tablets
              </Text>
            </Pressable>

            <Pressable
              style={[
                styles.drugTypeCard,
                selectedDrugType === "Option2" && styles.selectedCard,
              ]}
              onPress={() => handleDrugTypePress("Option2")}
            >
              <Text
                style={[
                  styles.chooseCardText,
                  selectedDrugType === "Option2" && styles.selectedCardText,
                ]}
              >
                Caplets
              </Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.strengthContainer}>
          <Text style={styles.typeCardHeadtxt}>Choose Strength</Text>
          <View style={styles.typeCardContainer}>
            <Pressable
              style={[
                styles.strengthTypeCard,
                selectedStrengthType === "Option1" && styles.selectedCard,
              ]}
              onPress={() => handleStrengthTypePress("Option1")}
            >
              <Text
                style={[
                  styles.chooseCardText,
                  selectedStrengthType === "Option1" && styles.selectedCardText,
                ]}
              >
                50mg
              </Text>
            </Pressable>

            <Pressable
              style={[
                styles.strengthTypeCard,
                selectedStrengthType === "Option2" && styles.selectedCard,
              ]}
              onPress={() => handleStrengthTypePress("Option2")}
            >
              <Text
                style={[
                  styles.chooseCardText,
                  selectedStrengthType === "Option2" && styles.selectedCardText,
                ]}
              >
                75mg
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.strengthTypeCard,
                selectedStrengthType === "Option3" && styles.selectedCard,
              ]}
              onPress={() => handleStrengthTypePress("Option3")}
            >
              <Text
                style={[
                  styles.chooseCardText,
                  selectedStrengthType === "Option3" && styles.selectedCardText,
                ]}
              >
                100mg
              </Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.supplyContainer}>
          <Text style={styles.typeCardHeadtxt}>Choose Supply Size</Text>
          <View style={styles.typeCardContainer}>
            <Pressable
              style={[
                styles.supplyTypeCard,
                selectedSupplyType === "Option1" && styles.selectedCard,
              ]}
              onPress={() => handleSupplyTypePress("Option1")}
            >
              <Text
                style={[
                  styles.chooseCardText,
                  selectedSupplyType === "Option1" && styles.selectedCardText,
                ]}
              >
                1 ct
              </Text>
            </Pressable>

            <Pressable
              style={[styles.supplyTypeCard,
                selectedSupplyType === "Option2" && styles.selectedCard,
              ]}
              onPress={() => handleSupplyTypePress("Option2")}
            >
              <Text
                style={[
                  styles.chooseCardText,
                  selectedSupplyType === "Option2" && styles.selectedCardText,
                ]}
              >
                30 ct
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.supplyTypeCard,
                selectedSupplyType === "Option3" && styles.selectedCard,
              ]}
              onPress={() => handleSupplyTypePress("Option3")}
            >
              <Text
                style={[
                  styles.chooseCardText,
                  selectedSupplyType === "Option3" && styles.selectedCardText,
                ]}
              >
                60 ct
              </Text>
            </Pressable>

            <Pressable
              style={[
                styles.supplyTypeCard,
                selectedSupplyType === "Option4" && styles.selectedCard,
              ]}
              onPress={() => handleSupplyTypePress("Option4")}
            >
              <Text
                style={[
                  styles.chooseCardText,
                  selectedSupplyType === "Option4" && styles.selectedCardText,
                ]}
              >
                180 ct
              </Text>
            </Pressable>
          </View>
        </View>


        <View style={styles.descriptionText}>
          <Text style={{ fontWeight: 500, fontSize: 16, color: "#0A0C11" }}>
            Description
          </Text>
          <Text
            style={{
              fontWeight: 400,
              fontSize: 14,
              color: "#0A0C11",
              marginTop: 15,
            }}
          >
            With 270mg of curcumin extract per serving this powerful
            anti-oxidant treat will put you back in control of your body. Take 2
            gummies a day to:
          </Text>
          <Text
            style={{
              fontWeight: 400,
              fontSize: 14,
              color: "#0A0C11",
              marginTop: 15,
            }}
          >
            {"\u2022"} Reduce joint aches and stiffness{"\n"}
            {"\u2022"} Increase joint flexibility {"\n"}
            {"\u2022"} Receive healthy anti-inflammatory effects{"\n"}
            {"\u2022"} Improve memory and brain function{"\n"}
            {"\u2022"} Strengthen Immune System{"\n"}
          </Text>
        </View>

        <View style={styles.priceContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: 400, fontSize: 14, color: "#0A0C11" }}>
              Price:
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  fontWeight: 400,
                  fontSize: 12,
                  color: "#0A0C11",
                  textDecorationLine: "line-through",
                  opacity: 0.4,
                }}
              >
                $500
              </Text>
              <Text
                style={{
                  fontWeight: 600,
                  fontSize: 14,
                  color: "#5B143A",
                  marginLeft: 10,
                }}
              >
                $456.27
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 8,
            }}
          >
            <Text style={{ fontWeight: 400, fontSize: 14, color: "#0A0C11" }}>
              Autoship & Save 5%:
            </Text>

            <Text
              style={{
                fontWeight: 600,
                fontSize: 14,
                color: "#5B143A",
                marginLeft: 10,
              }}
            >
              $326.27
            </Text>
          </View>
          <Text style={{ fontWeight: 400, fontSize: 10, color: "#555555" }}>
            (Select Autoship at Checkout)
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 8,
            }}
          >
            <Text style={{ fontWeight: 400, fontSize: 14, color: "#0A0C11" }}>
              You Save:
            </Text>

            <Text
              style={{
                fontWeight: 600,
                fontSize: 14,
                color: "#5B143A",
                marginLeft: 10,
              }}
            >
              $6
            </Text>
          </View>
        </View>

        <View style={styles.presciptionContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/productscreen/logo.png")}
                style={{ width: 20, height: 21 }}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontWeight: 500,
                  fontSize: 14,
                  color: "#0A0C11",
                  marginLeft: 5.45,
                }}
              >
                Prescription Item
              </Text>
            </View>
            <Text style={{ fontWeight: 400, fontSize: 14, color: "#7D2354" }}>
              Details
            </Text>
          </View>
          <Text
            style={{
              fontWeight: 400,
              fontSize: 12,
              color: "#0A0C11",
              marginTop: 10.5,
              marginLeft: 2,
            }}
          >
            This item requires prescription approval.
          </Text>
        </View>

        <View style={styles.shippingContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/productscreen/shipping.png")}
                style={{ width: 23, height: 20 }}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontWeight: 500,
                  fontSize: 14,
                  color: "#0A0C11",
                  marginLeft: 5.45,
                }}
              >
                Special Shipping
              </Text>
            </View>
            <Text style={{ fontWeight: 400, fontSize: 14, color: "#7D2354" }}>
              Details
            </Text>
          </View>
          <Text
            style={{
              fontWeight: 400,
              fontSize: 12,
              color: "#0A0C11",
              marginTop: 10.5,
              marginLeft: 2,
            }}
          >
            Medications ship separately. Delivery times may very
          </Text>
        </View>

        <View style={{ height: 200 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Product;

const styles = StyleSheet.create({
  productContainer: {},
  imgContainer: {
    backgroundColor: "#EFEFEF",
    height: 351,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    paddingHorizontal: 20,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 60,
  },
  backBtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    width: 45,
    height: 45,
    borderRadius: 33,
  },
  backBtnImage: {
    width: 13,
    height: 19,
    marginRight: 3,
  },
  cartBtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    width: 45,
    height: 45,
    borderRadius: 33,
  },
  cartImage: {
    width: 19.84,
    height: 21.23,
  },
  itemImgContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  itemImg: {
    width: 248,
    height: 176,
  },
  sliderContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  sliderImg: {
    width: 71,
    height: 12,
  },
  headTextContainer: {
    paddingHorizontal: 20,
    paddingTop: 25,
  },

  typeCardHeadtxt: {
    fontSize: 16,
    fontWeight: 500,
    color: "#0A0C11",
    fontStyle: "normal",
  },
  typeCardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  drugContainer: {
    paddingHorizontal: 20,
    marginTop:40
  },

  drugTypeCard: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 11,
    height: 40,
    width: (WIDTH - 50) / 2,
    marginTop: 8,
  },
  strengthTypeCard: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 11,
    height: 40,
    width: (WIDTH - 56) / 3,
    marginTop: 8,
  },

  supplyTypeCard: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 11,
    height: 40,
    width: (WIDTH - 64) / 4,
    marginTop: 8,
  },

  strengthContainer: {
    paddingHorizontal: 20,
    marginTop:18
    
  },

  supplyContainer:{
    paddingHorizontal: 20,
    marginTop:18

  },

  chooseCardText: {
    fontSize: 14,
    fontWeight: 600,
    fontStyle: "normal",
    color: "#0A0C11",
  },

  selectedCard: {
    backgroundColor: "rgba(159, 55, 112, 0.1)",

    borderColor: "#9F3770",
    borderWidth: 1,
  },
  selectedCardText: {
    fontSize: 14,
    fontWeight: 600,
    fontStyle: "normal",
    color: "#9F3770",
  },

  descriptionText: {
    paddingHorizontal: 20,
    marginTop: 25,
  },
  priceContainer: {
    padding: 20,
    backgroundColor: "#ffffff",
    marginTop: 25,
  },
  presciptionContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#ffffff",
    marginTop: 25,
  },
  shippingContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#ffffff",
    marginTop: 25,
  },
});
