import { ThemeProvider, createTheme } from "@rneui/themed";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import CreateEventScreen from "./screens/CreateEventScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const App = () => {
  const [fonts] = useFonts({
    "Dosis-Regular": require("./assets/fonts/Dosis-Regular.ttf"),
    "Dosis-Medium": require("./assets/fonts/Dosis-Medium.ttf"),
    "Dosis-SemiBold": require("./assets/fonts/Dosis-SemiBold.ttf"),
    "Dosis-Bold": require("./assets/fonts/Dosis-Bold.ttf"),
  });

  const theme = createTheme({
    lightColors: {
      primary: "#3FB0BF",
    },
    darkColors: {
      primary: "#000",
    },
    mode: "light",
  });

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Create Event" component={CreateEventScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
