import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView, KeyboardAvoidingView} from "react-native";
import { CheckBox } from '@rneui/themed';

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

  return (
    <ScrollView>
    <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
      <Text style={{top: 5}}>Title</Text>
      <TextInputExample/>
      <Text style={{top: 5}}>Image File</Text>
      <TextInputExample/>
      <Text>Address</Text>
      <TextInputExample/>
      <Text>Tags</Text>
      <View style={{ flexDirection: 'row', flex: 1, justifyContent: "flex-start", alignItems: "left" }}>
      <>
    <CheckBox
      left
      title="Gaming"
      checked={check1}
      onPress={() => setCheck1(!check1)}
      width={150}
    />
  </>
  <>
    <CheckBox
      left
      title="Study"
      checked={check2}
      onPress={() => setCheck2(!check2)}
      width={150}
    />
  </>
      </View>
      <View style={{ flexDirection: 'row', flex: 1, justifyContent: "flex-start", alignItems: "left" }}>
      <>
    <CheckBox
      left
      title="Sports"
      checked={check3}
      onPress={() => setCheck3(!check3)}
      width={150}
    />
  </>
  <>
    <CheckBox
      left
      title="Social"
      checked={check4}
      onPress={() => setCheck4(!check4)}
      width={150}
    />
  </>
      </View>
      <View style={{ flexDirection: 'row', flex: 1, justifyContent: "flex-start", alignItems: "left" }}>
      <>
    <CheckBox
      left
      title="Business"
      checked={check5}
      onPress={() => setCheck5(!check5)}
      width={150}
    />
  </>
      <>
    <CheckBox
      left
      title="Entertainment"
      checked={check6}
      onPress={() => setCheck6(!check6)}
      width={150}
    />
  </>
      </View>
      <View style={{ flexDirection: 'row', flex: 1, justifyContent: "flex-start", alignItems: "left" }}>
      <>
    <CheckBox
      left
      title="Fitness"
      checked={check7}
      onPress={() => setCheck7(!check7)}
      width={150}
    />
  </>
      <>
    <CheckBox
      left
      title="Food"
      checked={check8}
      onPress={() => setCheck8(!check8)}
      width={150}
    />
  </>
      </View>
      <View style={{ flexDirection: 'row', flex: 1, justifyContent: "flex-start", alignItems: "left" }}>
      <>
    <CheckBox
      left
      title="Charity"
      checked={check9}
      onPress={() => setCheck9(!check9)}
      width={150}
    />
  </>
      <>
    <CheckBox
      left
      title="Other"
      checked={check10}
      onPress={() => setCheck10(!check10)}
      width={150}
    />
  </>
      </View>
      <Text style={{top: 5}}>Desc.</Text>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <TextInputDesc/>
      </KeyboardAvoidingView>
    </View>
    </ScrollView>
  );
};

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={stylesBox.input}
        onChangeText={onChangeText}
        value={text}
      />
    </SafeAreaView>
  );
};

const TextInputDesc = () => {
  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={stylesDesc.input}
        onChangeText={onChangeText}
        value={text}
        textAlignVertical="top"
        multiline={true}
        maxLength={250}
      />
    </SafeAreaView>
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
