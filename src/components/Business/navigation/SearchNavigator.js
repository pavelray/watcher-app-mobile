import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import SearchScreen from "../../../screens/Search/SearchScreen";
import SearchResultScreen from "../../../screens/SearchResult/SearchResultScreen";


const SearchStack = createStackNavigator();
const SearchNavigator = () => {
  return (
    <SearchStack.Navigator
      screenOptions={{ ...TransitionPresets.ModalSlideFromBottomIOS}}
    >
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen name="Search Result" component={SearchResultScreen} />
    </SearchStack.Navigator>
  );
};

export default SearchNavigator;
