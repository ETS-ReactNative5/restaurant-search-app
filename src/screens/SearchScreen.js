import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import useResults from "../hooks/useResults";
import SearchBar from "../components/SearchBar/SearchBar";
import ResultList from "../components/ResultList/ResultList";
const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchHandler, results] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchHandler(term)}
      />
      {results.length ? (
        <View>
          <Text styles={styles.results}>Found {results.length} results!</Text>
          <ResultList
            results={filterResultsByPrice("$")}
            title='Cost Effective'
          />
          <ResultList
            results={filterResultsByPrice("$$")}
            title='Bit Pricier'
          />
          <ResultList
            results={filterResultsByPrice("$$$")}
            title='Big Spender'
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  results: {
    fontFamily: "roboto",
    fontSize: 22,
    marginHorizontal: "auto",
  },
});

export default SearchScreen;
