import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text, Image, Button, useTheme } from "@rneui/themed";
import { useFetch } from "../hooks/useFetch";

const EventScreen = ({route}) => {
  const { _id } = route.params;
  const [condi, setCondi] = useState(true);
  const { theme } = useTheme();

  const { get } = useFetch();
  const [event, setEvent] = useState();

  useEffect(() => {
    getEvent();
  }, []);

  const getEvent = async () => {
    try {
      const response = await get("getone", {
        params: { _id: _id }
      });
      const responseData = response.data;
      if (responseData) {
        setEvent(responseData);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <ScrollView>
      {event && <View style={[styles.container,{flexShrink: 1}]}>
        <Image
          source={{
            uri: event.event,
          }}
          //borderRadius will help to make Round Shape
          style={{
            width: 415,
            height: 300,
          }}
        />

        <Text style={styles.textHeadingStyle}>{event.title}</Text>
        <Text style={styles.baseText}>{`Address: ${event.address}`}</Text>
        <Text style={styles.baseText1}>Posted by:</Text>
        <Text style={styles.baseText2}>{`Date: ${event.date} ${event.time}`}</Text>
        <Text style={styles.baseText3}>{`Tags: ${event.tags}`}</Text>
        <View style={styles.textContainer}>
          <Text style={styles.description}>{event.description}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            titleStyle={{
              fontFamily: "Dosis-Bold",
              fontSize: 20,
            }}
            buttonStyle={{
              height: 50,
              width: 150,
              borderRadius: 10,
              marginBottom: 15,
            }}
            title={condi ? "Tap In" : "Tap Out"}
            backgroundColor={theme.colors.primary}
            onPress={() => setCondi((c) => !c)}
          />
        </View>
      </View>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    resizeMode: "contain",
    width: "100%",
    height: 750,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
  },
  textHeadingStyle: {
    left: 15,
    fontFamily: "Dosis-Bold",
    top: 10,
    fontSize: 30,
    color: "#3FB0BF",
  },
  baseText: {
    left: 15,
    fontFamily: "Dosis-Medium",
    top: 20,
    fontSize: 20,
    color: "black",
  },
  baseText1: {
    left: 15,
    fontFamily: "Dosis-Medium",
    top: 20,
    fontSize: 20,
    color: "black",
  },
  baseText2: {
    left: 15,
    fontFamily: "Dosis-Medium",
    top: 20,
    fontSize: 20,
    color: "black",
  },
  baseText3: {
    left: 15,
    fontFamily: "Dosis-Medium",
    top: 20,
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
    fontFamily: "Dosis-Medium",
    left: 15,
    top: 10,
    fontSize: 20,
  },
  buttonContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 100,
    backgroundColor: "white",
  },
});

export default EventScreen;
