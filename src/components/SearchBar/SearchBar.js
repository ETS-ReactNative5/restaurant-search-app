import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name='search' style={styles.iconStyle} />
      <TextInput
        placeholder='Search'
        style={styles.inputStyle}
        autoCapitalize='none'
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 16,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 8,
    marginHorizontal: 16,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 36,
    alignSelf: "center",
    marginHorizontal: 16,
  },
});

export default SearchBar;
