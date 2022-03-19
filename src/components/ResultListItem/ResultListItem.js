import { Text, View } from "react-native";
import { styles } from "./ResultListItemStyles";

const ResultListItem = ({ route, navigation }) => {
  const { id } = route.params;

  console.log(id);
  return (
    <View>
      <Text>Result List Item</Text>
      <Text>{id}</Text>
    </View>
  );
};

export default ResultListItem;
