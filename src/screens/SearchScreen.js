import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Container from "../components/Container/Container";
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
    <Container>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchHandler(term)}
      />
      {results.length ? (
        <View styles={styles.container}>
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
    </Container>
  );
};

const styles = StyleSheet.create({
  results: {
    fontFamily: "roboto",
    fontSize: 26,
    marginHorizontal: "50%",
  },
});

export default SearchScreen;
