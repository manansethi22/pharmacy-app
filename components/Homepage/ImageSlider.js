import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";


const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const imagePaths = [
  require("../../assets/Homepageicons/sliderImage1.png"),
  require("../../assets/Homepageicons/dummy3.jpg"),
  require("../../assets/Homepageicons/dummy2.jpg"),
  require("../../assets/Homepageicons/dummy1.jpg"),
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / WIDTH);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
          onScroll={handleScroll}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}
        >
          {imagePaths.map((path, index) => (
            <Image
              key={index}
              resizeMode="stretch"
              style={styles.wrap}
              source={path}
            />
          ))}
        </ScrollView>
        <View style={styles.dotContainer}>
          {imagePaths.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  width: currentIndex == index ? 17 : 6,
                  height: currentIndex == index ? 6 : 6,
                  borderRadius: currentIndex == index ? 44 : 44,
                  backgroundColor:
                    currentIndex === index ? "#E56A17" : "#aba7a7",
                    marginLeft: 5,
                },
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
    marginTop: 20,
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25,
  },
  dotContainer: {
    flexDirection: "row",

    justifyContent: "center",
    alignItems: "center",
    height: 12,
    width: 70,
    bottom: 0,
    borderRadius: 29,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    left: (WIDTH - 71) / 2,
    marginBottom: 8,
  },
});
