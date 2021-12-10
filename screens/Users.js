import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
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
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const responde = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await responde.json()
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => fetchUsers(),[])
  return (
    <View style={styles.container}>
      {loading 
      ? <Text>Cargando...</Text>
      :
        <FlatList
          style={styles.list}
          data={users}
          keyExtractor={(x) => x.id}
          renderItem={({ item }) => <ListItem onPress={() => navigation.navigate('Posts', {user_id: item.id, name:item.name})} title={item.name}/>}
        />
      }
    </View>
  );
};
