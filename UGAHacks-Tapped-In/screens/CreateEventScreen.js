import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, KeyboardAvoidingView, Alert} from "react-native";
import { CheckBox, useTheme, Button } from '@rneui/themed';

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

  const [title, setTitle] = useState("");
  const [capacity, setCapacity] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [tags, setTags] = useState([]);
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [user_id, setUser_id] = useState("");

  const handleRegister = () => {
    Axios.post("http://localhost:3001"), { 
      title: title,
      capacity: capacity,
      date: date,
      time: time,
      tags: tags,
      address: address,
      description: description,
      user_id: user_id,
    }
  };

  const {theme} = useTheme();

  return (
    <ScrollView>
      <View
        style={{ flex: 1, justifyContent: "flex-start", alignItems: "center"}}
      >
        <Text style={{ top: 5 }}>Title</Text>
        <TextInputExample/>
        <Text>Image File</Text>
        <TextInputExample />
        <Text>Address</Text>
        <TextInputExample/>
        <Text>YYYY-MM-DD</Text>
        <TextInputExample/>
        <Text>Capacity</Text>
        <TextInputExample/>
        <Text>Tags</Text>
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
              checked={check1}
              onPress={() => setCheck1(!check1)}
              width={150}
            />
          </>
          <>
            <CheckBox
              containerStyle
              title="Study"
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
              checked={check3}
              onPress={() => setCheck3(!check3)}
              width={150}
            />
          </>
          <>
            <CheckBox
              containerStyle
              title="Social"
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
              checked={check5}
              onPress={() => setCheck5(!check5)}
              width={150}
            />
          </>
          <>
            <CheckBox
              containerStyle
              title="Entertainment"
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
              checked={check7}
              onPress={() => setCheck7(!check7)}
              width={150}
            />
          </>
          <>
            <CheckBox
              containerStyle
              title="Food"
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
              checked={check9}
              onPress={() => setCheck9(!check9)}
              width={150}
            />
          </>
          <>
            <CheckBox
              containerStyle
              title="Other"
              checked={check10}
              onPress={() => setCheck10(!check10)}
              width={150}
            />
          </>
        </View>
        <Text style={{ top: 5 }}>Description</Text>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          <View style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
          }}>
          <TextInputDesc/>
        </View>
        <Button
        buttonStyle={{
          borderRadius: 10,
          marginBottom: 15,
        }}
        title="Post Event"
        backgroundColor={theme.colors.primary}
        onPress={() => Alert.alert('Simple Button pressed')}
        />
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
};

const TextInputExample = () => {
  const [text, onChangeText] = React.useState("");

  return (
    <View>
      <TextInput
        style={stylesBox.input}
        onChangeText={onChangeText}
        value={text}
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

const CheckboxComponent = () => {
  const [check1, setCheck1] = useState(false);

  return (
    <>
      <CheckBox
        center
        title="Click Here"
        checked={check1}
        onPress={() => setCheck1(!check1)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CreateEventScreen;
