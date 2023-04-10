import React, { useContext, useEffect } from "react";
import SafeArea from "../../components/UI/SafeArea/SafeArea";
import { Text } from "../../components/UI/Typography/Text";
import {
  ActivityIndicator,
  Button,
  Card,
  Chip,
  MD2Colors,
} from "react-native-paper";
import { API_IMAGE_URL, MEDIA_TYPE } from "../../utils/constants";
import { Spacer } from "../../components/UI/Spacer/Spacer";
import {
  ButtonContainer,
  GenreContainer,
  MediaCard,
  MediaCardCover,
  MediaDetailsContainer,
  MovieStatsContainer,
} from "./MediaDetailsScreen.style";
import { ImageBackground, ScrollView } from "react-native";
import { MediaDetailsContext } from "../../services/Media/MediaDetailsContext";
import CastPreview from "../../components/Business/CastPreview/CastPreview";

const MediaDetailsScreen = ({ route, navigation }) => {
  const { id, type } = route.params;

  const navigateToPage = (genreId, mediaType) => {
    navigation.navigate("Search Result", {
      genreId: genreId,
      mediaType: mediaType,
    });
  };

  const { getMediaDetails, mediaDetails, isLoading } =
    useContext(MediaDetailsContext);

  useEffect(() => {
    getMediaDetails(type, id);
  }, [id]);

  return (
    <SafeArea>
      <ScrollView>
        {isLoading && (
          <ActivityIndicator animating={true} color={MD2Colors.red800} />
        )}
        {!isLoading && (
          <>
            <MediaCard mode="contained">
              <ImageBackground
                source={{
                  uri: `${API_IMAGE_URL}/original${mediaDetails.backdropPath}`,
                }}
                resizeMode="cover"
              >
                <MediaCardCover />
              </ImageBackground>
              <Card.Content>
                <Spacer position="bottom" size="large" />
                <Text variant="title">{mediaDetails.title}</Text>
                <Spacer position="bottom" size="medium" />
                <MovieStatsContainer>
                  <Text variant="caption">{mediaDetails.voteAverage && mediaDetails.voteAverage.toFixed(2)}</Text>
                  <Text variant="caption">{mediaDetails.status}</Text>
                  <Text variant="caption">
                    {new Date(mediaDetails.releaseDate).getFullYear()}
                  </Text>
                  <Text variant="caption">{mediaDetails.runtime}</Text>
                </MovieStatsContainer>
                <Spacer position="bottom" size="medium" />
                <Text variant="label">Storyline</Text>
                <Spacer position="bottom" size="small" />
                <Text variant="caption">{mediaDetails.overview}</Text>
                <Spacer position="bottom" size="large" />
                <ButtonContainer>
                  <Button
                    icon="movie"
                    mode="elevated"
                    onPress={() =>
                      navigation.navigate("VideoPlayer", {
                        videoUrl: `https://www.2embed.to/embed/tmdb/movie?id=${mediaDetails.id}`,
                        title: mediaDetails.title,
                      })
                    }
                  >
                    Watch Now
                  </Button>
                </ButtonContainer>
                <Spacer position="bottom" size="large" />
                <MediaDetailsContainer>
                  <Text variant="label">Genres</Text>
                  <Spacer position="bottom" size="medium" />
                  <GenreContainer>
                    {mediaDetails.genres &&
                      mediaDetails.genres.map((genre) => (
                        <Chip
                          key={genre.id}
                          onPress={() =>
                            navigateToPage(genre.id, MEDIA_TYPE.MOVIE)
                          }
                          mode="outlined"
                        >
                          <Text variant="caption">{genre.name}</Text>
                        </Chip>
                      ))}
                  </GenreContainer>
                  <Spacer position="bottom" size="large" />
                  {mediaDetails.castPreview && (
                    <>
                      <Text variant="label">Cast</Text>
                      <CastPreview
                        cast={mediaDetails.castPreview}
                        navigation={navigation}
                        allCredits={mediaDetails.credits}
                      />
                    </>
                  )}
                  <Spacer position="bottom" size="large" />
                </MediaDetailsContainer>
              </Card.Content>
            </MediaCard>
          </>
        )}
        <Spacer position="bottom" size="medium" />
      </ScrollView>
    </SafeArea>
  );
};

export default MediaDetailsScreen;
