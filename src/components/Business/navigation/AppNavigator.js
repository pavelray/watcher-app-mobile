import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SearchNavigator from "./SearchNavigator";
import SafeArea from "../../UI/SafeArea/SafeArea";

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <SafeArea>
      <Text>Settings!</Text>
    </SafeArea>
  );
}
function MapsScreen() {
  return (
    <SafeArea>
      <Text>Maps!</Text>
    </SafeArea>
  );
}

const renderSearchIcon = (color, size) => {
  return <MaterialCommunityIcons name="magnify" size={size} color={color} />;
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={MapsScreen}
          options={{
            tabBarLabel: "Home",
          }}
        />
        <Tab.Screen
          name="SearchScreen"
          component={SearchNavigator}
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color, size }) => renderSearchIcon(color, size),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: "Settings",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
