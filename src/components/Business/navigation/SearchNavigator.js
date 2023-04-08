import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import SearchScreen from "../../../screens/Search/SearchScreen";
import SearchResultScreen from "../../../screens/SearchResult/SearchResultScreen";
import MediaDetailsScreen from "../../../screens/MediaDetails/MediaDetailsScreen";
import PlayMediaScreen from "../../../screens/PlayMedia/PlayMediaScreen";


const SearchStack = createStackNavigator();
const SearchNavigator = () => {
  return (
    <SearchStack.Navigator
      screenOptions={{ ...TransitionPresets.ModalSlideFromBottomIOS}}
    >
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen name="Search Result" component={SearchResultScreen} />
      <SearchStack.Screen name="Details" component={MediaDetailsScreen} />
      <SearchStack.Screen name="VideoPlayer" component={PlayMediaScreen} />
    </SearchStack.Navigator>
  );
};

export default SearchNavigator;
