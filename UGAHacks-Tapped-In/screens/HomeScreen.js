import { useEffect, useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import EventCard from "../components/EventCard";
import { useFetch } from "../hooks/useFetch";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bf",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f6r",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d7t",
    title: "Third Item",
  },
];

const HomeScreen = ({ navigation }) => {

  const { get } = useFetch();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getAllEvents();
  }, []);

  const getAllEvents = async () => {
    try {
      const response = await get("get");
      const responseData = response.data;
      if (responseData) {
        setEvents(responseData);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        renderItem={({ item }) => {
          return (
          <EventCard event={item} onClick={() => navigation.navigate("Event", {_id: item._id})} />
        )}}
        keyExtractor={(event) => event._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#EDEAEA",
    alignItems: "stretch",
    justifyContent: "center",
  },
});

export default HomeScreen;
