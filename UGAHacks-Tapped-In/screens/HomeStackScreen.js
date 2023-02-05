import { View, StyleSheet, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, useTheme } from "@rneui/themed";
import HomeScreen from "./HomeScreen";
import EventScreen from "./EventScreen";
import * as RootNavigation from "../RootNavigation.js";

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: (props) => <HeaderLeft {...props} />,
          headerTitle: (props) => <HeaderTitle />,
          headerBackground: (props) => <HeaderBackground {...props} />,
          headerRight: (props) => <HeaderRight {...props} />,
        }}
      />
      <HomeStack.Screen
        name="Event"
        component={EventScreen}
        options={{
          headerLeft: (props) => <HeaderLeft {...props} />,
          headerTitle: (props) => <HeaderTitle />,
          headerBackground: (props) => <HeaderBackground {...props} />,
          headerRight: (props) => <HeaderRight2 {...props} />,
          headerBackVisible: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

const HeaderLeft = () => {
  return (
    <Image
      style={{ width: 150, height: 40, resizeMode: "contain" }}
      source={require("../assets/icons/tapped-in-logo.png")}
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
    <TouchableOpacity onPress={() => {}}>
      <Image
        style={{ width: 40, height: 40, resizeMode: "contain" }}
        source={require("../assets/icons/profile-placeholder.png")}
      />
    </TouchableOpacity>
  );
};

const HeaderRight2 = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        RootNavigation.navigate("Home");
      }}
    >
      <Image
        style={{ width: 35, height: 35, resizeMode: "contain" }}
        source={require("../assets/icons/home.png")}
      />
    </TouchableOpacity>
  );
};

export default HomeStackScreen;
