import { View, Text, FlatList } from "react-native";
import { styles } from "./ResultListStyles.js";
import ResultDetail from "../ResultDetail/ResultDetail";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ResultList = ({ title, results }) => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ResultListItem", { id: item.id });
              }}
            >
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ResultList;
