import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default ({ navigation}) => {
    const body = navigation.getParam('body');
    const title = navigation.getParam('title');
    const user = navigation.getParam('user');


  return (
    <View style={styles.container}>
      <Text>{user}</Text>
      <Text>{title}</Text>
      <Text>{body}</Text>
    </View>
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
