import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import BusinessService from "../api/business.service";
import SearchBar from "../components/SearchBar/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const searchHandler = async () => {
    const data = await BusinessService.searchBusiness(term);
    return setResults(data);
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchHandler}
      />
      <Text>Search Screen</Text>
      <Text>Found {results.length} results!</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
