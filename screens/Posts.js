import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ListItem from "../components/ListItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  list: {
    alignSelf: "stretch",
  },
});

export default ({ navigation }) => {
  const userId = navigation.getParam("user_id");
  const userName = navigation.getParam("name");

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const responde = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await responde.json();
    setPosts(data);
    setLoading(false);
  };

  useEffect(() => fetchPosts(), []);
  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Cargando...</Text>
      ) : (
        <FlatList
          style={styles.list}
          data={posts.filter((post) => post.userId === userId)}
          keyExtractor={(key) => key.id}
          renderItem={({ item }) => (
            <ListItem
              onPress={() =>
                navigation.navigate("Detail", {
                  title: item.title,
                  body: item.body,
                  user:userName
                })
              }
              title={item.title}
            />
          )}
        />
      )}
    </View>
  );
};
