import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import EventScreen from "./EventScreen";
import { Image, useTheme } from "@rneui/themed";

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerBackground: (props) => <HeaderBackground {...props} />,
          headerRight: (props) => <HeaderRight {...props} />,
        }}
      />
      <HomeStack.Screen name="Event" component={EventScreen} />
    </HomeStack.Navigator>
  );
};

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 150, height: 40, resizeMode: "contain" }}
      source={require("../assets/icons/tapped-in-logo.png")}
    />
  );
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
      style={{ width: 40, height: 40, resizeMode: "contain" }}
      source={require("../assets/icons/profile-placeholder.png")}
    />
  );
};

export default HomeStackScreen;
