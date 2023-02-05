import React, {useState} from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text, Image, Button, useTheme } from "@rneui/themed";
    

const EventScreen = () => {

    const [condi, setCondi] = useState(true);
    const {theme} = useTheme();
    return (
    <ScrollView>
        <View style={styles.space}></View>
        <View style={styles.container}>
<          Image
          source={{
            uri: "https://imgs.search.brave.com/XPTweTHHEzKf9mkRVvjSOY_DecwrKmx2xTPyNAI0d-o/rs:fit:674:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5j/NlRiejdJYkNuOWJW/WHpYUVNPcWhnSGFG/TiZwaWQ9QXBp",
          }}
          //borderRadius will help to make Round Shape
          style={{
            borderWidth: 7,
            borderColor: "#FFF2C2",
            width: 415,
            height: 300,
            
          }}
        />
      
        <Text style={styles.textHeadingStyle}>Event Title</Text>
        <Text style={styles.baseText}>Location</Text>
        <Text style={styles.baseText2}>Date</Text>
        <View style={styles.textContainer}>
          <Text style={styles.description}>Description</Text>
        </View>
        <View style={styles.buttonContainer}>
        <Button
        titleStyle={{
            fontFamily: "Dosis-Bold",
            fontSize: 20
        }}
        buttonStyle={{
            height: 50,
            width: 150,
            borderRadius: 10,
            marginBottom: 15,
        }}
        title={condi? "Tap In!": "Tap Out"}
        backgroundColor={theme.colors.primary}
        onPress={() => setCondi(c => !c)}
        />
        </View>
        </View>
    </ScrollView>
  );

};
const styles = StyleSheet.create({
    space: {
        height:50,
        backgroundColor: "white"
    },
    container: {
        resizeMode: 'contain',
        width: "100%",
        height: 750,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "#FFFFFF",
    },
    textHeadingStyle: {
    left: 15,
    top: 10,
    fontFamily: "Dosis-Bold",
    top:10,
    fontSize: 30,
    color: "#3FB0BF",
    fontWeight: "bold",
  },
  baseText: {
    left: 15,
    fontFamily: "Dosis-Medium",
    top:20,
    fontSize: 20,
    color: "black",
  },
  baseText2: {
    left: 15,
    fontFamily: "Dosis-Medium",
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
    backgroundColor: "white"
  }
});

export default EventScreen;
