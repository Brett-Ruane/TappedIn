import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text, Image } from "@rneui/themed";

const ProfileScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container2}>
      </View>
      <View style={styles.container}>
<        Image
          source={{
            uri: "https://imgs.search.brave.com/XPTweTHHEzKf9mkRVvjSOY_DecwrKmx2xTPyNAI0d-o/rs:fit:674:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5j/NlRiejdJYkNuOWJW/WHpYUVNPcWhnSGFG/TiZwaWQ9QXBp",
          }}
          //borderRadius will help to make Round Shape
          style={{
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
  container2: {
    height:20,
    backgroundColor: "white"
  },
  container: {
    resizeMode: 'contain',
    width: "100%",
    height: 900,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  textHeadingStyle: {
    top:10,
    fontSize: 40,
    color: "#3FB0BF",
    fontWeight: "bold",
  },
  baseText: {
    top:20,
    fontSize: 20,
    color: "black",
  },
  textContainer: {
    width: 400,
    height: 100,
    top: 40,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "white",
    borderColor: "black",
  },
  description: {
    left: 15,
    top: 10,
    fontSize: 20,
  },
});

export default ProfileScreen;
