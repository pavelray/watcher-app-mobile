import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

const SearchComponent = () => {
  // const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSearch = (value) => {
    console.log(searchQuery);
    // searchQuery();
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
