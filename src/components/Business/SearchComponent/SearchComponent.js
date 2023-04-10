import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

const SearchComponent = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  const navigateToPage = (searchQuery) => {
    navigation.navigate("Search Result", {
      query: searchQuery,
    });
  };

  const handleSearch = (value) => {
    navigateToPage(searchQuery);
  };

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        onSubmitEditing={handleSearch}
      />
    </SearchContainer>
  );
};

export default SearchComponent;
