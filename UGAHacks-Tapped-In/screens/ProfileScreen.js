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
            uri: "https://jcbobcats.com/images/2020/11/5/basketball.jpg",
          }}
          //borderRadius will help to make Round Shape
          style={{
            width: 200,
            height: 200,
            overflow: "hidden",
            borderWidth: 2,
            borderColor: "lightgray",
            borderRadius: 200 / 2,
          }}
        />
      
        <Text style={styles.textHeadingStyle}>hilma.reichel</Text>
        <View style={styles.textContainer}>
          <Text style={styles.description}>I Love playing BasketBall. I would love to meet up with people that also enjoy playing BasketBall too. Feel free to contact me if you ever want to play. </Text>
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
    fontFamily: "Dosis-Bold",
    top:10,
    fontSize: 40,
    color: "#3FB0BF",
    fontWeight: "bold",
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
    fontFamily: "Dosis-Medium",
    left: 15,
    top: 10,
    fontSize: 20,
  },
});

export default ProfileScreen;
