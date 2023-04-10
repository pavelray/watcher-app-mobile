import React, { useContext, useEffect } from "react";
import { Text } from "../../components/UI/Typography/Text";
import SafeArea from "../../components/UI/SafeArea/SafeArea";
import { MEDIA_TYPE, MOVIE_GENRE, TV_GENRE } from "../../utils/constants";
import { Spacer } from "../../components/UI/Spacer/Spacer";
import { FlatList, TouchableOpacity, View } from "react-native";
import { SearchContext } from "../../services/Search/SearchContext";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import ListCard from "../../components/UI/ListCard/ListCard";

function SearchResultScreen({ route, navigation }) {
  const { mediaType, genreId, query } = route.params;
  const {
    getMediaByGenre,
    searchresult,
    isLoading,
    error,
    loadMore,
    isLoadingNextPage,
  } = useContext(SearchContext);

  const selectedGenre =
    (mediaType === MEDIA_TYPE.MOVIE
      ? MOVIE_GENRE.find((x) => x.id === genreId)
      : TV_GENRE.find((x) => x.id === genreId)) || {};

  useEffect(() => {
    getMediaByGenre(query, mediaType, selectedGenre.id);
  }, [mediaType, selectedGenre.id]);

  return (
    <SafeArea>
      <Spacer position="top" size="large" />
      <Spacer position="left" size="large">
        <Text variant="title">{selectedGenre.name}</Text>
      </Spacer>
      {isLoading && (
        <ActivityIndicator animating={true} color={MD2Colors.red800} />
      )}
      {!isLoading && (
        <FlatList
          data={searchresult}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Details", { id: item.id, type: mediaType || item.mediaType })
              }
            >
              <ListCard item={item} key={index} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{ padding: 16, marginTop: 16 }}
          onEndReached={() => loadMore(mediaType, genreId)}
          onEndReachedThreshold={0.3}
          ListFooterComponent={
            isLoadingNextPage ? (
              <ActivityIndicator animating={true} color={MD2Colors.red800} />
            ) : null
          }
        />
      )}
    </SafeArea>
  );
}

export default SearchResultScreen;
