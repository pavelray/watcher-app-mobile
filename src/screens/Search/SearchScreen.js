import React from "react";
import SearchComponent from "../../components/Business/SearchComponent/SearchComponent";
import { GenreContainer } from "./SearchScreen.style";
import { Text } from "../../components/UI/Typography/Text";
import { MEDIA_TYPE, MOVIE_GENRE, TV_GENRE } from "../../utils/constants";
import { ScrollView } from "react-native";
import { Spacer } from "../../components/UI/Spacer/Spacer";
import { Chip } from "react-native-paper";
import { Wrapper } from "../../components/UI/Wrapper/Wrapper";

function SearchScreen({ navigation }) {
  const navigateToPage = (genreId, mediaType) => {
    navigation.navigate("Search Result", {
      genreId: genreId,
      mediaType: mediaType,
    });
  };

  return (
    <Wrapper>
      <SearchComponent navigation={navigation} />
      <Spacer position="top" size="large" />
      <Spacer position="bottom" size="large">
        <Spacer position="left" size="medium">
          <Text variant="title">Movie Genres</Text>
        </Spacer>
      </Spacer>
      <ScrollView>
        <GenreContainer>
          {MOVIE_GENRE.map((genre) => (
            <Chip
              key={genre.id}
              onPress={() => navigateToPage(genre.id, MEDIA_TYPE.MOVIE)}
            >
              {genre.name}
            </Chip>
          ))}
        </GenreContainer>
        <Spacer position="top" size="large" />
        <Spacer position="bottom" size="large">
          <Spacer position="left" size="medium">
            <Text variant="title">Tv Genres</Text>
          </Spacer>
        </Spacer>
        <GenreContainer>
          {TV_GENRE.map((genre) => (
            <Chip
              key={genre.id}
              onPress={() => navigateToPage(genre.id, MEDIA_TYPE.TV_SERIES)}
            >
              {genre.name}
            </Chip>
          ))}
        </GenreContainer>
      </ScrollView>
    </Wrapper>
  );
}

export default SearchScreen;
