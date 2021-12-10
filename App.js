import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import UserScreen from "./screens/Users";
import PostsScreen from "./screens/Posts";
import DetailScreen from "./screens/Detail";

const AppNavigator = createStackNavigator(
  {
    Users: {
      screen: UserScreen,
    },
    Posts: {
      screen: PostsScreen,
    },
    Detail: {
      screen: DetailScreen,
    },
  },
  {
    initialRouteName: "Users",
  }
);

export default createAppContainer(AppNavigator);
