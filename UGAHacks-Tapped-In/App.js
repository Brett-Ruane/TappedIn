import { View, StyleSheet } from "react-native";
import { Image, ThemeProvider, createTheme, useTheme } from "@rneui/themed";
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
                  case "Home Stack":
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
              headerShown: route.name === "Home Stack" ? false : true,
            })}
          >
            <Tab.Screen name="Home Stack" component={HomeStackScreen} />
            <Tab.Screen
              name="Create Event"
              component={CreateEventScreen}
              options={{
                headerLeft: (props) => <HeaderLeft {...props} />,
                headerTitle: (props) => <HeaderTitle />,
                headerBackground: (props) => <HeaderBackground {...props} />,
                headerRight: (props) => <HeaderRight {...props} />,
              }}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                headerLeft: (props) => <HeaderLeft {...props} />,
                headerTitle: (props) => <HeaderTitle />,
                headerBackground: (props) => <HeaderBackground {...props} />,
                headerRight: (props) => <HeaderRight {...props} />,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

const HeaderLeft = () => {
  return (
    <Image
      style={{ width: 180, height: 40, resizeMode: "contain" }}
      source={require("./assets/icons/tapped-in-logo.png")}
    />
  );
};

const HeaderTitle = () => {
  return <View></View>;
};

const HeaderBackground = () => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      backgroundColor: theme.colors.primary,
    },
  });

  return <View style={styles.container}></View>;
};

const HeaderRight = () => {
  return (
    <Image
      style={{ width: 70, height: 36, resizeMode: "contain" }}
      source={require("./assets/icons/profile-placeholder.png")}
    />
  );
};

export default App;
