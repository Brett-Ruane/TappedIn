import { View, StyleSheet, TouchableHighlight } from "react-native";
import { useEffect, useState } from "react";
import { Card, Text, Image, useTheme } from "@rneui/themed";
import { useFetch } from "../hooks/useFetch";

const EventCard = ({ event, onClick }) => {
  const { theme } = useTheme();

  const { get } = useFetch();
  const [user, setUser] = useState();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await get("getprofile", {
        params: { user_id: event.user_id }
      });
      const responseData = response.data;
      if (responseData) {
        setUser(responseData);
      }
    } catch (e) {
      console.log(e);
    }
  }

  const styles = StyleSheet.create({
    cardContainerStyle: {
      borderRadius: 10,
      shadowColor: theme.colors.primary,
    },
    row: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    rowCenter: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    rowSpaceBetweenCenter: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    column: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    columnCenter: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    p: {
      fontFamily: "Dosis-Medium",
      fontSize: 16,
      wrapperStyle: ""
    },
    username: {
      fontFamily: "Dosis-Medium",
      fontSize: 16,
    },
    image: {
      aspectRatio: 1,
      width: 100,
      resizeMode: "contain",
    },
    icon1: {
      width: 15,
      height: 20,
      resizeMode: "contain",
    },
    icon2: {
      width: 20,
      height: 15,
      resizeMode: "contain",
    },
    h2: {
      fontFamily: "Dosis-Bold",
      fontSize: 20,
      color: theme.colors.primary,
    },
    primary: {
      color: theme.colors.primary,
    },
    smallPadding: {
      padding: 10,
    },
    smallMarginHorizontal: {
      marginHorizontal: 7,
    },
    smallMarginVertical: {
      marginVertical: 2,
    },
  });

  return (
    <TouchableHighlight onPress={onClick} underlayColor="white">
      <Card
        containerStyle={styles.cardContainerStyle}
        wrapperStyle={styles.row}
      >
        <View style={[styles.columnCenter, styles.smallMarginHorizontal]}>
          <Card.Image
            source={{
              uri: event.event,
            }}
            containerStyle={styles.image}
          />
          <Text style={styles.p}>Posted by:</Text>
          {user && <Text style={[styles.p, styles.primary]}>{user.username}</Text>}
        </View>

        <View style={[styles.column, styles.smallMarginHorizontal, {flexShrink: 1}]}>
          <Text style={styles.h2}>{event.title}</Text>
          <View style={styles.rowCenter}>
            <Image
              style={[styles.icon1, styles.smallMarginHorizontal]}
              source={require("../assets/icons/location.png")}
            />
            <Text style={[styles.p, styles.smallMarginVertical]}>{event.address}</Text>
          </View>
          <View style={styles.rowCenter}>
            <Image
              style={[styles.icon2, styles.smallMarginHorizontal]}
              source={require("../assets/icons/calendar.png")}
            />
            <Text style={[styles.p, styles.smallMarginVertical]}>{`${event.date} ${event.time}`}</Text>
          </View>
          <Text style={[styles.p, styles.smallMarginVertical]}>
            {event.description}
          </Text>
        </View>
      </Card>
    </TouchableHighlight>
  );
};

export default EventCard;
