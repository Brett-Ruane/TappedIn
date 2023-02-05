import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, KeyboardAvoidingView, Alert} from "react-native";
import { CheckBox, useTheme, Button } from '@rneui/themed';
import Axios from "axios";

const CreateEventScreen = () => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const [check7, setCheck7] = useState(false);
  const [check8, setCheck8] = useState(false);
  const [check9, setCheck9] = useState(false);
  const [check10, setCheck10] = useState(false);

  const arrayBox = [check1 , check2, check3, check4, check5, check6, check7, check8, check9, check10];

  const [buttonTitle, setButtonTitle] = useState("Post Event");

  const [title, setTitle] = useState("");
  const [capacity, setCapacity] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [tags, setTags] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [event, setEvent] = useState("");
  const [user_id, setUser_id] = useState("63def2dc3fb4095a5053f30a");

  var s = ""
  const options = ["Gaming", "Study", "Sports", "Social", "Business", "Entertainment", "Fitness", "Food", "Charity", "Other"];

  const makeString = () => {
    for(let i = 0; i < arrayBox.length; i++) {
      if (arrayBox[i]) {
        s += options[i] + ", ";
      }
      
    }
    setTags(s);
    //console.log(tags);
  }

  const createPost = () => {
    Axios.post("http://172.20.238.220:3001/post", {
      title: title,
      capacity: capacity,
      date: date,
      time: time,
      tags: tags,
      address: address,
      description: description,
      event: event,
      user_id: user_id,
    }).then((response) => {
      console.log(title);
    })
    
  };  

  const {theme} = useTheme();

  return (
    <ScrollView>
      <View
        style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", backgroundColor: "white"}}
      >
        <Text style={{ top: 5 , fontFamily:"Dosis-Bold", fontSize: 20}}>Title </Text>
        <TextInputExample text={title} onChangeText={setTitle}/>
        <Text style={{ top: 5 , fontFamily:"Dosis-Bold", fontSize: 20}}>Image File</Text>
        <TextInputExample text={event} onChangeText={setEvent}/>
        <Text style={{ top: 5 , fontFamily:"Dosis-Bold", fontSize: 20}}>Address</Text>
        <TextInputExample text={address} onChangeText={setAddress}/>
        <Text style={{ top: 5 , fontFamily:"Dosis-Bold", fontSize: 20}}>YYYY-MM-DD</Text>
        <TextInputExample text={date} onChangeText={setDate}/>
        <Text style={{ top: 5 , fontFamily:"Dosis-Bold", fontSize: 20}}>Capacity</Text>
        <TextInputExample text={capacity} onChangeText={setCapacity}/>
        <Text style={{ top: 5, fontFamily:"Dosis-Bold", fontSize: 20, padding: 20}}>Tags</Text>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <>
            <CheckBox
              iconRight
              right
              title="Gaming"
              fontFamily="Dosis-Bold"
              checkedColor={theme.colors.primary}
              checked={check1}
              onPress={() => setCheck1(!check1)}
              width={150}
            />
          </>
          <>
            <CheckBox
              containerStyle
              title="Study"
              fontFamily="Dosis-Bold"
              checkedColor={theme.colors.primary}
              checked={check2}
              onPress={() => setCheck2(!check2)}
              width={150}
            />
          </>
        </View>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <>
            <CheckBox
              iconRight
              right
              title="Sports"
              fontFamily="Dosis-Bold"
              checkedColor={theme.colors.primary}
              checked={check3}
              onPress={() => setCheck3(!check3)}
              width={150}
            />
          </>
          <>
            <CheckBox
              containerStyle
              title="Social"
              fontFamily="Dosis-Bold"
              checkedColor={theme.colors.primary}
              checked={check4}
              onPress={() => setCheck4(!check4)}
              width={150}
            />
          </>
        </View>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <>
            <CheckBox
              iconRight
              right
              title="Business"
              fontFamily="Dosis-Bold"
              checkedColor={theme.colors.primary}
              checked={check5}
              onPress={() => setCheck5(!check5)}
              width={150}
            />
          </>
          <>
            <CheckBox
              containerStyle
              title="Entertainment"
              fontFamily="Dosis-Bold"
              checkedColor={theme.colors.primary}
              checked={check6}
              onPress={() => setCheck6(!check6)}
              width={150}
            />
          </>
        </View>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <>
            <CheckBox
              iconRight
              right
              title="Fitness"
              fontFamily="Dosis-Bold"
              checkedColor={theme.colors.primary}
              checked={check7}
              onPress={() => setCheck7(!check7)}
              width={150}
            />
          </>
          <>
            <CheckBox
              containerStyle
              title="Food"
              fontFamily="Dosis-Bold"
              checkedColor={theme.colors.primary}
              checked={check8}
              onPress={() => setCheck8(!check8)}
              width={150}
            />
          </>
        </View>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <>
            <CheckBox
              iconRight
              right
              title="Charity"
              fontFamily="Dosis-Bold"
              checkedColor={theme.colors.primary}
              checked={check9}
              onPress={() => setCheck9(!check9)}
              width={150}
            />
          </>
          <>
            <CheckBox
              containerStyle
              title="Other"
              fontFamily="Dosis-Bold"
              checkedColor={theme.colors.primary}
              checked={check10}
              onPress={() => setCheck10(!check10)}
              width={150}
            />
          </>
        </View>
        <Text style={{ top: 15 , fontFamily:"Dosis-Bold", fontSize: 25, padding: 20}}>Description</Text>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          <View style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
          }}>
          <TextInputDesc2 text={description} onChangeText={setDescription}/>
        </View>
        <Button
        buttonStyle={{
          borderRadius: 10,
          marginBottom: 15,
        }}
        title={buttonTitle}
        backgroundColor={theme.colors.primary}
        onPress={() => {
          makeString();
          createPost();}
        }
        />
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
};

const TextInputExample = ({text, onChangeText}) => {
  

  return (
    <View>
      <TextInput
        style={stylesBox.input}
        onChangeText={(target) => onChangeText(target)}
        value={text}
      />
    </View>
  );
};

const TextInputDesc2 = ({text, onChangeText}) => {

  return (
    <View>
      <TextInput
        style={stylesDesc.input}
        onChangeText={(target) => onChangeText(target)}
        value={text}
        textAlignVertical="top"
        multiline={true}
        maxLength={250}
        width={250}
      />
    </View>
  );
};


const TextInputDesc = () => {
  const [text, onChangeText] = React.useState("");

  return (
    <View>
      <TextInput
        style={stylesDesc.input}
        onChangeText={onChangeText}
        value={text}
        textAlignVertical="top"
        multiline={true}
        maxLength={250}
        width={250}
      />
    </View>
  );
};

const stylesDesc = StyleSheet.create({
  input: {
    height: 200,
    width: 190,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "black",
  },
});

const stylesBox = StyleSheet.create({
  input: {
    height: 40,
    width: 190,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "black",
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CreateEventScreen;
