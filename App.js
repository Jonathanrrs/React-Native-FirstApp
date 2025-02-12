import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"; /* contenedor de multiples pantallas */
import { createStackNavigator } from "@react-navigation/stack";

const Stack =  createStackNavigator();
import UserList from "./screens/UsersList";
import CreateUserScreen from "./screens/CreateUserScreen";
import UserDetailScreen from "./screens/UserDetailScreen";

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UserList" component={UserList} options={{title: 'Users List'}}/>
      <Stack.Screen name="CreateUserScreen" component={CreateUserScreen} options={{title: 'Create a new user'}}/>
      <Stack.Screen name="UserDetailScreen" component={UserDetailScreen} options={{title: 'User detail'}}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
