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
  GenreContainer,
  MediaCard,
  MediaCardCover,
} from "./MediaDetailsScreen.style";
import { ImageBackground } from "react-native";
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
      {isLoading && (
        <ActivityIndicator animating={true} color={MD2Colors.red800} />
      )}
      {!isLoading && (
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
            <Text variant="caption">{mediaDetails.overview}</Text>
            <Spacer position="bottom" size="large" />
            <GenreContainer>
              {mediaDetails.genres &&
                mediaDetails.genres.map((genre) => (
                  <Chip
                    key={genre.id}
                    onPress={() => navigateToPage(genre.id, MEDIA_TYPE.MOVIE)}
                    mode="outlined"
                  >
                    {genre.name}
                  </Chip>
                ))}
            </GenreContainer>
            <Spacer position="bottom" size="large" />
            {mediaDetails.castPreview && (
              <>
                <Text variant="label">Cast</Text>
                <CastPreview cast={mediaDetails.castPreview} />
              </>
            )}
            <Button
              icon="video"
              mode="contained"
              onPress={() =>
                navigation.navigate("VideoPlayer", {
                  videoUrl: `https://www.2embed.to/embed/tmdb/movie?id=${mediaDetails.id}`,
                  title: mediaDetails.title,
                })
              }
            >
              Watch Now
            </Button>
          </Card.Content>
        </MediaCard>
      )}
      <Spacer position="bottom" size="medium" />
    </SafeArea>
  );
};

export default MediaDetailsScreen;
