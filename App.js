import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultListItem from "./src/components/ResultListItem/ResultListItem";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Search'>
        <Stack.Screen
          name='Search'
          component={SearchScreen}
          options={{ title: "Restaurant Search" }}
        />
        <Stack.Screen
          name='ResultListItem'
          component={ResultListItem}
          options={{ title: "Restaurant Detail" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
