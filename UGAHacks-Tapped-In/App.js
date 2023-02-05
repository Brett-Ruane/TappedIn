import { ThemeProvider, createTheme } from "@rneui/themed";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "./screens/HomeStackScreen";
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

    mode: "light",
  });

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                switch (route.name) {
                  case "Home":
                    iconName = focused ? "home" : "home-outline";
                    break;
                  case "Create Event":
                    iconName = focused ? "add-circle" : "add-circle-outline";
                    break;
                  case "Profile":
                    iconName = focused
                      ? "person-circle"
                      : "person-circle-outline";
                    break;
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: theme.lightColors.primary,
              tabBarInactiveTintColor: "gray",
              headerShown: route.name === "Home" ? false : true,
            })}
          >
            <Tab.Screen name="Home Stack" component={HomeStackScreen} />
            <Tab.Screen name="Create Event" component={CreateEventScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
