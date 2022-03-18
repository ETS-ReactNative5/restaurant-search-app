import { View, Text, FlatList } from "react-native";
import { styles } from "./ResultListStyles.js";
import ResultDetail from "../ResultDetail/ResultDetail";

const ResultList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultDetail result={item} />;
        }}
      />
    </View>
  );
};

export default ResultList;
