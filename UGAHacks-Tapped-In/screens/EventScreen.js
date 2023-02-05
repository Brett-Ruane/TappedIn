import React, {useState} from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text, Image, Button, useTheme } from "@rneui/themed";
    

const EventScreen = () => {

    const [condi, setCondi] = useState(true);
    const {theme} = useTheme();
    return (
    <ScrollView>
      <View style={styles.container2}>
      </View>
      <View style={styles.container}>
<        Image
          source={{
            uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
          }}
          //borderRadius will help to make Round Shape
          style={{
            width: 400,
            height: 300,
            overflow: "hidden",
            borderWidth: 2,
            borderColor: "black",
            
          }}
        />
      
        <Text style={styles.textHeadingStyle}>Event Name</Text>
        <Text style={styles.baseText}>Username</Text>
        <Text style={styles.baseText2}>Date/Time</Text>
        <Text style={styles.baseText3}>TAGS</Text>
        <View style={styles.textContainer}>
          <Text style={styles.description}>TO BE FILLED</Text>
        </View>
        <Button
        buttonStyle={{
          borderRadius: 10,
          marginBottom: 15,
        }}
        title={condi? "Tap In": "Tap Out"}
        backgroundColor={theme.colors.primary}
        onPress={() => setCondi(c => !c)}
        />
        </View>
    </ScrollView>
  );

};
const styles = StyleSheet.create({
  container2: {
    height:20,
    backgroundColor: "#FFFFFF"
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
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
  },
  baseText: {
    top:20,
    fontSize: 20,
    color: "black",
  },
  baseText2: {
    top:20,
    fontSize: 20,
    color: "black",
  },
  baseText3: {
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

export default EventScreen;
