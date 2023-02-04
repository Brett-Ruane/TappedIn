import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text, Image } from "@rneui/themed";

const ProfileScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
          }}
          //borderRadius will help to make Round Shape
          style={{
            top: 30,
            width: 200,
            height: 200,
            overflow: "hidden",
            borderWidth: 2,
            borderColor: "black",
            borderRadius: 200 / 2,
          }}
        />
        <Text style={styles.textHeadingStyle}>Username</Text>
        <Text style={styles.baseText}>TAGS</Text>
        <View style={styles.textContainer}>
          <Text style={styles.description}>TO BE FILLED</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 900,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  textHeadingStyle: {
    marginTop: 30,
    fontSize: 40,
    color: "black",
    fontWeight: "bold",
  },
  baseText: {
    fontSize: 20,
    color: "black",
  },
  textContainer: {
    width: 400,
    height: 100,
    top: 20,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "white",
    borderColor: "black",
  },
  description: {
    fontSize: 20,
  },
});

export default ProfileScreen;
