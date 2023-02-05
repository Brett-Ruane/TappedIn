import { View, StyleSheet, TouchableHighlight } from "react-native";
import { Card, Text, Image, useTheme } from "@rneui/themed";

const EventCard = () => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    cardContainerStyle: {
      borderRadius: 10,
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
      fontSize: 28,
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
              uri: "https://dar.uga.edu/wp-content/uploads/UGA-Special-Events-Commencement-with-Hairy-Dawg-and-Ryan-Seacrest.png",
            }}
            containerStyle={styles.image}
          />
          <Text style={styles.p}>Posted by:</Text>
          <Text style={[styles.p, styles.primary]}>Username</Text>
        </View>

        <View style={[styles.column, styles.smallMarginHorizontal]}>
          <Text style={styles.h2}>Event Title</Text>
          <View style={styles.rowCenter}>
            <Image
              style={[styles.icon1, styles.smallMarginHorizontal]}
              source={require("../assets/icons/location.png")}
            />
            <Text style={styles.p}>Location</Text>
          </View>
          <View style={styles.rowCenter}>
            <Image
              style={[styles.icon2, styles.smallMarginHorizontal]}
              source={require("../assets/icons/calendar.png")}
            />
            <Text style={styles.p}>Date</Text>
          </View>
          <Text style={styles.p}>Description</Text>
        </View>
      </Card>
    </TouchableHighlight>
  );
};

export default EventCard;
