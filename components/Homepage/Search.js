import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { PaperProvider, Searchbar } from "react-native-paper";

const CustomSearchIcon = ({ size }) => (
  <Image
    source={require("../../assets/SearchIcon.png")}
    style={{ width: size, height: size }}
  />
);
const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  const size = 19;

  return (
    <PaperProvider>
      <View style={styles.searchBar}>
        <Searchbar
          placeholder="Search Products"
          placeholderTextColor="#BEB8B8"
          inputStyle={styles.input}
          icon={({ size }) => <CustomSearchIcon size={size} />}
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.search}
        />
      </View>
    </PaperProvider>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,

    marginLeft: 20,
    // width: 235,
  },
  search: {
    backgroundColor: "#FFFFFF",
    height: 50,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 12,
    fontStyle: "normal",
  },
});
